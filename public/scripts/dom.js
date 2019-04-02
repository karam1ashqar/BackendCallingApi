var submitButton = document.getElementById("submitButton");
var inputFieldValue = document.getElementById("searchInput");

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

       inputFieldValue.value = "";

});
