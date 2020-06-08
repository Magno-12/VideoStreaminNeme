const express = require('express');
const app = express();

//servidor apartir de la libreria express
const http = require('http').Server(app);
// para generar comunicacion
const io = require('socket.io')(http);

//rutas

app.use(require('./routes/Wcam.routes.js'));

// donde se van a cargar los archivos HTML

app.use(express.static(__dirname + "/public"));

io.on('connection', (socket) => {
    socket.on('stream', (image) =>{
            //emitir
            socket.broadcast.emit('stream', image);
    });
});

module.exports = http;
