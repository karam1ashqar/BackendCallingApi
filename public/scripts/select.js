
var id = window.location.href.split('=')[1];

if( id != null )
fetchCurrentID(retreiveData);

function retreiveData( data ) {

let movieTitle = data.Title;
let movieReleased = data.Released;
let moviePoster = data.Poster;

document.title = movieTitle;

document.getElementsByTagName('h3')[0].innerText = movieTitle;
document.getElementsByTagName('p')[0].innerText = movieReleased;
document.getElementsByTagName('img')[0].src = moviePoster;


}
