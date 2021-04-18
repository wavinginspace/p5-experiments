// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/paulbaisleyheadshot.jpg');
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  imageMode(CORNERS);
  img.resize(400, 400);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
    createDiv(`Label: ${results[1].label}`);
    createDiv(`Confidence: ${nf(results[1].confidence, 0, 2)}`);
    createDiv(`Label: ${results[2].label}`);
    createDiv(`Confidence: ${nf(results[2].confidence, 0, 2)}`);
  }
}
