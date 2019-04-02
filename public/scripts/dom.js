data = JSON.parse(data)

 if( data.length > 4 )
 data = data.slice(0,4);

 var newElementContainer, newElementTitle, newElementYear, newElementImage;


 for( var i = 0; i < 4; i++ )
 {
   newElementContainer = document.createElement("div");
   newElementContainer.class = "item-container";
   newElementTitle = document.createElement("h3");
   newElementTitle.innerText = data[i]['Title'];
   newElementYear = document.createElement("p");
   newElementYear.innerText = data[i]['Year'];
   newElementImage = document.createElement("img");
   newElementImage.src = data[i]['Poster']

   newElementContainer.appendChild(newElementTitle);
   newElementContainer.appendChild(newElementYear);
   newElementContainer.appendChild(newElementImage);
   if( i < 2)
   outputSectionContainer0.appendChild(newElementContainer);
   else
   outputSectionContainer1.appendChild(newElementContainer);

 }
