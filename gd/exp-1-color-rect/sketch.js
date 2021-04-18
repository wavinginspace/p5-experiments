function setup() {
  createCanvas(720, 720);
  // noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
background(mouseY / 2, 30, 100);
fill(360 - mouseY / 2, 100, 100);
rect(360, 360, mouseX + 1, mouseX + 1);

}

document.querySelector("#saveButton").addEventListener("click", function() {
  saveCanvas(gd.timestamp(), 'png');
})