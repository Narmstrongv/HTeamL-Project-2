//create asynchronous function to capture delete post user input
async function deleteFormHandler(event) {
    event.preventDefault();
}
//actively listen for user input to run js
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
