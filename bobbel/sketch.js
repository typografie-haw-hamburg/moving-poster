var mic;
var fft;
var spectrum;
var l;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	strokeWeight(80);

	mic = new p5.AudioIn();
	mic.start();

	fft = new p5.FFT(0.98);
	fft.setInput(mic);
}

function draw() {
	spectrum = fft.analyze();
	background(255);

	var frequency = 100;

	for(angle = 0; angle < 360; angle++) {
		translate(width / 2, height / 2);
		rotate(angle);

		l = map(spectrum[frequency], 0, 255, 0, 800);

		line(0, 0, l, 0);

		frequency = frequency + 1;

		resetMatrix();

	}

}
