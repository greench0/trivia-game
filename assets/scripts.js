$(document).ready(function () {
  // ==========================================================

  // Create a basic html button then create an onClick event that triggers an on click event.
  // 
  // function triviaGame(question, answers, correctAnswer) {
  // this.question = question;
  // this.answers = answers;
  // this.correctAnswer = correctAnswer;
  // } // end function triviagame
  // 
  // ==========================================================

// global variables 
var currentQ = 0;
var userCorrectAnswers = 0;
var userWrongAnswers = 0;
  
$("#results").hide();
$(".timer").hide();

function buttonClick() {
  $(".restart").on("click", function () {
    console.log("restart text");
   
    });
       
  } // ========== end answer button options ==========
  
function restart() {
currentQ = 0;
userCorrectAnswers = 0;
userWrongAnswers = 0;
}
  // ======================== 
  // variable for questions, answers, and correct answers 
  var questions = [{
    question: "What is 2 * 5?",
    answers: [2, 5, 10, 15],
    correctAnswer: 2
  }, {
    question: "What is 4 - 1?",
    answers: [1, 2, 3, 4],
    correctAnswer: 0
  }, {
    question: "What is 5 + 5?",
    answers: [25, 10, 0, 42],
    correctAnswer: 1
  }, {
    question: "What is 1 * 6?",
    answers: [4, 5, 6, 7],
    correctAnswer: "2"
  }, {
    question: "What is 8 * 8?",
    answers: [64, 30, 40, 50],
    correctAnswer: 0
  }];



  // when you click the start button run createTrivia function
  $("#startButton").on("click", function () {
    $(".timer").show();
    countDown();
    createAnswer();
    
//     delayButtonAlert = setTimeout(function() {
//       currentQ++;
// createAnswer();
//     }, 5000);
    
  });



  // ==========================================================
  // countdown timer function
  function countDown() {
    var n = $('.c').attr('id');
    var c = n;
    $('.c').text(c);
    setInterval(function () {
      c--;
      if (c >= 0) {
        $('.c').text(c);
      }
      // if (c == 0) {
      //   $('.c').text(n);
      // }
    }, 1000);

  }

  // Start
 



  // ==========================================================
  // create a function that generates the Current Question and answer options,
  function createAnswer() {
    // hide the start button
    $("#startButton").hide();
    
    check()
    createQuestion();
    countDown();
    // create the answers div and add it to the questins
    $(".trivia").html('<div class=answers/></div>');

    // variable data
    var answers = questions[currentQ].answers;
   
    for (i = 0; i < answers.length; i++) {
     var choice = answers[i];
      $(".answers").append("<br>" + '<button class= buttons id=' + i + '>' + choice + '</button>');
    }
    buttonClick();
   
  }// =========== end createAnswer ===========


 // ==========================================================
  // create the Current Question
  function createQuestion() {
    // add the current question to the questions div in the html
    var question = questions[currentQ].question;
    $(".question").text('Question: ' + question);
  }



 // ==========================================================
function check() {
    if (questions[currentQ] === undefined) {
      $(".trivia").hide();
      $(".quizMessage").hide();
      $(".question").hide();
      $("#results").show();
      $("#startButton").show();
      $("#buttonDiv").html('<button class=restart>Restart</button>');
      restart();
    } 
 else {
   console.log("etcsdlfjk");
 }

 
} // ==========================================================

  // ========== button click function =============            
  function buttonClick() {
  $(".buttons").on("click", function () {
    check()

    var variableQ = questions[currentQ].correctAnswer;
var parseVariableQ = ''+ variableQ + ''; 
console.log(parseVariableQ);
    var buttonValue = ($(this).attr('id'));
    // console.log(parseVariableQ, "-- " + buttonValue);
    if (parseVariableQ === buttonValue) {
      console.log("woop" );
      userCorrectAnswers++;
      } 
      else {
        userWrongAnswers++;
      }
      displayScore()

    currentQ++;
createAnswer();
    return buttonValue;
    });
       
  } // ========== end answer button options ==========
    

  //=================================
  // display score
  function displayScore() {
    $(".quizMessage").text("You have answered: " + currentQ + " out of " + questions.length + " questions");
    $(".correct").text(userCorrectAnswers);
    $(".wrong").text(userWrongAnswers);

  }

  // ==========================================================
}); // end document ready
