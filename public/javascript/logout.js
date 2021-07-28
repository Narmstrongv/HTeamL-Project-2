//create asynchronous function to logout in response to user input
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });
}
//actively listen for user input to run js
document.querySelector('#logout').addEventListener('click', logout);