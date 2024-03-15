var startButton = document.getElementById("start-quiz")
var quizcontainer = document.getElementById("quiz-container")
var question = document.getElementById("question")
var options = document.querySelectorAll(".options")
var timer = document.getElementById("timer")
var score = document.getElementById("timer")
var correctorincorrect = document.getElementById("correct or incorrecr")

quizcontainer.style.display="none"

startButton.addEventListener("click",function(){
    quizcontainer.style.display="block"
})