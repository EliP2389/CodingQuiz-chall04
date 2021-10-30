var timerEl = document.getElementById('countdown');


 var quizQuestions = [
      {
          question: "1. Inside the HTML document, where do you place your JavaScript code?",
          answers: {
         a: 'Inside the <head> element', 
         b: 'In the <footer> element', 
         c: 'Inside the <link> element', 
         d: 'Inside the <script> element' 
        },
        correctAnswer: 'd'
      }, 
      {
          question: "2. How do we declare a conditional statment in JavaScript?",
          answers: {
          a: 'for loop',
          b: 'if...else', 
          c: 'difference...between', 
          d: 'while loop' 
          },
          correctAnswer: 'b'
      }, 
      {
        question: "3. When using flexbox, which property needs to be adjusted in order to add space between items?",         
       answers: {
        a: 'justify-content', 
        b: 'flex-flow', 
        c: 'align-content', 
        d: 'space-between'
        },
        correctAnswer: 'a'
    },
    {
         question: "4. What are the two types of scope JavaScript uses?",
         answers: {
        a:  'Global and Local', 
        b: 'Surrounding and Inner',
        c:  'Abroad and Local', 
        d: 'Outside and Inside'
            },
         correctAnswer: 'a'
      }, 
      {
          question: "5. How would you create a box with rounded corners using CSS?",
          answers: {
        a: 'border-radius: 50px;', 
        b: 'transform: round(corner)', 
        c: 'corner-style: round;', 
        d: 'box-corner: round;'
            },
          correctAnswer : 'a'
      }
 ];

    function generateQuiz(questions, quizContainer, reultsContainer, submitButton)[

        function showQuestions(questions, quizContainer){

        },

        function showResults(questions, quizContainer){

        },

        showQuestions(questions, quizContainer),

        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }
    ]

        var timeLeft = 60;

        var timeInterval = setInterval(function (){
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

        }, 1000);5
        

    }


    document.getElementById("submit").addEventListener("click", startQuiz);