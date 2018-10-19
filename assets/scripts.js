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

  //add an eventlistner to the start button. when clicked run createQuestion function
  startButton.addEventListener('click', self.createQuestion);

  // ======================== 
  // variable for questions, answers, and correct answers 
  var questions = [{
    question: "What is 2 * 5?",
    answers: [2, 5, 10, 15],
    correctAnswer: 2
  }, {
    question: "What is 3 * 1?",
    answers: [3, 6, 9, 12],
    correctAnswer: 0
  }, {
    question: "What is 5 + 5?",
    answers: [25, 10, 0, 42],
    correctAnswer: 1
  }, {
    question: "What is 1 * 6?",
    answers: [4, 5, 6, 7, 8],
    correctAnswer: 2
  }, {
    question: "What is 8 * 8?",
    answers: [64, 30, 40, 50],
    correctAnswer: 0
  }];


// global variables 
var currentQ = 0;
var correctAnswers = 0;
var wrongAnswers = 0;


// when you click the start button run createquestion function
  $("#startButton").on("click", function () {
  createQuestion();
  });



  // ==========================================================
  // create a function that generates the Current Question and answer options,
  function createQuestion() {
    // hide the start button
    $("#startButton").hide();

    // add the current question to the questions div in the html
    $(".trivia").text('Question: ' + questions[currentQ].question);

    // create the answers div and add it to the questins
    $('<div class=answers/></div>').appendTo(".trivia");
    
  
    // data
    var answers = questions[currentQ].answers.length;
    var correct = questions[currentQ].correctAnswer;

    var choice;
    for (i = 0; i < answers; i++) {
      choice = questions[currentQ].answers[i];
      $("<br>" + '<button id=answer' + i + '>' + choice + '</button>').appendTo(".answers");
    }



 

  
// ========== answer button options =============            
$("#answer0").on("click", function () {
//   if (questions[currentQ] === undefined) {
//     console.log("undefined!!!!!");
// } 
  
   if (0 === correct) {
    correctAnswers++;
    console.log("woop" + correctAnswers);
  }
  else {
    wrongAnswers++;
    console.log("noo" + correctAnswers);
  }

  currentQ++;
  createQuestion();
});


$("#answer1").on("click", function () {
  if (1 === correct) {
    correctAnswers++;
    console.log("woop" + correctAnswers);
  }
  else {
    wrongAnswers++;
    console.log("noo" + correctAnswers);
  }
  currentQ++;
  createQuestion();
});


$("#answer2").on("click", function () {
  if (2 === correct) {
    correctAnswers++;
    console.log("woop" + correctAnswers);
  }
  else {
    wrongAnswers++;
    console.log("noo" + correctAnswers);
  }
  currentQ++;
  createQuestion();
});


$("#answer3").on("click", function () {
  if (3 === correct) {
    correctAnswers++;
    console.log("woop" + correctAnswers);
  }
  else {
    wrongAnswers++;
    console.log("noo" + correctAnswers);
  }
  currentQ++;
  createQuestion();
});
// ========== end answer button options ==========

    // show how many questions you have answered
    $(".question").append("<br>" + "You have answered: " + currentQ + " out of " + questions.length + " questions");


    // add +++ to the current question so when it runs again. it goes to the next question in the array.
    displayScore();
  }// =========== end createQuestion ===========





  //=================================
  // display score
  function displayScore() {
    $(".quizMessage").text("You have answered: " + currentQ + " out of " + questions.length + " questions");
   
    
    // $(document).find("#results").text("Correct Answers: " + correctAnswers);
    $(document).find(".quizContainer > .result").show();

    $(".correct").text(correctAnswers);
    $(".wrong").text(wrongAnswers);

    console.log(correctAnswers);
  }


  // ==========================================================

  // ==========================================================



}); // end document ready
