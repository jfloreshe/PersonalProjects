var http = require("http");
http.createServer(function (request, response){
	//send the http header
	//http status: 200: ok
	//content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as hello world
	response.end('Hello World\n');
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
