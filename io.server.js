/**
 * @overview
 *
 * @author 
 * @version 2012/09/18
 */
var socketio = require('socket.io'),
    io;

exports.io = function (server) {
  io = socketio.listen(server);

  io.sockets.on('connection', function (socket) {
    console.log('hello guest');
  });
};

