const http = require('http');
const { getResponseData } = require('./getResponseData');

function createServer() {
  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;

    const responseData = getResponseData(request.url);

    response.write(JSON.stringify(responseData));
    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
