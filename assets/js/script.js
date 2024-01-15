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

/**
 * Enables the "Let's Go" button only when the form validation is successful.
 * Ensures that the button becomes clickable upon successful form validation.
 */
function setupLetsGoButton() {
    let letsGoButton = document.getElementById("lets-go-btn");

    letsGoButton.addEventListener("click", function (e) {
        if (validateSignUpForm()) {
            displayQuizRules();
        }
    });
}

/**
 * Validates the sign-up form by checking if both email and team name inputs are filled out correctly.
 * Displays custom error messages if validation fails, providing user-friendly feedback.
 *
 * returns boolean - true if the form is valid, false otherwise.
 */
function validateSignUpForm() {
    let emailInput = document.getElementById('email');
    let teamNameInput = document.getElementById('teamName');

    // Check if both email and team name are filled out correctly
    if (emailInput.checkValidity() && teamNameInput.checkValidity()) {
        return true;
    } else {
        // Display custom error messages
        if (!emailInput.checkValidity()) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        } else {
            document.getElementById('emailError').innerText = '';
        }

        if (!teamNameInput.checkValidity()) {
            document.getElementById('teamNameError').innerText = 'Please enter a team name.';
        } else {
            document.getElementById('teamNameError').innerText = '';
        }

        return false;
    }
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

const startButton = document.getElementById("start-quiz-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener('click', startGame);

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

/**
 * Starts the quiz game by initializing necessary variables and displaying the first question.
 * Resets the game state, sets the current question index to 0, resets the score, and calls
 * the function to set up and display the first question.
 */
function startGame() {
    console.log("Game Started");
    nextButton.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

/**
 * Sets up and displays the next question in the quiz.
 * Resets the previous question state, retrieves the current question from the array,
 * updates the question element with the current question's text, creates buttons for each
 * answer option, and attaches click event listeners to handle user input.
 */
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Resets the state of the quiz after each question.
 * Hides the next button, removes all answer buttons, and prepares for the next question.
 */
function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

/**
 * Handles the user's selection of an answer.
 * Checks if the selected answer is correct, updates styles accordingly, and adjusts the score.
 * Disables all answer buttons and displays the next button to proceed to the next question.
 *
 * e - The click event object containing information about the selected answer button.
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    // Update styles based on correctness and adjust the score
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    // Disable all answer buttons and display the next button
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

// Event listener for the next button click
nextBtn.addEventListener("click", () => {
    // Check if there are more questions or restart the game
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startGame();
    }
});

var teamName; // Declare teamName globally

function storeTeamName() {
    teamName = document.getElementById('teamName').value;
}
/**
 * Displays the final score after completing all quiz questions.
 * Resets the state, updates the question element with the user's score,
 * and concludes the quiz by presenting the overall performance.
 */
function showScore() {
    storeTeamName();
    resetState();
    questionElement.classList.add("hide");
    scoreElement.classList.remove("hide");
    scoreElement.innerHTML = `Congratulations ${teamName}! You scored ${score} out of ${questions.length}!`;
    restartButton.classList.remove('hide');
    restartButton.addEventListener('click', function () {
        window.location.href = window.location.href; // Reload the page by setting the URL to itself
    });
    
}

/**
 * Handles the click event for the next button.
 * Increments the current question index and either sets up the next question
 * or concludes the quiz by displaying the final score if all questions have been answered.
 */
function handleNextButton() {
    currentQuestionIndex++;
    // Check if there are more questions or show the final score
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showScore();
    }
}

// Question and answers for the Quiz
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