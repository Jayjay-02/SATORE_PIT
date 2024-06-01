document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('main-menu').classList.toggle('active');
    });

    // Play, Pause, Forward functionality (Placeholder)
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const forwardButton = document.getElementById('forward-button');

    playButton.addEventListener('click', function() {
        // Placeholder for play functionality
        console.log('Play button clicked');
    });

    pauseButton.addEventListener('click', function() {
        // Placeholder for pause functionality
        console.log('Pause button clicked');
    });

    forwardButton.addEventListener('click', function() {
        // Placeholder for forward functionality
        console.log('Forward button clicked');
    });

    // Comment functionality (Placeholder)
    const commentButton = document.getElementById('comment-button');
    const commentSection = document.getElementById('comment-section');

    commentButton.addEventListener('click', function() {
        const commentInput = prompt('Enter your comment:');
        if (commentInput) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = commentInput;
            commentSection.appendChild(commentElement);
        }
    });

    // Event handlers for genre links
    const genreLinks = document.querySelectorAll('#main-menu ul li a');
    const backButton = document.getElementById('back-button');
    const nextButton = document.getElementById('next-button');
    let currentGenreIndex = 0;

    backButton.addEventListener('click', function() {
        if (currentGenreIndex > 0) {
            currentGenreIndex--;
            genreLinks[currentGenreIndex].click();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentGenreIndex < genreLinks.length - 1) {
            currentGenreIndex++;
            genreLinks[currentGenreIndex].click();
        }
    });

    genreLinks.forEach(function(genreLink, index) {
        genreLink.addEventListener('click', function(event) {
            event.preventDefault();
            const genre = genreLink.dataset.genre;
            document.getElementById('genre-title').textContent = genre;
            console.log(`User clicked on ${genre} genre.`);
            currentGenreIndex = index;
            backButton.style.display = currentGenreIndex === 0 ? 'none' : 'inline-block';
            nextButton.style.display = currentGenreIndex === genreLinks.length - 1 ? 'none' : 'inline-block';
        });
    });

});
