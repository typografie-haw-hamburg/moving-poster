var myCircles = [];
var oneCirlce;


function setup() {
  createCanvas(600, 400);
  noStroke();
}


function draw() {
  background(255, 230, 205);

  for(var i = 0; i < myCircles.length; i++) {

    fill(255, 0, 0, myCircles[i].opa);
    ellipse(myCircles[i].x, myCircles[i].y, myCircles[i].dia)

    myCircles[i].opa = myCircles[i].opa - 2;

    if(myCircles[i].opa < 0) {
      myCircles.splice(0, 1);
    }
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

}
