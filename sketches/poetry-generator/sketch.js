// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('../../m5/ml5-data-and-models-main/models/charRNN/bolano/', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Generate content
rnn.generate({ seed: 'hello' }, (err, results) => {
  console.log(results);
});
