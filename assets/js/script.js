/** Connect js to the sign-up-btn in html */
let signUpBtn = document.getElementById("sign-up-btn");

/** When button is clicked - function */
signUpBtn.addEventListener("click", function (e) {
    displaySignUpPage();
});

/**
 * This function will:
 * 1. Start when clicking the 'sign-up-btn'
 * 2. Hide the 'Welcome-everyone' - message
 * 3. Display the 'Sign-up' - form
 */
function displaySignUpPage () {
    // Get the parent element
    let messageType = document.getElementById("message-type");

    // Remove the existing elements with class 'hello-page'
    let helloPages = document.querySelectorAll(".hello-page");
    helloPages.forEach(function (element) {
        element.remove();
    });

    // Create the new elements
    let signUpTitle = document.createElement("h4");
    signUpTitle.className = "sign-up-page";
    signUpTitle.id = "sign-up";
    signUpTitle.textContent = "Sign Up!";
    
    let signUpForm = document.createElement("form");
    signUpForm.id = "myForm";
    signUpForm.className = "sign-up-page";

    let emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email:";

    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.formMethod = "post";

    let teamNameLabel = document.createElement("label");
    teamNameLabel.htmlFor = "teamName";
    teamNameLabel.textContent = "Team Name:";

    let teamNameInput = document.createElement("input");
    teamNameInput.type = "text";
    teamNameInput.id = "teamName";
    teamNameInput.name = "teamName";
    teamNameInput.required = true;

    let letsGoButton = document.createElement("button");
    letsGoButton.className = "sign-up-page action-btn";
    letsGoButton.type = "button";
    letsGoButton.id = "lets-go-btn";
    letsGoButton.textContent = "let's go";

    // Append the new elements to the parent
    signUpForm.appendChild(emailLabel);
    signUpForm.appendChild(emailInput);
    signUpForm.appendChild(teamNameLabel);
    signUpForm.appendChild(teamNameInput);
    signUpForm.appendChild(letsGoButton);

    messageType.appendChild(signUpTitle);
    messageType.appendChild(signUpForm);
}
