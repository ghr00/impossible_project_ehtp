var express = require('express');
var logger = require('morgan')
var path = require('path')

var history = require('connect-history-api-fallback');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 5000;
var hostname = '127.0.0.1';

var docs = [
  { id:0, image: "HTTP", name: "Axios test", author: "AXIOS API" },
  { id:1, image: "PDF", name: "Examen analyse 2019 SIG/GI", author: "Random Alaoui" },
  { id:2, image: "PDF", name: "Cours de resistance de materiaux", author: "Hamid Lambda" },
  { id:3, image: "PNG", name: "Affiche de SafeRoad Hackathon", author: "Yahemdi Amine" }
]

app.use(logger('dev'));

app.use(history());

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });

io.on('connection', function (socket) {
  socket.on('updateDocuments', function (msg, from) {
    console.log('I received a private message by ', from, ' saying ', msg);

    // On charge les documents de la base de donnée !

    // On les envoie au client
    socket.emit('receiveDocumentsFromServer', docs);

    console.log("I sended documents to client");
    console.log(docs);
  });
});