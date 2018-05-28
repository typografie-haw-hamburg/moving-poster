var data;
var temp;
var windDirection;
var windDirName
var city;
var red;
var blue;

var cities = ["Aachen", "Hamburg", "Nürnberg", "Hameln", "Melbourne", "Svalbard"];

function preload() {

  city = random(cities);

  var url = "http://api.apixu.com/v1/forecast.json?key=73558fe767924c8ab82160257180605&q=" + city + "&lang=de&days=7";
  data = loadJSON(url);

  print(data);
}

function setup() {
  createCanvas(800, 600);
  textSize(36);
  angleMode(DEGREES);

  temp = data.current.temp_c;
  windDirection = data.current.wind_degree;
  windDirName = data.current.wind_dir;

  red = map(temp, 0, 30, 0, 255);
  blue = map(temp, 0, 30, 255, 0);
}

function draw() {
  background(red, 0, blue);

  fill(0);
  text(city + ", " + temp + "° C\nWindrichtung: " + windDirName, 50, 80);

  translate(width / 2, height / 2);
  noFill();
  for(var i = 0; i < temp; i++) {
    ellipse(0, 0, (i + 1) * 20);
  }

  fill(0);
  rotate(windDirection + 180);
  triangle(-20, 100, 0, -100, 20, 100);
}
