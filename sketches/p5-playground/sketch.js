function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  // fullscreen(true);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
