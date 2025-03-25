function calculateNumbers(var1, var2) {
    return var1 + var2;
}

function skillsMember() {
    return "I'm a member";
}

// Create web server
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});