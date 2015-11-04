var express = require('express'),
	app = express().createServer(),
	//server = require('http').Server(app),
	io = require('socket.io')(app);
var port = 8080;

//Allows to serve static files from the public folder
app.use(express.static(__dirname+'/public/'));
require('./app/routes.js')(app);

require('./app/sockets.js')(io);
io.listen(server);

app.listen(port, function(){
	console.log('listening on *:',port);
});