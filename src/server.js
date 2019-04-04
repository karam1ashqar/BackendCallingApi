const http = require("http");
const router = require("./router");
const env = require('env2')('src/.env');

const port = process.env.PORT;
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
