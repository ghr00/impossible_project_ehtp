var express = require('express');
var logger = require('morgan')

var path = require('path'),
    os = require('os'),
    fs = require('fs');

var history = require('connect-history-api-fallback');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

var inspect = require('util').inspect;

var port = /* process.env.PORT ||  */5000;
var hostname = '127.0.0.1';

const axios = require('axios');

var cors = require('cors')

app.use(cors())

var docs = [
  { id:0, image: "HTTP", name: "Axios test", author: "AXIOS API" },
  { id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", author: "Random Alaoui" },
  { id:2, image: "PDF", name: "Cours de resistance de materiaux", author: "Hamid Lambda" },
  { id:3, image: "PNG", name: "Affiche de SafeRoad Hackathon", author: "Yahemdi Amine" }
]

const bodyParser = require('body-parser')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

var Busboy = require('busboy');

// Parse and save all incoming files to disk:
app.post('/single-file', (req, res) => {

  var busboy = new Busboy({ headers: req.headers });

  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename);
      file.on('data', function(data) {
        console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });

      var saveTo = path.join(os.tmpdir(), "ehtpdocs/" + filename); /* path.basename("ehtpdocs/" + filename)); */
      file.pipe(fs.createWriteStream(saveTo));
  });

  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    console.log('Field [' + fieldname + ']: value: ' + inspect(val));
  });
  busboy.on('finish', function() {
      console.log('Done parsing form!');
      /* res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end(); */
    });
  req.pipe(busboy);
  
}) 

app.use(logger('dev'));

app.use(history());

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });


io.on('connection', function (socket) {
  socket.on('updateDocuments', function (msg, from) {
    console.log('I received a private message by ', from, ' saying ', msg);

    // On charge les documents de la base de donnée !

        /* MongoDB */

    // On les envoie au client
    socket.emit('receiveDocumentsFromServer', docs);

    console.log("I sended documents to client");
    console.log(docs);
  });
});