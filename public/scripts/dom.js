var submitButton = document.getElementById("submitButton");
var inputFieldValue = document.getElementById("searchInput");

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      myFetch( inputFieldValue.value );

      inputFieldValue.value = "";


});

function myFetch( value ) {

    fetch('/search?s=' + inputFieldValue.value)
     .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then((data) => {
          console.log(data)
        })
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}
