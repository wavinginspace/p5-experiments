let moving_size = 50;
let static_size = 20;

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  // fullscreen(true);
  frameRate(15);
  print(width);
}

function draw() {
  background(random(230, 240), random(230, 240), random(230, 240));
  // left
  noStroke();
  fill(0);
  rect(97, 169, 79, 12);

  // right
  rect(365, 184, 20, 15);
  rect(20, 20, 120);

  beginShape();
  vertex(365, 199);
  vertex(385, 199);
  vertex(372, 216);
  vertex(358, 216);
  endShape(CLOSE);

  // bottom
  noFill();
  stroke(130);
  strokeWeight(2);
  ellipse(255, 350, static_size, static_size);

  // mouse interactions
  stroke(180);
  ellipse(mouseX, mouseY, moving_size, moving_size);

  if (mouseIsPressed) {
    static_size = floor(random(5, 20));
  }
}
