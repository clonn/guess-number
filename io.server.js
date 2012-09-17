/**
 * @overview
 *
 * @author 
 * @version 2012/09/18
 */
var socketio = require('socket.io'),
    io;

exports.io = function (server) {
  var num1= Math.ceil(Math.random() * 100),
      num2= Math.ceil(Math.random() * 100);

  io = socketio.listen(server);

  io.sockets.on('connection', function (socket) {
    socket.emit('init', {
      id: socket.id
    });

    io.sockets.emit('reset', {
      num1: num1, 
      num2: num2 
    });

    socket.on('submit', function (data) {
      var ans = parseInt(data.ans);

      if (num1 + num2 === ans) {
        io.sockets.emit('bingo', {
        //socket.broadcast.emit('bingo', {
          id: socket.id,
          time: new Date()
        });

        // reset num1, num2
        num1= Math.ceil(Math.random() * 100);
        num2= Math.ceil(Math.random() * 100);

        io.sockets.emit('reset', {
          num1: num1, 
          num2: num2 
        });
      }
    });
  });
};

