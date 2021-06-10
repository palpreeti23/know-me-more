var readlineSync = require('readline-sync')

var score = 0;

//arrey of highScore
var highScore = [
  {
    name : "preetipal",
    score : 10
  }
]

var userAnswer = readlineSync.question("what is your name?")

console.log("welcome !" + userAnswer + " to DO YOU KNOW PREETIPAL")

console.log("*******************************")

console.log("here are the questions......")

//play function
function play(question , answer) {
var userAnswer = readlineSync.question(question)

if(userAnswer===answer) {
  console.log("yeah...  right answer")
  score = score +1;
  console.log("your score is..." + score)

} else {
  console.log("oops ! wrong answer")
  console.log("the right answer is ...." + answer)
  score = score -1;
  console.log("your score is..." + score)
}
  
console.log("*******************************")

}

//arrey of objects
var questions = [
  {
    question : "what is my current fav song? ",
    answer : "mohabbat"
  },
  {
    question :"what is my fav color? ",
    answer : "purple"
  },
  {
    question : "who is my fav actor? ",
    answer : "yang yang"
  },
  {
    question : "who is my fav singer?",
    answer : "jass manak"
  },
  {
    question : "who is my best friend?",
    answer : "sakshi"
  },
  {
    question : "what is my fav food? ",
    answer : "chikki"
  },
  {
    question : "which is my fav drama? ",
    answer : "DDYD"
  },
  {
    question : "which is my fav character in cdrama?",
    answer : "xiao nai"
  },
  {
    question : "what is my hobby?",
    answer : "watching cdrama"
  },
  {
    question : "what is my fav destination?",
    answer : "seoul"
  }
];
     
//loop

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


 console.log("your TOTAL SCORE is ..." + score)

console.log("CHECK OUT THE SCORES")



//loop

for(var i=0; i<highScore.length; i++ ) {
  var currentHighScore = highScore[i];
console.log(currentHighScore.name +": " + currentHighScore.score)
}

