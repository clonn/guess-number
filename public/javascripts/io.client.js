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

    socket.on('init', function (data) {
      $('.hd p').html(data.id); 
    });

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
      $('.record').append('<p>' + data.id + ' answer the right! ' + data.time + '</p>');
    });

    socket.on('reset', function (data) {
      $('.num1').html(data.num1);
      $('.num2').html(data.num2);
      num1Node.val(data.num1);
      num2Node.val(data.num2);
      ansNode.val('');
    });

  });

}(jQuery));


