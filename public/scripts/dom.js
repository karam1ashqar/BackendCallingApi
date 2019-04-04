var submitButton = document.getElementById("submitButton");
var inputField = document.getElementById("searchInput");
var outputSectionContainer0 = document.getElementsByClassName("outputSectionContainer")[0];
var outputSectionContainer1 = document.getElementsByClassName("outputSectionContainer")[1];


    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      myFetch(inputField.value, myAppend, "s");
      inputField.value = "";
});

inputField.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    submitButton.click();
  }
});

function myAppend(data){

  ClearCurrentElements();


  if(data.Response === 'False'){
    var newDiv = document.createElement("DIV");
    newDiv.id = 'not-found';
    var p = document.createElement("p");
    p.textContent = data.Error + ' (Invalid User Input)';
    newDiv.appendChild(p);
    document.getElementsByTagName('body')[0].appendChild(newDiv);
  }else {
    var newElementContainer, newElementTitle, newElementYear, newElementImage, newElementImageContainer;

    for( var i = 0; i < 4; i++ ){
     if(data[i].Poster !== 'N/A'){
       newElementContainer = document.createElement("DIV");
       newElementContainer.setAttribute("class", "item-container");
       newElementTitle = document.createElement("h3");
       newElementTitle.innerText = data[i]['Title'];
       newElementYear = document.createElement("p");
       newElementYear.innerText = data[i]['Year'];
       newElementImageContainer = document.createElement('DIV');
       newElementImageContainer.setAttribute('class','image-container');
       newElementImage = document.createElement("img");
       newElementImage.src = data[i]['Poster'];
       newElementImage.alt = "Movie Poster";
       newElementContainer.id = data[i]['imdbID'].trim();
       newElementContainer.setAttribute("onclick", 'return ItemClicked(\'' + newElementContainer.id + '\');')


       newElementContainer.appendChild(newElementTitle);
       newElementContainer.appendChild(newElementYear);
       newElementImageContainer.appendChild(newElementImage);
       newElementContainer.appendChild(newElementImageContainer);

       if( i < 2)
       outputSectionContainer0.appendChild(newElementContainer);
       else
       outputSectionContainer1.appendChild(newElementContainer);
     }
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
while (document.getElementById('not-found')){
  document.getElementById('not-found').remove();
}
}
