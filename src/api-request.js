const requestModule = require('request');

const apiGet = (response, str) => {
    let url = "http://www.omdbapi.com/?s=" + str + "&apikey=" + '4a8cc460';

    let options = {
        url: url, 
        method: 'GET'
    };
    requestModule(options, (err, res, body) => {
        let json = JSON.parse(body);
        let data = json.Search;

        if (err) {
          console.log(err);
        } else {
          response.writeHead(200, { 'Content-Type': 'application/json' });
          response.end(`${JSON.stringify(data)}`);
        }
      });
};

const apiGetId = (response, id) => {
  let url = "http://www.omdbapi.com/?i=" + id + "&apikey=" + '4a8cc460';

    let options = {
        url: url, 
        method: 'GET'
    };

    requestModule(options, (err, res, body) => {
        let json = JSON.parse(body);
        let data = json;

        if (err) {
          console.log(err);
        } else {
          response.writeHead(200, { 'Content-Type': 'application/json' });
          response.end(`${JSON.stringify(data)}`);
        }
      });
}

module.exports = {
    api: apiGet,
    apiId: apiGetId
};

//4a8cc460