var myQuestions = [

    // First question. 
    {
        question: "Commonly used data types DO Not include:",
        choices: [
            "1. string",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ],

        correctAnswer: 2
    },

    // Second question 
    {
        question: "The condition in an if/else statement is enclosed with ____________.",
        choices: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets",],

        correctAnswer: 3
    },
    // Third question 
    {
        question: "Arrays in JavaScript can be used to store _____________.",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        correctAnswer: 4
    },




    // Fourth question 
    {
        question: "String values must be enclosed within ______________ when being assigned to variable.",
        choices: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis",
        ],

        correctAnswer: 3

    },

    // Fifth question
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],

        correctAnswer: "4"
    },

    
];

var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start");
var resultsContainer = document.getElementById("results");
var timerEl = document.querySelector(".Timer-Clock");
var seconds = 75
var headDiv = document.getElementById("head");
var pDiv = document.getElementById("para");
var currentQuestion = 0;
var wrapper = document.querySelector(".wrapper");
var score = 0

// Function for start time. Within this a setInterval () that will repeatly call a function at 1000 milliseconds.  The clearInterval () is called to stop the timer when seconds equal zero.

function startTime() {
    var timer = setInterval(function () {
        timerEl.textContent = seconds;
        seconds--
        if (seconds === 0) {
            clearInterval(timer);
        }

    }, 1000
    )
}

// Event listener called the startTime () to begin the timer.  Next the hideStartArea () is called to hide the <h1>, <p>, and <button> elements. Then the displayQuestion () is called to display the first question.

startButton.addEventListener("click", function () {
    console.log("anything")
    startTime();
    hideStartArea();
    displayQuestion();
})

// Display set to "none" to hide the elements

function hideStartArea() {

    headDiv.style.display = "none"
    pDiv.style.display = "none"
    startButton.style.display = "none"
}

// When the user clicks on one of the choices, a series of actions happens. The srcElement event references which choice was clicked on, and given the variable clickID. An answer variable was created so I can see in the console log which choice was selected.  correctID variable was created to compare to the correctAnswer. If they match, then the score increments.

function clickedButton(clickevent) {

    if (currentQuestion < myQuestions.length) {
        var clickId = clickevent.srcElement.getAttribute('which');
        var answered = myQuestions[currentQuestion].choices[clickId];
        console.log("User clicked " + clickId + " which is " + answered);
        var correctId = myQuestions[currentQuestion].correctAnswer;
        var correctAnswer = myQuestions[currentQuestion].choices[correctId];
        console.log("Correct answer is: " + correctId + " which is " + correctAnswer);

        if (clickId == correctId) {
            alert("Correct!");
            score++
        } else {
            alert("Wrong")
        }

        currentQuestion++
    }


    if (currentQuestion < myQuestions.length) {
        displayQuestion();
    } else {
        alert("The quiz is complete. Your score is " + score + " out of 10");
    }
}

// In the dislayQuestion () I made the h1 the question.  So that the questions wouldn't show up on the page over and over, I cleared the wrapper's contents using the innerHTML property with empty quotes.  The question element was appended to the parent wrapper element. I made a div for the choices element, so that I could append the buttonEl div to it. I made a for loop to loop through the questions and choices.

function displayQuestion() {


    var question = document.createElement("h1");
    question.textContent = myQuestions[currentQuestion].question;
    wrapper.innerHTML = ""; // clear everything in wrapper
    wrapper.appendChild(question);

    var choicesEl = document.createElement("div");
    choicesEl.setAttribute('class', 'choices');


    for (var i = 0; i < myQuestions[currentQuestion].choices.length; i++) {
        console.log(myQuestions[currentQuestion].choices[i])
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class', 'choice');
        buttonEl.setAttribute('which', i);
        buttonEl.onclick = clickedButton;
        buttonEl.textContent = myQuestions[currentQuestion].choices[i];
        choicesEl.appendChild(buttonEl);
    }

    wrapper.appendChild(choicesEl);
}

wrapper.addEventListener('click', function (event) {
    var target = event.currentTarget;
    if (target.classList.contains('choice')) {

    }
})