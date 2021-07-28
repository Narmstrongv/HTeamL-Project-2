//create asynchronous function to capture edit post user input
async function editFormHandler(event) {
    event.preventDefault();
}
//actively listen for user input to run js
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);