
//create a server
var http = require("http");


//Has a method named listen and it indicates the port number our HTTP server is going to listen on
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);