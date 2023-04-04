//Declared variables and assigned each to an element within the html document
var startButton = document.getElementById("start-quiz");
var timerDisplay = document.getElementById("time-left");
var scoresDisplay = document.getElementById("high-scores");
var questionDisplay = document.getElementById("question");
var questionResponse1 = document.getElementById("answer-1")
var questionResponse2 = document.getElementById("answer-2")
var questionResponse3 = document.getElementById("answer-3")
var questionResponse4 = document.getElementById("answer-4")
var submission = document.getElementById("submit")
var resultDisplay = document.getElementById("result");

//Declared variables to be used for functions
var result;
var score = localStorage.getItem("score") || 0;

function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerDisplay.textContent = timeLeft;
            timeLeft--;
        }
        else{
            timerDisplay.textContent = '0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

function displayQuestion(){

}

function displayResponses(){
    
}

function startQuiz(){
    countdown();
}

// Added function to update to storage
function highScores() {
    localStorage.setItem("score", score);
}

// Added an event listener to start quiz
startButton.addEventListener("click", startQuiz);

// Update the localStorage when the user refreshes or returns to page
window.addEventListener("beforeunload", highScores);