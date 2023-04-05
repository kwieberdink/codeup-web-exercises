const movieList = document.getElementById('movie-list');
const addMovieForm = document.getElementById('add-movie-form');

// Function to display movies on the page
function displayMovies(movies) {
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
      <h3>${movie.title} (${movie.rating})</h3>
      <p>Genre: ${movie.genre}</p>
      <button class="edit-button" data-id="${movie.id}">Edit</button>
      <button class="delete-button" data-id="${movie.id}">Delete</button>
    `;
        movieList.appendChild(movieDiv);
    });
}

// Function to add a movie to the database
function addMovie(title, rating, genre) {
    fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie added:', data);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error adding movie:', error);
        });
}

// Function to remove a movie from the database
function removeMovie(id) {
    fetch(`/api/movies/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie removed:', data);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error removing movie:', error);
        });
}

// Function to update a movie in the database
function updateMovie(id, title, rating, genre) {
    fetch(`/api/movies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie updated:', data);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error updating movie:', error);
        });
}

// Fetch the list of movies from the database and display them on the page
fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
        displayMovies(data.movies);
    })
    .catch(error => {
        console.error('Error fetching movies:', error);
    });



// Add an event listener to the form to add a new movie
addMovieForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const genre = document.getElementById('genre').value;

    addMovie(title, rating, genre);

    addMovieForm.reset();
});

// Add event listeners to the movie list for editing and deleting movies
movieList.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('edit-button')) {
        const id = target.dataset.id;
        const title = prompt('Enter the new title:');
        const rating = prompt('Enter the new rating:');
        const genre = prompt('Enter the new genre:');
        updateMovie(id, title, rating, genre);
    } else if (target.classList.contains('delete-button')) {
        const id = target.dataset.id;
        const confirmDelete = confirm('Are you sure you want to delete this movie?');
        if (confirmDelete) {
            removeMovie(id);
        }
    }
});