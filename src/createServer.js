const http = require('http');
const { getResponseData } = require('./getResponseData');

function createServer() {
  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    if (request.method !== 'GET') {
      response.statusCode = 404;
      response.end('Not Found');

      return server;
    }

    const responseData = getResponseData(request.url);

    response.write(JSON.stringify(responseData));
    response.statusCode = 200;
    response.end();
  });

  return server;
}

module.exports = {
  createServer,
};
