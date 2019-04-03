function fetchCurrentID(callback){
  let url = "/search?i=" + id;

fetch(url)
 .then(
  (response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    response.json().then((data) => {
      callback(data);
      console.log(data)
    })
  }
)
.catch((err) => {
  console.log('Fetch Error :-S', err);
});
}

function myFetch(value, callback) {
  let url = "/search?s=" + value ;
    fetch(url)
     .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then((data) => {
          callback(data);
        })
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}
