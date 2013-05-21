var http = require('http')
  , sys  = require('sys');

var header = {
	"Content-Type": "text/html"
};

// Handle incoming requests
var app = http.createServer( function( request, response ) {

	sys.puts("Incoming request! Woo!");
	response.writeHeader(200, header);
	response.write("<h2>Hello, nerds!</h2>");
	response.end();

});

// Listen for incoming requests on port 80
app.listen(80);

