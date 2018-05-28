var mic;
var vol;
var level;

function setup() {
	createCanvas(600,400);

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	background(255);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

	var yellow = color(255, 255, 0);
	var magenta = color(255, 0, 255);

	var colors = [yellow, magenta];


	// lautstärke abrufen
	vol = mic.getLevel()

	if (vol > 0.15) {
		background( random(colors) );
	}

  // hair
  fill(0);
  rect(width/2, height/2 + 70, 180, 160);

  //head & neck
  fill(255, 230, 205);
  ellipse(width/2, height/2, 170, 200);
  rect(width/2, height, 20, 300)

  // pony
  fill(0);
	arc(width/2, height/2-10, 180, 180, 180, 0);

	// mouth
	fill(130, 0, 0);

	level = map(vol , 0, 1, 5, 200)

	ellipse(width/2, height/2 + 50, 60, level);


}
