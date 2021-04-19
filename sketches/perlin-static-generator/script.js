/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// x offset for perlin noise. different on every page refresh, but stays the same after load.
// const xoff1 = 0;
// const xoff2 = 10000;

// increment by
let inc = 0;
// x start point for perlin noise
// let start = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  frameRate(30);
}

function draw() {
  let yoff = inc;
  cursor('remote_control.png');
  loadPixels();
  noiseDetail(mouseX / 100, 0.1);
  for (let y = 0; y < height; y++) {
    let xoff = inc;
    for (let x = 0; x < width; x++) {
      let r = noise(xoff, yoff) * 255;
      let index = (x + y * width) * 4;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = random(240, 255);
      xoff += sin(mouseY);
    }
    yoff += mouseX;
  }
  // xoff += inc;
  updatePixels();

  // if (mouseIsPressed) {
  //   ellipse(mouseX, mouseY, 50, 50);
  // }

  inc += mouseX;
  // noLoop();
  // const x = map(noise(xoff1), 0, 1, 0, width);
  // const y = map(noise(xoff2), 0, 1, 0, height);

  // // keep this number small to maintain smoothness of perlin noise.
  // // if too high, will jump around a lot and be more like random
  // xoff1 += 0.002;
  // xoff2 += 0.005;

  // ellipse(x, y, 24, 24);
}
