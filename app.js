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

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'EHTPDocs';

// Create a new MongoClient
const client = new MongoClient(url);

var db = null;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);

  /* client.close(); */
});

const FILES = "public/files/";

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
      {
        // Get the documents collection
        const collection = db.collection('Documents');
        // Insert some documents
        collection.insertOne(element, function(err, result) {
          assert.equal(err, null);
          assert.equal(1, result.result.n);
          assert.equal(1, result.ops.length);
          console.log("Inserted 1 documents into the collection");
          //callback(result);
        });
      }
        /* docs.push(element); */
      
      //console.log(docs);

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

        /* MongoDB */
    if(client.isConnected)
    {
      // On charge les documents de la base de donnée !
      db.collection("Documents").find({}).toArray(function(err, documents) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(documents);
        //callback(documents);

        //docs = documents;

        // On les envoie au client
        socket.emit('receiveDocumentsFromServer', documents);

        console.log("I sended documents to client");
        console.log(documents);
      });
     
    }

    else 
      console.log("Erreur de la connexion à la base de donnée (io.on('connection'))");
    
  });
});