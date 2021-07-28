//create asynchronous function to capture create post user input
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const leftover = document.querySelector('input[name="post-leftover"]').value;
    const content = document.querySelector('input[name="post-content"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            leftover,
            content
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}
//actively listen for user input to run js
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)