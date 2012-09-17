/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    num1: Math.ceil(Math.random() * 100),
    num2: Math.ceil(Math.random() * 100),
    title: 'Guess Number ??? - Power by Node.js TW' 
  });
};

exports.sum = function(req, res){

  var num1 = parseInt(req.body.num1, 10);
  var num2 = parseInt(req.body.num2, 10);
  var ans = parseInt(req.body.ans, 10);

  if (num1 + num2 === ans) {

    res.render('sum', { 
      error: false,
      msg: "Bingo! next question",
      num1: Math.ceil(Math.random() * 100),
      num2: Math.ceil(Math.random() * 100),
      title: 'Guess Number ??? - Power by Node.js TW' 
    });

  } else {

    res.render('sum', { 
      error: true,
      msg: "Guess Wrong number",
      num1: num1, 
      num2: num2, 
      title: 'Guess Number ??? - Power by Node.js TW' 
    });
  
  }

};
