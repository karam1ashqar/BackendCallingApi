const handlers = require('./handlers');

const route = (request, response) => {
  let url = request.url;

  if ( url.indexOf('selected') !== -1 || url === "/")
  {
    if( url.indexOf('url') !== -1 )
    url = url.split('?')[0];
    handlers.home(response, url);
  }
  else if (url.indexOf('public') !== -1)
    handlers.public(url, response);
  else if (url.indexOf('/search?s=') !== -1)
    handlers.search(url, response);
  else if (url.indexOf('/search?i=') !== -1)
    handlers.item(url, response);
  else handlers.error(response);
};

module.exports = route;
