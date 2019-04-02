const fs = require('fs');
const path = require('path');

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

const handleError404 = ( response ) => {
  const filePath = path.join( __dirname, "..", "public", "layouts", "404.html");

  fs.readFile(filePath, ( err, file ) => {
    if( err )
    {
    response.writeHead(500);
    response.end('500 server error');
  }
  else {
    response.writeHead(200, exType.html);
    response.end(file);
  }
});
}

const handleHome = ( response ) => {
    const filePath = path.join( __dirname, "..", "public", "layouts", "index.html");

    fs.readFile(filePath, ( err, file ) => {
      if( err )
      {
      response.writeHead(500);
      response.end('500 server error');
    }
    else {
      response.writeHead(200, exType.html);
      response.end(file);
    }
  });

}

const handlePublic = ( url, response ) => {
  let ext;
  let filePath;
  if( url.indexOf(".") !== -1 )
      ext = url.split('.')[1];
  else
      handleError404(response)

   if( url === "/public/layouts/index.html")
       url = "";

     filePath = path.join( __dirname, "..", url )

  fs.readFile(filePath, (err, file) => {
    if( err )
    {
      response.writeHead(500);
      response.end('500 server error');
    }
    else {
      response.writeHead(200, exType[ext]);
      response.end(file);
    }
  })

}


module.exports = {
  handleError404,
  handlePublic,
  handleHome
}
