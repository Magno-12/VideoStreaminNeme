const http = require('./app');
const server = http.createServer(app);
const io = Socketio.listen(server);

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));

http.listen(3000, () => {
        console.log('servidor en puerto 3000 funcionando');
});

server.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
});