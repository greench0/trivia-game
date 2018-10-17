// Basic Global Variables
var timeRemaning = 30;

var correct = 0;
var incorrect = 0;
var notAnswered = 0;

var randomNumber = [];

// basic trivia game with a timer count down
// start button to start the game

// show a question and 4 possible answers. 
// also at the same time show a timer that counts down from 10 - 0. if it gets to 0 + 1 to the not answered var

//     once answered display if the answer was right or wrong and display the correct answers

// repeat for x amount of questions.answers

// at the end of the game display the correct, incorrect, and not answered stats : - and show a new button to start over.answers


let triviaQuestions = [
  {
    question: "Question 1: A is the correct Answer?",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d"
    },
    correctAnswer: "a" }, 
    
    {
    question: "Question 2: = b?",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d"
    },
    correctAnswer: "b" },
  {

    question: "Question 3: d?",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d" },
    correctAnswer: "d" }
];















    // show the questions
    showQuestions(questions, triviaContainer);
  
    
    // when user clicks submit, show results
    submitButton.onclick = function(){
      showResults(questions, triviaContainer, resultsContainer);
    }
  }









    function showQuestions(questions, triviaContainer){
      // code will go here

    }
  

    function showResults(questions, triviaContainer, resultsContainer){
      // code will go here
    }
  

    loadQuestion: function() {

      timer = setInterval(game.countdown, 1000);
  
      panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
  
      for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
        panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
        + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
      }
    },









// CLICK EVENTS
$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  game.showQuestions();
});




// set the document to ready
// $(document).ready(function () {
  // reset();

 // end document ready function
// });

