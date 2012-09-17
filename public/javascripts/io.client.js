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
        num2Node = formNode.find('input[name=ans]');


    // form submit event
    formNode.on('submit', function (e) {

      e.preventDefault();

    
    });

  });

}(jQuery));


