//create asynchronous function to capture delete post user input
async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: id
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
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
