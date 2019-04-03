
var id = window.location.href.split('=')[1];

if( id != null )
fetchCurrentID(retreiveData);

function retreiveData( data ) {

let movieTitle = data.Title;
let movieReleased = data.Released;
let moviePoster = data.Poster;
let movieDesc = data.Plot;
let movieActors = data.Actors;
let movieGenre = data.Genre;
let movieRating = data.Ratings[0].Value;
let movieRuntime = data.Runtime;



document.title = movieTitle;

document.getElementsByTagName('h3')[0].innerText = movieTitle;
document.getElementsByTagName('p')[0].innerText = "Released: " + movieReleased;
document.getElementsByTagName('p')[1].innerText = "Type: " + movieGenre;
document.getElementsByTagName('p')[2].innerText = "Rating: " + movieRating;
document.getElementsByTagName('p')[3].innerText = "Duration " + movieRuntime;
document.getElementsByTagName('p')[4].innerText = "Short Description: " + movieDesc;
document.getElementsByTagName('p')[5].innerText = "Actors: " + movieActors;
document.getElementsByTagName('img')[0].src = moviePoster;
document.getElementsByTagName('img')[0].alt = "Movie Image"


}
