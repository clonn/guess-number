/**
 * @overview
 *
 * @author 
 * @version 2012/09/18
 */
(function ($) {
  $(document).ready(function () {

    var socket = io.connect(),
        formNode = $('form'),
        num1Node = formNode.find('input[name=num1]'), 
        num2Node = formNode.find('input[name=num2]'), 
        ansNode = formNode.find('input[name=ans]');


    // form submit event
    formNode.on('submit', function (e) {

      e.preventDefault();

      socket.emit('submit', {
        num1: num1Node.val(),
        num2: num2Node.val(),
        ans: ansNode.val()
      });

    });

    socket.on('bingo', function (data) {
    
      alert(data.id + ' answer the right! ' + data.time);
    });

  });

}(jQuery));


