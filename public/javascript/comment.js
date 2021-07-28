//create asynchronous function to capture comment user input
async function commentFormHandler(event) {
    event.preventDefault();
}
//actively listen for user input to run js
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
