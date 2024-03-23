var startButton = document.getElementById("start-quiz")
var quizcontainer = document.getElementById("quiz-container")
var question = document.getElementById("question")
var options = document.querySelectorAll(".options")
var timer = document.getElementById("timer")
var score = document.getElementById("score")
var correctorincorrect = document.getElementById("correct-incorrect")
var userdetail = document.getElementById("user-detail")
var usermame = document.getElementById("username")
var saveuser = document.getElementById("saveuser")
var highscore = document.getElementById("highscore")
options[0].addEventListener("click", displaycheckanswer)
options[1].addEventListener("click", displaycheckanswer)
options[2].addEventListener("click", displaycheckanswer)
options[3].addEventListener("click", displaycheckanswer)
userdetail.style.display = "none"
quizcontainer.style.display = "none"
highscore.style.display = "none"
var scoreCount = 0;
var timerObject;
var timerCount = 60;
var currentQ = 0
var questionDB = [
    {
        question: "What is HTML?",
        choiceA: "Hyper text markup language",
        choiceB: "Hyper texting markup literals",
        choiceC: "Hyper texting picture",
        choiceD: "Hyper texting styling tool",
        answer: "Hyper text markup language"
    },
    {
        question: "What is CSS?",
        choiceA: "Cascading style sheet",
        choiceB: "Studying tool",
        choiceC: "Cascading tool",
        choiceD: "Website development sheet",
        answer: "Cascading style sheet"
    },
    {
        question: "What is JavaScript?",
        choiceA: "Programming tool",
        choiceB: "Computer design",
        choiceC: "Computer programming language",
        choiceD: "Design options",
        answer: "Computer programming language"

    },
    {
        question: "What are APIs?",
        choiceA: "Application Programming Interface",
        choiceB: "computer design",
        choiceC: "Computer programming language",
        choiceD: "Design options",
        answer: "Application Programming Interfac"
    }

]
startButton.addEventListener("click", function () {
    quizcontainer.style.display = "block"
    startButton.style.display = "none"
    timerObject = setInterval(function () {
        timer.innerText = timerCount
        timerCount--;
        if (timerCount <= 0) {
            console.log("End")
            endQuiz()
        }
    }, 1000)
    displayQuestion()
})

function displayQuestion() {
    question.innerText = questionDB[currentQ].question
    options[0].innerText = questionDB[currentQ].choiceA
    options[1].innerText = questionDB[currentQ].choiceB
    options[2].innerText = questionDB[currentQ].choiceC
    options[3].innerText = questionDB[currentQ].choiceD
}


function displaycheckanswer(e) {
    var useranswer = e.target.textContent
    if (useranswer == questionDB[currentQ].answer) {
        correctorincorrect.innerText = "Correct!"
        scoreCount += 10
        score.innerText = scoreCount
    } else {
        correctorincorrect.innerText = "Incorrect"
        timerCount -= 5
        score.innerText = scoreCount
    }
    if (currentQ < questionDB.length - 1) {
        currentQ++
        displayQuestion()
    } else {
        endQuiz()
    }

}



function endQuiz() {
    clearInterval(timerObject)
    quizcontainer.style.display = "none"
    userdetail.style.display = "block"
}



saveuser.addEventListener("click", function (e) {
    e.preventDefault()
    var userscore = {
        user: usermame.value,
        score: (scoreCount + timerCount)
    }
    var previousCodeQuiz = JSON.parse(localStorage.getItem("codeQuiz")) || []
    previousCodeQuiz.push(userscore)
    localStorage.setItem("codeQuiz", JSON.stringify(previousCodeQuiz))
    userdetail.style.display = "none"
    highscore.style.display = "block"

})