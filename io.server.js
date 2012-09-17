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
    socket.on('submit', function (data) {
      var num1 = parseInt(data.num1);
      var num2 = parseInt(data.num2);
      var ans = parseInt(data.ans);

      if (num1 + num2 === ans) {
        io.sockets.emit('bingo', {
          id: socket.id,
          time: new Date()
        });
      }
    });
    console.log('hello guest');
  });
};

