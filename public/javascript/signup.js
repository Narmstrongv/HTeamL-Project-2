//create asynchronous function to capture signup user input
async function signupFormHandler(event) {
    event.preventDefault();
    //identify user input and trim to make constants
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({ username, email, twitter, github, password}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}
//actively listen for user input to run js
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)