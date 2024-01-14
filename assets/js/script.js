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