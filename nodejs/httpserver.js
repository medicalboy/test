//import module require
const http = require('http');
http.createServer(function(request,response){

    response.writeHead(200,{'Content-type':'text/html'});
    response.end("<strong>hello server!!</strong>");
}).listen(8888);
console.log("your server is: http//localhost8888");