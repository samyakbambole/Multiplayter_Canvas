var express = require('express');
var app = express(); 
var server = app.listen(3000);

app.use(express.static('public'));   

console.log("The Server is Running!"); 

var socket = require('socket.io'); 
var io = socket(server); 

io.sockets.on('connection', newConnection); 

function newConnection(socket) {
	console.log('New Connection! ID - ' + socket.id);

	socket.on('mouse', mouseMsg); 

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data); 
		// io.socket.emit('mouse', data); 
		console.log(data);
	}
}