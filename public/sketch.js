var socket; 

function setup() {
  	// put setup code here
  	createCanvas(windowWidth, windowHeight); 
  	background(51); 

  	socket = io.connect('https://samyakbambole.github.io/Multiplayter_Canvas/'); 
  	socket.on('mouse', newDrawing); 
}

function newDrawing(data) {
	fill(25, 255, 255); 
  	noStroke(); 
  	ellipse(data.x, data.y, 50, 50); 
     function keyPressed() {
          if (key = 'c') {
               background(51); 
          }
     }
}

function mouseDragged() {
console.log('Sending - ' + mouseX + ' , ' + mouseY); 

	var data = {
		x: mouseX, 
		y: mouseY
	}
	socket.emit('mouse', data); 

  	fill(25, 25, 255); 
  	noStroke(); 
  	ellipse(mouseX, mouseY, 50, 50); 	
}

function keyPressed() {
     if (key = 'c') {
          background(51); 
     } 
}

function draw() {
  	// put drawing code here
}