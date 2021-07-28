//create asynchronous function to capture comment user input
async function commentFormHandler(event) {
    event.preventDefault();

    const comment = document.querySelector('textarea[name="comment-body"]').nodeValue.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
//actively listen for user input to run js
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
