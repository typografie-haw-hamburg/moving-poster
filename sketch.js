var xspacing = 1.0;   // Distance between each horizontal location
var w;              // Width of entire wave
var maxwaves = 2;   // total # of waves to add together

var theta = 0.4;
var amplitude = new Array(maxwaves);   // Height of wave
// Value for incrementing X, to be calculated
// as a function of period and xspacing
var dx = new Array(maxwaves);
// Using an array to store height values
// for the wave (not entirely necessary)
var yvalues;

function setup() {
    createCanvas(900,1600);
  frameRate(92);
  colorMode(RGB, 255, 255, 255, 100);
  w = width + 3;

  for (var i = 0; i < maxwaves; i++) {
    amplitude[i] = random(1,5);
    var period = random(90,500); // Num pixels before wave repeats
    dx[i] = (TWO_PI / period) * xspacing;
  }

  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background('#fffc00');
  calcWave();
  renderWave();


  /////////HEADLINE
  noStroke();

  textSize(48);
  fill(0);
  text('KIELER WOCHE', 5, height-100);


  textSize(48);
  fill(0);
  text('16\u{2009}–\u{2009}24. Juni 2018', width-385, height-100);

  textSize(15);
  fill(0);
  text('Wasser und Land, Bühne und Regattabahn\u{2009}\u{2009}–\u{2009}\u{2009}mehr als 2.000 Veranstaltungen verschmelzen in zehn Tagen zu einer sehr besonderen Mischung. \nDie Kieler Woche ist so etwas wie die 9. Symphonie unter den großen Festen.', 10, height-70);

  textSize(28);
  fill(0);
  text('www.kieler-woche.de',  width-270, height-10);
  /////////text ende

  noFill();
    stroke(255);
    stroke(0);

//Segel
    triangle(width-10, width-10, width/3, height-150, width/2, 10);
//Segel ende


    stroke(0);
        line(width+20, height-90, 0, height-90);

        stroke(0);
          line(width+20, height-150, 0, height-150);




}


fill('#fffc00');
function calcWave() {
  // Increment theta (try different values
  // for 'angular velocity' here
  theta += 0.2;

  // Set all height values to zero
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = 0;
  }

  // Accumulate wave height values
  for (var j = 0; j < maxwaves; j++) {
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      // Every other wave is cosine instead of sine
      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
      else yvalues[i] += cos(x)*amplitude[j];
      x+=dx[j];
    }
  }
}

function renderWave() {
  // A simple way to draw the wave with an ellipse at each location
  noStroke();
  fill(0);
  ellipseMode(CENTER);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing,height-42+yvalues[x],1,1);

  }





}
