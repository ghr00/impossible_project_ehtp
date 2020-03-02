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
  { id:0, image: "HTTP", name: "Axios test", desc: "Description", author: "AXIOS API", file: ""},
  { id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", desc: "Description", author: "Random Alaoui", file: ""},
  { id:2, image: "PDF", name: "Cours de resistance de materiaux", desc: "Description", author: "Hamid Lambda", file: ""},
  { id:3, image: "PNG", name: "Affiche de SafeRoad Hackathon", desc: "Description", author: "Yahemdi Amine", file: ""},
]

const bodyParser = require('body-parser')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

var Busboy = require('busboy');

var element = { id:-1, image: '', name: '', desc: '', author: '' };

const FILES = "public/files/";

/* app.post('/download-file', (req, res) => {

  var busboy = new Busboy({ headers: req.headers });

  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    console.log('Field [' + fieldname + ']: value: ' + inspect(val));

    if(fieldname.localeCompare("filename") == 0)
    {
      const filePath = FILES.concat(String(val));

      console.log('filepath : ',  path.join(__dirname,  filePath) );

      res.download(path.join(__dirname,  filePath), (err)=>{console.log(err)} );
    }  
  });
  busboy.on('finish', function() {
    console.log('Fin de la requete download-file!');
  });
  req.pipe(busboy);
}); */

// define a route to download a file 
app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var filePath = FILES.concat(file);
  var fileLocation = path.join(__dirname, filePath);//path.join('./public/files/',file);
  console.log(fileLocation);
  res.download(fileLocation, file); 
});

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

    var saveTo = path.join(FILES, filename); /* path.basename("ehtpdocs/" + filename)); */
    file.pipe(fs.createWriteStream(saveTo));

    element.file = filename;
  });

  busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    console.log('Field [' + fieldname + ']: value: ' + inspect(val));

    element.id = 100;

    if(fieldname.localeCompare("name") == 0)  
      element.name = inspect(val);

    else if(fieldname.localeCompare("desc") == 0)  
      element.desc = inspect(val);
    
  });
  busboy.on('finish', function() {
    console.log('Done parsing form!');
      /* res.writeHead(303, { Connection: 'close', Location: '/' });
      res.end(); */

      if(element.id != -1)
        docs.push(element);
      
      console.log(docs);

      element = { id:-1, image: "", name: "", desc: "", author: "" };
  });
  req.pipe(busboy);
  
});

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