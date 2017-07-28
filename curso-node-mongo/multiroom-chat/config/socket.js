var socket = require('socket.io');

module.exports = (application, server) => {
    var io = socket.listen(server);
    

    io.on('connection', (socket) => {
        console.log("Tentativa de conexão!");

        socket.on('disconnect', (t) => {
            console.log(t);
        });

    });

    application.set('io', io);
}