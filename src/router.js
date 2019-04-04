const handlers = require('./handlers');

const route = (request, response) => {
  const url = request.url;

  if (url === "/")
    handlers.home(response);
  else if ( url.indexOf('selected') !== -1)
    handlers.selected(response, url);
  else if (url.indexOf('public') !== -1)
    handlers.public(url, response);
  else if (url.indexOf('/search?s=') !== -1)
    handlers.search(url, response);
  else if (url.indexOf('/search?i=') !== -1)
    handlers.item(url, response);
  else handlers.error(response);
};

module.exports = route;
