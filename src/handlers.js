let exType = {
  html: {
    "Content-Type": "text/html"
  },
  css: {
    "Content-Type": "text/css"
  },
  js: {
    "Content-Type": "application/javascript"
  }
};

const error404 = (response) => {
  response.writeHead(404);
  response.end("404 error, page not found");
}


module.exports = {
  error404
}
