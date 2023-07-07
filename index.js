let row = document.getElementById('movie-row');
function displayData(data){
   for (let i = 0; i < data.results.length; i++) {
     let column = document.createElement('div');
     let card = document.createElement('div');
     let image = document.createElement('img');
     let cardBody = document.createElement('div');
     let title = document.createElement('h5');
     let rating = document.createElement('p');

     //adding styles
     card.style.height = '37rem';

     column.classList.add('col-lg-3', 'col-md-6', 'mb-5');
     card.classList.add('card', 'bg-dark', 'text-white');
     image.classList.add('card-img-top');
     cardBody.classList.add('card-body', 'text-white', 'bg-dark');
     title.classList.add('card-title');
     rating.classList.add('card-text');

     image.src =
       'https://image.tmdb.org/t/p/w185/' + data.results[i].poster_path;
     title.innerHTML = data.results[i].title;
     rating.innerHTML = 'Rating: ⭐' + data.results[i].vote_average;

     cardBody.appendChild(title);
     cardBody.appendChild(rating);
     card.appendChild(image);
     card.appendChild(cardBody);
     column.appendChild(card);
     row.appendChild(column);
   }
}
document.getElementById('btn-fetch').addEventListener('click', () => {
  row.innerHTML = '';
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTllNzBjYWIzOTQyMGRiNzNhZjU3NzE3NjZlOWJhZCIsInN1YiI6IjY0OWZjNmU4ODFkYTM5MDE0ZDQ5NjRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGU0XqnCoIbbHtsvKA4MnP8Zp7SsVh1cjxPu8vJHqg0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    
    .then(response => response.json())
    .then(data => {
      displayData(data);
      
    });
});

document.getElementById('search-btn').addEventListener('click', () => {
  row.innerHTML = '';
  let url =
    'https://api.themoviedb.org/3/search/movie?api_key=859e70cab39420db73af5771766e9bad&query=' + document.getElementById('input-box').value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      displayData(data);
    })
})