var myCircles = [];
var oneCirlce;


function setup() {
  createCanvas(600, 400);
  noStroke();
}


function draw() {
  background(255, 230, 205);

  for(var i = 0; i < myCircles.length; i++) {

    fill(255, 0, 0);
    ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia)

  }
}


function mouseDragged() {

  oneCircle = {
    x: mouseX,
    y: mouseY,
    dia: 20,
    opa: 255
  }

  myCircles.push( oneCircle )


  if(myCircles.length > 20) {
      myCircles.splice(0, 1);
    }
}
