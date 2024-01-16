# Amanda's Birthday Quiz

Welcome to Amanda's Birthday Quiz website! This project is a personalized and interactive quiz designed to celebrate Amanda's special day. The quiz focuses on testing the knowledge of participants about Amanda's life, preferences, and memorable moments. The website provides a fun and engaging way for friends to come together and celebrate Amanda's birthday.

Feel free to customize this quiz to suit the unique personalities of your friends, family, or even coworkers. Quizzes are a delightful way to express appreciation and celebrate someone special. It's a fun and interactive way to connect with the birthday person, especially if you can't be there in person. Studies on interactive engagement and group activities suggest that people generally enjoy participating in activities that involve them actively. Quizzes, especially those tailored to the interests of the group, can promote engagement and participation. Whether it's tailored to their interests, inside jokes, or shared memories, this personalized quiz is sure to bring joy and laughter to the celebration.

Visit the deployed site: [Amanda's Birthday Quiz](https://elindalenback.github.io/birthday-quiz-project2/)

![Amanda's Birhday Quiz](docs/readme_images/responsive-welcome.png)

## Site Owner Goals

- Provide users with an enjoyable and engaging birthday quiz experience.
- Create a visually appealing and responsive website for users to celebrate Amanda's birthday.
- Allow users to easily navigate through the quiz, sign up or form teams, answer questions, and view their scores.
- Invoke a sense of celebration and fun, encouraging users to actively participate in the quiz.

## User Stories

- ### First Time User

  - As a first time user, I want to understand the purpose of Amanda's Birthday Quiz and how to participate.
  - As a first time user, I want to easily navigate the quiz, sign up or form a team, answer questions, and see my final score.
  - As a first time user, I want to have an enjoyable experience learning about Amanda through the quiz questions.

- ### Returning user
  
  - As a returning user, I want to reminisce and enjoy the quiz experience again.
  - As a returning user, I want to reminisce about Amanda's life and learn more about my friend.

- ### Frequent user

  - As a frequent user, I want to play the birthday quiz periodically to celebrate Amanda's birthday and have a good time.
  - As a frequent user, I want to share the quiz with friends and family to celebrate together.

## Design

Colour palette from Coolors

![Colour Palette](docs/readme_images/palette.png)

### Color Palette Description

**#4E6A5E (Dark Green):**

- **Usage:** Header Background, Footer Background
- **Description:** Creates a sense of calm and elegance, framing the quiz with a visually appealing structure.

**#A4C3B2 (Light Green):**

- **Usage:** Main Background of the Quiz Area
- **Description:** Serves as the main background for the quiz area, creating a pleasant and inviting environment for the quiz questions.

**#CCE3DE (Light Blue-Green):**

- **Usage:** Overall Background of the Main Content
- **Description:** Applied to the main content background, providing a harmonious and soothing backdrop for the entire webpage.

**#F6FFF8 (Light Mint):**

- **Usage:** Button Backgrounds, Text Color, Quiz Page Background
- **Description:** Used for button backgrounds, ensuring they stand out while maintaining a soft and inviting appearance. Also applied to text color and quiz page background for a refreshing touch.

**#D99898 (Light Salmon):**

- **Usage:** Incorrect Answer Indication in the Quiz
- **Description:** Highlights incorrect answers during the quiz, providing a noticeable visual cue.

These color choices collectively create a cohesive and visually pleasing experience for users interacting with Amanda's Birthday Quiz. The combination of greens and blues conveys a celebratory and lively atmosphere, while the mint and salmon accents add a touch of vibrancy and engagement.

### Fonts

The website employs the 'Poppins' font as the main typeface, providing a clean and modern appearance. Additionally, 'Caveat' in a cursive style is utilized for specific elements such as headers, adding an elegant and personal touch. These fonts where imported via [Google Fonts](https://fonts.google.com/).

In case there are any difficulties loading the primary fonts, the fallback 'sans-serif' is in place to ensure a legible and consistent text experience throughout the site. For the 'Caveat' font the style cursive is set to maintain the personal touch even if the font for some reason is not loading correctly.

### Layout

The site is a single page with 5 sections:

- Welcome message
- Sign up for Team
- Quiz Rules
- Quiz Game
- Score

### Wireframes

Wireframes were produced using Balsamiq.

 <details>

<summary>Wireframe</summary>

![Desktop Wireframe](docs/wireframes/wireframe-birthday-quiz.png)
 </details>

## Features

All aspects of the website are responsive, and the features that are consistently available include:

A favicon and a titel in the browser tab.

![Favicon Cake](docs/readme_images/tab.png)

The header.
![Header](docs/readme_images/header.png)

And also the footer.
![Footer](docs/readme_images/footer.png)

All Action Buttons on pages all have hover effect to improve the userexperience.
![Start Quiz Button](docs/readme_images/btn.png)
Hovered:

![Start Quiz Button Hovered](docs/readme_images/btn-hover.png)

### Welcome Page

The Welcome Page warmly greets users, introducing them to the birthday quiz experience. Here's what you'll find:

- Greeting: A friendly welcome message creates a positive atmosphere.

- Introduction: Briefly explains the purpose of the website and the birthday quiz.

- "Sign Up" Button: Encourages users to start the quiz journey.

![Welcome Page](docs/readme_images/welcome.png)

### Sign-Up Page

The Sign-Up page allows users to enter their email and team name to participate in the birthday quiz. Key features include:

- Simple form validation for email and team name.
- User-friendly error messages for invalid inputs.
- Transition to the Quiz Rules page upon successful validation.

![Sign Up Page](docs/readme_images/sign-up.png)

Validation feedback:

![Input Validation](docs/readme_images/invalid-input.png)

### Quiz Rules

The Quiz Rules page provides users with information about the rules before starting the quiz. Features include:

- Clear presentation of rules and guidelines for the quiz.
- Transition to the Quiz Page after reviewing the rules.

![Quiz Rules](docs/readme_images/rules.png)

### Quiz Page

The Quiz Page engages users with a series of questions about Amanda. Notable features include:

- A set of questions with multiple-choice answers.
- Real-time feedback on selected answers.
- Transition to the final score page upon completing all questions.

Quiz Page on all devices:
![Quiz Page](docs/readme_images/responsive-quiz.png)

Before the user has answerd a question the next button is hidden.
Before answer:
![Before Answer](docs/readme_images/before-answer.png)

When an answer is selected the button apper and if the choosen answer button was correct the button will turn green.
Correct answer:
![Correct Answer](docs/readme_images/correct-answer.png)

If the answer is wrong the button will turn red and the correct answer will be highlighted in green.
Wrong answer:
![Wrong Answer](docs/readme_images/wrong-answer.png)

### Final Score

The Final Score page displays the user's score, including the number of correct answers. Features include:

- Storage of the team name for a personalized experience.
- User-friendly interface with a congratulatory message.
- Option to go back to start page / welcome page.

![Score](docs/readme_images/score.png)

### Quiz Navigation

Throughout the quiz, users can navigate seamlessly through various stages. Key navigation features include:

- Smooth transitions between quiz sections (Welcome, Sign-Up, Quiz Rules, Quiz Page, Final Score).
- Responsive design for a consistent experience on different devices.

### Future Enhancements

- Store the team names in an array to check for duplicate entries and ensure uniqueness.
- Implement functionality to automatically send an email containing the final scores from each team, either to the quiz leader or directly to the participants.

## Testing

- ### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Felindalenback.github.io%2Fbirthday-quiz-project2%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Felindalenback.github.io%2Fbirthday-quiz-project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

-  Javascript
   - No errors or warnings were returned when passing through the the JSHint Validator

- #### Accessibility
  
  - The site achieved a Lighthouse accessibility score of 100% which confirms that the colours and fonts chosen are easy to read and accessible
  
![Lighthouse testing](docs/readme_images/lighthouse-quiz.png)

### Form Testing

- The form has been tested to ensure it would not submit without the required input fields being filled in (team name and email address).

### Links Testing

- All navigation links were tested manually to ensure the user is directed to the correct section of the website.

### Device Testing

- The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes. The website performed as intended.
  
- I also used the following website to test responsiveness:
  - [Am I Responsive](https://ui.dev/amiresponsive?url=https://elindalenback.github.io/birthday-quiz-project2/)

### Friends and Family User Testing

Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Fixed Bugs

#### Issue: HTML Validation not functioning

**Solution:** Introduced a new `checkValidation` function to resolve conflicts and successfully enforce form input validation.

#### Issue: CSS Validator Error in Letter Spacing

**Solution:** Corrected a CSS validator error by adjusting the `letter-spacing` syntax from "letter-spacing: 1" to the accurate and functional "letter-spacing: 1px."

#### Issue: Incorrect Favicon Filepath

**Solution:** Rectified a wrong filepath to the favicon by updating it to the correct location "assets/favicon/...," ensuring the proper display of the favicon on the website.

### Frameworks - Libraries - Programs Used

- [Am I Responsive](http://ami.responsivedesign.is/) - Used to verify responsiveness of website on different devices.
- [Responsinator](http://www.responsinator.com/) - Used to verify responsiveness of website on different devices.
- [Balsamiq](https://balsamiq.com/) - Used to generate Wireframe images.
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - Used for overall development and tweaking, including testing responsiveness and performance.
- [GitHub](https://github.com/) - Used for version control and hosting.
- [Google Fonts](https://fonts.google.com/) - Used to import and alter fonts on the page.
- [W3C](https://www.w3.org/) - Used for HTML & CSS Validation.
- [JSHint](https://jshint.com/) - Used for javascript valifation.
- [Coolors](https://coolors.co/) - Used to create colour palette.
- [Favicon](https://favicon.io/) - Used to create the favicon.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - Under 'Code and automation' choose down to 'Pages'
  - Under 'Source' select the 'Branch' dropdown menu and select the main branch.
  - Save and the sight is now published.

The live link can be found here - <https://elindalenback.github.io/birthday-quiz-project2/>

## Credits

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

### Content

- The Birthday Quiz Game was inspired by the Youtube Videos [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k) and [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8)

- Other helpful resources: 
  - The Youtube Video [JAVASCRIPT FOR BEGINNERS: Making Buttons Work](https://www.youtube.com/watch?v=DABVLJjnVUs)
  - [ChatGPT](https://chat.openai.com/)
  - [CodeInstitute](https://codeinstitute.net/)

### Media

- The photos used as the picture of Amanda in the footer is created with [AI](https://openai.com/dall-e-3)

### Acknowledgement
I also want to dedicate an extra thank you to my fellow student, Anton Eriksson. Thank you for the brainstorming and for your much-appreciated input.