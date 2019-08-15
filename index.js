var http = require('http');

var server = http.createServer();

var fs = require('fs');

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
        fs.readFile('../17.8/index.html', function(err, content) {
            response.write(content);
            response.end();
        });
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(9000);