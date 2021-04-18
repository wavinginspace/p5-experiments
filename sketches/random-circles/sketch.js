function setup() {
  createCanvas(400, 300);
  rectMode(CENTER);
}

function draw() {
  // put drawing code here
  background(250, 200, 20);
  // particle(mouseX, mouseY);
  // ellipse(10, 10, 10, 10);
  ellipse(10, 10, 10, 10)

}

function particle(mouseX, mouseY) {

	let x = mouseX;
	let y = mouseY;
	
	let d = dist(x, y, 400, 300);
	
	var size = 100 * sin(d);
	
	var r = size*10;
	var g = Math.floor(255 * sq(sin(d)));
	var b = 100 * sin(y/4);
		
	fill(100);
	ellipse(x, y, size);
	// square(x, y, size);
}
