//create asynchronous function to capture edit post user input
async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const leftover = document.querySelector('input[name="post-leftover"]').value;
    const content = document.querySelector('input[name="post-content"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            leftover,
            content
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/profile/');
    } else {
        alert(response.statusText);
    }
}
//actively listen for user input to run js
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);