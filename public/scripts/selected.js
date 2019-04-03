
var id = window.location.pathname.split('=')[1];

if( id != null || id.trim() != "" )
fetchCurrentID(retreiveData);

function retreiveData( data ) {

let movieTitle = data.Title;

document.title = movieTitle;

getElementsByTagName('h1')[0].innerText = movieTitle;


}
