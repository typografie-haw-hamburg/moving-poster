var bgText;
var punch;
var punchInv;
var imgText;
var imgText2;

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);

  // The shape
  bgText = createGraphics(400, 120);
  bgText.background(0, 0);
  bgText.textSize(140);
  bgText.text("TEST", 0, 110);

  imgText = bgText.get();
  imgText2 = bgText.get();
}

function draw() {

  // punch
  punch = createGraphics(400, 120);
  punch.strokeWeight(12);
  for (var i = 0; i < 30; i++) {
    punch.line(i * 30 - 120, 0, i * 30, 120);
  }

  // punch inverted
  punchInv = createGraphics(400, 120);
  punchInv.strokeWeight(11);
  for (var i = 0; i < 30; i++) {
    punchInv.line(i * 30 -135, 0, i * 30, 135);
  }

  background(255, 100, 100);

  imgText.mask(punch);
  image(imgText, mouseX, mouseY);

  imgText2.mask(punchInv);
  image(imgText2, width / 2, height / 2);

}
