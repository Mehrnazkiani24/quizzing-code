var previousCodeQuiz = JSON.parse(localStorage.getItem("codeQuiz")) || []
var html =""
for (i=0; i<previousCodeQuiz.length;i++){
    html += `<section class='d-flex'><p>User: ${previousCodeQuiz[i].user}</p><p>Score: ${previousCodeQuiz[i].score}</section>`
}
var score = document.getElementById ("score")
score.innerHTML=html