var city;
var data;
var temp;
var url;

function preload() {
  city = "Hamburg";

  url = "http://api.apixu.com/v1/forecast.json?key=73558fe767924c8ab82160257180605&q=" + city + "&lang=de&days=7";
  data = loadJSON(url);
}

function setup() {
  createCanvas(800, 600);
  textSize(36);

  temp = data.current.temp_c;

  // setInterval() sorgt dafür, dass eine bestimmte Funktion wiederholt ausgeführt wird
  // die Funktion heißt hier loadData und wird alle 15 min. (300000 Millisekunden) ausgeführt
  // die Funktion sollte nicht zu häufig aufgerufen werden, um die API nicht unnötig zu belasten
  // die meisten APIs updaten ihre Daten ohnehin nur alle paar Minuten, ein Abruf jede Sekunde ergibt also keinen Sinn
  setInterval(loadData, 300000);
}

function draw() {
  background(255, 255, 0);
  text(city + ": " + temp + "° C", 50, 70);
}

// hier ist die selbstgeschriebene Funktion, die mit setInterval() ausgeführt wird
function loadData() {
  // die API Daten müssen noch einmal in data geladen werden
  // dann muss die Variable temp wieder mit den neuen Daten überschrieben werden
  data = loadJSON(url, function() {
    // hier müssen alle Befehle hin, die nach einem Neuabruf neu berechnet werden müssen
    temp = data.current.temp_c;
  });
}
