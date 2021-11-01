const timerEl = document.getElementById('countdown');
const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".choices");
const quizContainerEl = document.querySelector(".quiz-container");
const startQuizBtnEl = document.querySelector(".start");
const yourScoreIsEl = document.querySelector(".your-score");
const initialsSaveEl = document.querySelector(".initials");
const submitInitialbtnEl = document.querySelector(".submit-initial-btn");
const highScoresEl = document.querySelector(".highscores");

let currentQuestionIndex = 0
var timeLeft = 60;
let timeInterval;
var highScores = [];
var score = 0;

const quizQuestions = [
    {
        text: "Inside the HTML document, where do you place your JavaScript code?",
        choices: [
            { answer: 'Inside the <head> element', correct: false },
            { answer: 'In the <footer> element', correct: false },
            { answer: 'Inside the <link> element', correct: false },
            { answer: 'Inside the <script> element', correct: true }
        ],
    },
    {
        text: "How do we declare a conditional statment in JavaScript?",
        choices: [
            { answer: 'for loop', correct: false },
            { answer: 'if...else', correct: true },
            { answer: 'difference...between', correct: false },
            { answer: 'while loop', correct: false },
        ],

    },
    {
        text: "When using flexbox, which property needs to be adjusted in order to add space between items?",
        choices: [
            { answer: 'justify-content', correct: true },
            { answer: 'flex-flow', correct: false },
            { answer: 'align-content', correct: false },
            { answer: 'space-between', correct: false },
        ],

    },
    {
        text: "What are the two types of scope JavaScript uses?",
        choices: [
            { answer: 'Global and Local', correct: true },
            { answer: 'Surrounding and Inner', correct: false },
            { answer: 'Abroad and Local', correct: false },
            { answer: 'Outside and Inside', correct: false },
        ],

    },
    {
        text: "How would you create a box with rounded corners using CSS?",
        choices: [
            { answer: 'border-radius: 50px;', correct: true },
            { answer: 'transform: round(corner)', correct: false },
            { answer: 'corner-style: round;', correct: false },
            { answer: 'box-corner: round;', correct: false },
        ],

    }
];

function generateQuiz() {
    const question = quizQuestions[currentQuestionIndex].text
    questionEl.textContent = question

    answersEl.innerHTML = "";
    //displays questions and answers
    for (let i = 0; i < quizQuestions[currentQuestionIndex].choices.length; i++) {
        const choiceEl = document.createElement("li")
        const isCorrect = quizQuestions[currentQuestionIndex].choices[i].correct
        //choiceEl.setAttribute("data-set-correct", isCorrect)
        choiceEl.textContent = quizQuestions[currentQuestionIndex].choices[i].answer

        if (isCorrect) {
            choiceEl.addEventListener("click", displayCorrectAnswer)
        }
        else {
            choiceEl.addEventListener("click", displayWrongAnswer)
        }

        answersEl.appendChild(choiceEl)

    }


    function displayCorrectAnswer() {
        //display correct answer
        alert("correct answer")
        score += 2;
        if (currentQuestionIndex >= quizQuestions.length) {
            endQuiz()
        }
        else {

            generateQuiz()
        }

        //add one to currentQuestionIndex
        //call generateQuiz again
    }

    function displayWrongAnswer() {
        //display wrong answer
        alert("wrong answer")
        timeLeft -= 5
        if (currentQuestionIndex >= quizQuestions.length) {
            endQuiz()
        }
        else {
            generateQuiz()
        }


        // add one to currentQuestionIndex
        //call generateQuiz again
        //remove time when answered wrong
    }

    function endQuiz() {
        alert("finished quiz")
        clearInterval(timeInterval);
        saveScore()
        displayScore()
        initialsSection()
    }



    if (currentQuestionIndex == 0) {
        timeInterval = setInterval(function () {
            if (timeLeft > 1) {
                timerEl.textContent = timeLeft + ' seconds remaining ';
                timeLeft--;
            }
            else if (timeLeft === 1) {
                timerEl.textContent = timeLeft + ' second remaining ';
                timeLeft--;
            }
            else {
                timerEl.textContent = ''

                clearInterval(timeInterval);
            }

        }, 1000);
    }
    currentQuestionIndex++

}

    function saveScore() {
        localStorage.setItem("score", JSON.stringify(score));

    }

    function displayScore() {
        var savedScores = localStorage.getItem("score");
        if (!savedScores) {
            return false;
        }
        else {
            yourScoreIsEl.textContent = ' your score = ' + score;
        }

        savedScores = JSON.parse(savedScores);

        for (let i = 0; i < savedScores.length; i++) {
            endQuiz(savedScores[i]);
        }

    }

   


function initialsSection() {

    var initialsText = document.createElement("input");
    initialsText.setAttribute("placeholder", "Your Initials");
    initialsText.className = "init"
    initialsSaveEl.appendChild(initialsText);

    var initialsBtn = document.createElement("button");
    initialsBtn.textContent = "Submit";
    initialsBtn.className = "submit-initial-btn"
    initialsSaveEl.appendChild(initialsBtn);

}




startQuizBtnEl.addEventListener("click", function () {
    generateQuiz();

})


//initialsBtn.addEventListener("click", initialsSection);
