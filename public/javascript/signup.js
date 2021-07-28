//create asynchronous function to capture signup user input
async function signupFormHandler(event) {
    event.preventDefault();
    //identify user input and trim to make constants
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();

}
//actively listen for user input to run js
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)