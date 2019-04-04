const fs = require('fs');
const path = require('path');
const query = require('./api-request');

let exType = {
  html: { "Content-Type": "text/html" },
  css: { "Content-Type": "text/css" },
  js: { "Content-Type": "application/javascript" }
};

const handleHome = (response, url) => {
if( url.indexOf("selected") === -1 )
url = "index";

  const filePath = path.join(__dirname, "..", "public", "layouts", url + ".html");

  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500);
      response.end('500 server error');
    }
    else {
      response.writeHead(200, exType.html);
      response.end(file);
    }
  });

};

const handlePublic = (url, response) => {
  let ext;
  let filePath;
  if (url.indexOf(".") !== -1)
    ext = url.split('.')[1];


  if (url === "/public/layouts/index.html")
    url = "";


  filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500);
      response.end('500 server error');
    }
    else {
      response.writeHead(200, exType[ext]);
      response.end(file);
    }
  });
};

const searchHandler = (url, res) => {
  url = decodeURI(url);
  var queryString = url.split("s=")[1];
  query.api(res, queryString);
};

const itemHandler = (url, res) => {
  url = decodeURI(url);
  var queryString = url.split('i=')[1];
  query.apiId(res, queryString);
}

const handleError404 = (response) => {
  const filePath = path.join(__dirname, "..", "public", "layouts", "404.html");

  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500);
      response.end('500 server error');
    }
    else {
      response.writeHead(200, exType.html);
      response.end(file);
    }
  });
};


module.exports = {
  error: handleError404,
  public: handlePublic,
  home: handleHome,
  search: searchHandler,
  item: itemHandler
};
