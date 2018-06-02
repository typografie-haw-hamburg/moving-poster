var x;
var y;
var bgColor;

function setup() {
  createCanvas(700, 1000);
  background(255, 0, 0);

  x = width / 2;
  y = height / 2;
  bgColor = color(255, 0, 0);

  // setInterval() sorgt dafür, dass eine bestimmte Funktion wiederholt ausgeführt wird
  // die Funktion heißt hier updateBg und wird jede Sekunde (1000 Millisekunden) ausgeführt
  setInterval(updateBg, 1000);
}

function draw() {
  background(bgColor);
  ellipse(x, y, 80);

  x = x + random(-5, 5);
  y = y + random(-5, 5);
}

// hier ist die selbstgeschriebene Funktion, die mit setInterval() ausgeführt wird
function updateBg() {
  bgColor = color(random(255), random(255), random(255));
}
