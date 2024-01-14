function setupSignUpButton() {
    /** Connect js to the sign-up-btn in html */
    let signUpBtn = document.getElementById("sign-up-btn");

    /** When button is clicked - function */
    signUpBtn.addEventListener("click", function (e) {
        displaySignUpPage();
    });
}

/**
 * This function will:
 * 1. Start when clicking the 'sign-up-btn'
 * 2. Hide the 'Welcome-everyone' - message
 * 3. Display the 'Sign-up' - form
 */
function displaySignUpPage() {
    // Remove the existing elements with class 'hello-page' by adding class 'hide'
    let helloPage = document.getElementById("hello-page");
    helloPage.classList.add('hide');
    let signUpBtn = document.getElementById("sign-up-btn");
    signUpBtn.classList.add('hide');
    // Show Sign Up Page by removing class 'hide'
    let signUpPage = document.getElementById("sign-up-page");
    signUpPage.classList.remove('hide');

    setupLetsGoButton();
}

setupSignUpButton();

function setupLetsGoButton() {
    /** Connect js to the slets-go-btn in html */
    let letsGoButton = document.getElementById("lets-go-btn");

    /** When button is clicked - function */
    letsGoButton.addEventListener("click", function (e) {
        displayQuizRules();
    });
}

/**
* This function will:
* 1. Start when clicking the 'lets-go-btn'
* 2. Hide the 'Sign-up' - page
* 3. Display the 'Quiz-Rules' - page
*/
function displayQuizRules() {
    // Remove the existing elements with class 'sign-up-page' by adding class 'hide'
    let signUpPage = document.getElementById("sign-up-page");
    signUpPage.classList.add('hide');
    let letsGoBtn = document.getElementById("lets-go-btn");
    letsGoBtn.classList.add('hide');
    // Show Quiz Rules by removing class 'hide'
    let rulesPage = document.getElementById("rules-page");
    let startQuizBtn = document.getElementById("start-quiz-btn");
    rulesPage.classList.remove('hide');
    startQuizBtn.classList.remove('hide');

    setupStartQuizButton();
}

function setupStartQuizButton() {
    /** Connect js to the slets-go-btn in html */
    let startQuizBtn = document.getElementById("start-quiz-btn");

    /** When button is clicked - function */
    startQuizBtn.addEventListener("click", function (e) {
        displayQuizPage();
    });
}

function displayQuizPage() {
    // Remove the existing elements with class 'rules-page' by adding class 'hide'
    let rulesPage = document.getElementById("rules-page");
    let startQuizBtn = document.getElementById("start-quiz-btn");
    rulesPage.classList.add('hide');
    startQuizBtn.classList.add('hide');
    // Show elements with class "quiz-page" by removing class 'hide'
    let quizPage = document.getElementById("quiz-page");
    let nextBtn = document.getElementById("next-btn");
    quizPage.classList.remove('hide');
    nextBtn.classList.remove('hide');
}

/**
 * The functions for the birthday quiz game start here.
 * This quiz game was inspired by 'Web Dev Simplified' 
 * and 'GreatStack' on YouTube.
 * Original Tutorial Links: 
 * 'https://www.youtube.com/watch?v=riDzcEQbX6k'
 * 'https://www.youtube.com/watch?v=PBcqGxrr9g8'
 * You can also find the links in the README file.
 * The game has been modified to suit the context of this Birthday Quiz.
 */

const startButton = document.getElementById("start-quiz-btn")
const nextButton = document.getElementById("next-btn")

startButton.addEventListener('click', startGame)

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    console.log("Game Started");
    nextButton.classList.add('hide')
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startGame();
    }
})

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        setNextQuestion();
    } else {
        showScore();
    }
}

const questions = [
    {
        question: "What is Amanda's favorite color?",
        answers: [
            { text: "Blue", correct: false },
            { text: "Green", correct: true },
            { text: "Pink", correct: false },
            { text: "Orange", correct: false },
        ]
    },
    {
        question: "Amanda's top childhood game?",
        answers: [
            { text: "Hide and seek", correct: false },
            { text: "Tag", correct: false },
            { text: "Candy Land", correct: true },
            { text: "Simon says", correct: false },
        ]
    },
    {
        question: "Dream pet for Amanda?",
        answers: [
            { text: "Dog", correct: true },
            { text: "Cat", correct: false },
            { text: "Rabbit", correct: false },
            { text: "Turtle", correct: false },
        ]
    },
    {
        question: "Amanda's preferred ice cream?",
        answers: [
            { text: "Chocolate", correct: false },
            { text: "Vanilla", correct: false },
            { text: "Strawberry", correct: false },
            { text: "Mint chip", correct: true },
        ]
    },
    {
        question: "Amanda's hidden talent?",
        answers: [
            { text: "Singing", correct: false },
            { text: "Dancing", correct: false },
            { text: "Painting", correct: true },
            { text: "Juggling", correct: false },
        ]
    },
    {
        question: "Ideal vacation spot for Amanda?",
        answers: [
            { text: "Beach", correct: true },
            { text: "Mountains", correct: false },
            { text: "City", correct: false },
            { text: "Forest", correct: false },
        ]
    },
    {
        question: "Amanda's favorite school subject?",
        answers: [
            { text: "Math", correct: false },
            { text: "Science", correct: false },
            { text: "Art", correct: false },
            { text: "History", correct: true },
        ]
    },
    {
        question: "Amanda's go-to snack?",
        answers: [
            { text: "Popcorn", correct: true },
            { text: "Chips", correct: false },
            { text: "Fruit", correct: false },
            { text: "Cookies", correct: false },
        ]
    },
    {
        question: "Amanda's music preference?",
        answers: [
            { text: "Pop", correct: false },
            { text: "Rock", correct: true },
            { text: "Hip-hop", correct: false },
            { text: "Classical", correct: false },
        ]
    },
    {
        question: "Amanda's dream superpower?",
        answers: [
            { text: "Invisibility", correct: false },
            { text: "Teleportation", correct: true },
            { text: "Flying", correct: false },
            { text: "Time travel", correct: false },
        ]
    }
];