//create asynchronous function to capture login user input
async function loginFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}
//actively listen for user input to run js
document.querySelector('.login-form').addEventListener('submit', loginFormHandler)