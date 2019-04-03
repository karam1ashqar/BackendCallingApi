var submitButton = document.getElementById("submitButton");
var inputFieldValue = document.getElementById("searchInput");
var outputSectionContainer0 = document.getElementsByClassName("outputSectionContainer")[0];
var outputSectionContainer1 = document.getElementsByClassName("outputSectionContainer")[1];

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      myFetch(inputFieldValue.value, myAppend);
      inputFieldValue.value = "";


});

function myAppend(data){

  ClearCurrentElements();

 var newElementContainer, newElementTitle, newElementYear, newElementImage;



 for( var i = 0; i < 4; i++ ){
  if(data[i].Poster !== 'N/A'){
    newElementContainer = document.createElement("DIV");
    newElementContainer.setAttribute("class", "item-container");
    newElementTitle = document.createElement("h3");
    newElementTitle.innerText = data[i]['Title'];
    newElementYear = document.createElement("p");
    newElementYear.innerText = data[i]['Year'];
    newElementImage = document.createElement("img");
    newElementImage.src = data[i]['Poster'];
    newElementImage.alt = "Movie Poster";
    newElementContainer.id = data[i]['imdbID'].trim();
    newElementContainer.setAttribute("onclick", 'return ItemClicked(\'' + newElementContainer.id + '\');')


    newElementContainer.appendChild(newElementTitle);
    newElementContainer.appendChild(newElementYear);
    newElementContainer.appendChild(newElementImage);
    if( i < 2)
    outputSectionContainer0.appendChild(newElementContainer);
    else
    outputSectionContainer1.appendChild(newElementContainer);
  }
 }
}

function ItemClicked( id ) {

  let selected = "selected?i=" + id;
  window.location.href = selected;

}

function ClearCurrentElements() {
  while (outputSectionContainer0.firstChild) {
    outputSectionContainer0.removeChild(outputSectionContainer0.firstChild);
}
while (outputSectionContainer1.firstChild) {
    outputSectionContainer1.removeChild(outputSectionContainer1.firstChild);
}
}
