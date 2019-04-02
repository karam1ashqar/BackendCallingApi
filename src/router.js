const handlers = require('./handlers');


const route = (request, response) => {
  const url = request.url;

  if( url === "/")
      handlers.handleHome(response);
  else if( url.indexOf('public') !== -1 )
       handlers.handlePublic(url, response);
  else handlers.handleError404(response);



}



module.exports = route;
