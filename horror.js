document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() !== '') {
        addComment(commentInput);
        document.getElementById('commentInput').value = '';
    }
});

function addComment(comment) {
    var commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = comment;
    document.getElementById('comments').appendChild(commentDiv);
}

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
