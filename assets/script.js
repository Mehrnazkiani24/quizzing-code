var startButton = document.getElementById("start-quiz")
var quizcontainer = document.getElementById("quiz-container")
var question = document.getElementById("question")
var options = document.querySelectorAll(".options")
var timer = document.getElementById("timer")
var score = document.getElementById("score")
var correctorincorrect = document.getElementById("correct-incorrect")

quizcontainer.style.display = "none"

var timerObject;
var timerCount = 60;
var currentQ =0
var questionDB = [
    {
        question: "What is HTML",
        choiceA: "Hyper text markup language",
        choiceB: "Hyper texting markup literals",
        choiceC: "Hyper texting picture",
        choiceD: "Hyper texting styling tool",
        answer: "Hyper text markup language"
    },
    {
        question: "what is CSS",
        choiceA: "Cascading style sheet",
        choiceB: "studying tool",
        choiceC: "Cascading tool",
        choiceD: "website development sheet",
        answer: "HCascading style sheet"
    },
    {
        question: "what is JavaScript",
        choiceA: "Programming tool",
        choiceB: "computer design",
        choiceC: "Computer programming language",
        choiceD: "Design options",
        answer: "Computer programming language"

    }

]
startButton.addEventListener("click", function () {
    quizcontainer.style.display = "block"
    startButton.style.display = "none"
    setInterval(function(){
        timer.innerText = timerCount
        timerCount--;
        if(timerCount <=0){
            console.log("End")
        }
    },1000)
    displayQuestion()
})

function displayQuestion(){
    question.innerText = questionDB[currentQ].question
    options[0].innerText = questionDB[currentQ].choiceA
    options[1].innerText = questionDB[currentQ].choiceB
    options[2].innerText = questionDB[currentQ].choiceC
    options[3].innerText = questionDB[currentQ].choiceD

}