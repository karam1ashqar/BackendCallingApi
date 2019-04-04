function myFetch(value, callback, type) {
let url = "";
  if( value != null )
     url = "/search?"+type+"=" + value;
  else
     url = "/search?"+type+"=" + id;

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
