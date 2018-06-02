var x;
var y;
var bgColor;

function setup() {
  createCanvas(700, 1000);
  background(255, 0, 0);

  x = width / 2;
  y = height / 2;
  bgColor = color(255, 0, 0);
}

function draw() {
  background(bgColor);
  ellipse(x, y, 80);

  x = x + random(-5, 5);
  y = y + random(-5, 5);

  // alle 100 Frames wird dem Hintergrund eine neue Zufallsfarbe zugewiesen
  // je nachdem wie schnell euer Rechner läuft, unterscheiden sich die Intervalle leicht
  if(frameCount % 100 === 0) {
    bgColor = color(random(255), random(255), random(255));
  }

}
