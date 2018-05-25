// !!!
// in der HTML-Datei muss die MIDI library mit eingebunden sein, sonst funktioniert das Script nicht
// !!!

var circleSize = 200;
var blue = 0;
var randomShiftX = 0;
var randomShiftY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 125, 255);

  translate(width / 2, height / 2);

  fill(255, 255, blue);

  ellipse(random(-randomShiftX, randomShiftX), random(-randomShiftY, randomShiftY), circleSize);
}

p5.midi.onInput = function(e) {
  var note = e.data[1];
  var velocity = e.data[2];

  console.log(note);
  console.log(velocity);

  if(note === 8) {
    circleSize = velocity * 8;
  }

  if(note === 7) {
    blue = map(velocity, 0, 127, 0, 255);
  }

  if(note === 6) {
    randomShiftX = velocity;
  }

  if(note === 5) {
    randomShiftY = velocity;
  }

}
