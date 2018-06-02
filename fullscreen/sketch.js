function setup() {
  createCanvas(450, 800);
  background(255, 0, 0);
}

function draw() {
  ellipse(random(width), random(height), 80);
}

function mouseReleased() {
  var fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {

  if (fullscreen()) {
    resizeCanvas(displayWidth, displayHeight);
  } else {
    resizeCanvas(windowWidth, windowHeight);
  }

  background(255, 0, 0);
}
