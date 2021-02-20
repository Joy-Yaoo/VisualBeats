var audio;
let img;
var amp;
var fft;
var volhistory = [];

var pharse = 0;
var volnum = 0;

var maxnoise = 1;

function preload() {
  audio = loadSound("kissfight.mp3");
  img = loadImage("1.jpg");
}

function setup() {
  createCanvas(300, 300);

  angleMode(DEGREES);

  audio.play();

  amp = new p5.Amplitude();
  fft = new p5.FFT(0, 256);

  img = loadImage("kissfight_2.jpg");
}

 function draw() {
  image(img, 0, 0);

  background(img);

  translate(width / 2, height / 2);

  var vol = amp.getLevel();
  var spectrum = fft.analyze();

  volhistory.push(vol);


//1. Line
  beginShape();

  for (var t = 0; t < 360;) {

    var r3 = map(spectrum[t], 0, 256, 50, 100);
    var r4 = map(spectrum[t], 0, 256, 100, 50);

    var x1 = r3 * cos(t);
    var y1 = r3 * sin(t);

    var x2 = r4 * cos(t);
    var y2 = r4 * sin(t);

    stroke(t, t + 20, 200);
    strokeWeight(4.5);
    rotate(360 / 120);

    line(cos(t) * 50, sin(t) * 50, x1, y1);

    t = t+2;
  }

  endShape();
  pharse+=1;
    if (volhistory.length > 360) { //2 * 3.14 * r
      volhistory.splice(0, 1);
    }
 }
