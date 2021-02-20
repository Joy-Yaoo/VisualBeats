var audio;
var amp;
var fft;
var volhistory = [];

var pharse = 0;
var volnum = 0;

var maxnoise = 1;

function preload() {
  audio = loadSound("kissfight.mp3");
}

function setup() {
  createCanvas(300, 300);

  angleMode(DEGREES);

  audio.play();

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {

  background(0);
  translate(width / 2, height / 2);

  var vol = amp.getLevel();
  var spectrum = fft.analyze();

  volhistory.push(vol);

  beginShape();
  noFill();
  strokeWeight(3);
  stroke("white");

  for (var i = 0; i < 360;) {
    var r = map(spectrum[i] , 0, 255, 60, 100);

  //group1:
    var x = r * cos(i + pharse*2);
    var y = r * sin(i + pharse*2);

    strokeWeight(1);
    //line(cos(i) * 20, sin(i) * 10, x, y);
    //point(x*1.2, y*1.2);

  //group2:
    var x2 = r * cos(i - pharse);
    var y2 = r * sin(i - pharse);

    line(cos(i) * 50, sin(i) * 50, x2, y2);
    strokeWeight(1);
    point(x2*1.2, y2*1.2);

    strokeWeight(0.5);
    vertex(x, y);

    i += 10;

  }
  endShape(CLOSE);
  pharse+= 1;

}
