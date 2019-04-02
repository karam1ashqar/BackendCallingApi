const handlers = require('./handlers');


const route = (request, response) => {
  const url = request.url;

  if( url === "/")
  {

  }
  else handlers.error404(response);



}



module.exports = route;
