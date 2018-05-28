var textStart;
// var value;
// var myScaleX;
var a = 0;
var s = 0;
var faktor = 1;


function setup() {
  createCanvas(768,1024);
  angleMode(DEGREES);

  textStart = 600;

  myScaleY = mouseY;

  // text settings
  textSize(120);
  textFont("GT America");
  textStyle(BOLD);

}

function draw() {
  // background(0, 0, 172);
  // background(26, 51, 140);
  // background(183, 139, 95);
  // background(117, 122, 78);
  // background(38, 38, 36);
  background(0);

  a = a + faktor;
  s = cos(a) * 6.3;
  // fill(217, 166, 0);
  // fill(255, 128, 89);
  // fill(95, 75, 139);
  // fill(242, 255, 0);
  // fill(102, 217, 0);
  fill(255, 230, 0);

  if(a > 89) {
    faktor = faktor * -1;
  }
  if( a < 0) {
    faktor = faktor * -1;
  }

  var asc = textAscent() * s;

  translate(-15, textStart);
  scale(4.5, 1);
  text("DU", 0, (asc / 1.3 - 120) * -1);
  resetMatrix();

  translate(.5, textStart + 120);
  scale(2.8, 1);
  text("BIST", 0, (asc / 1.3 - 120) * - 1);
  resetMatrix();

  translate(14.5, textStart + 360);
  scale(1.44, 1);
  text("HÜBSCH", 0, 0);
  resetMatrix();

  translate(27.5, textStart + 240);
  scale(1.1, s);
  text("TROTZDEM", 0, 0);
  resetMatrix();




  // print(asc);
  }






// }
