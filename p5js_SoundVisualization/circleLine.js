var audio;
var amp;
var fft;
var volhistory = [];

var pharse = 0;
var volnum = 0;
let img;

var maxnoise = 1;

function preload() {
  audio = loadSound("kissfight.mp3");
}

function setup() {
  createCanvas(300, 300, WEBGL);

  angleMode(DEGREES);

  audio.play();

  amp = new p5.Amplitude();
  fft = new p5.FFT();

}

function draw() {

  background(0);
  //translate(width / 2, height / 2);

  var vol = amp.getLevel();
  var spectrum = fft.analyze();

  volhistory.push(vol);

// 2. Circle
  beginShape();

  for (var j = 0; j < 360;) {
    var r2 = map(spectrum[j], 0, 256, 100, 360);
    var r3 = map(spectrum[j], 0, 256, 300, 360);
    var x_p = r2 * cos(j);
    var y_p = r2 * sin(j);

    noFill();
    strokeWeight(4);
    stroke("grey");

    // arc(cos(j) *100, sin(j) * 100 , 40, 40, r2/3, r2, OPEN);//CHORD
    stroke("grey");
    arc(0, 0 , 50, 50, 50, r2, OPEN);
    stroke("white");
    arc(0, 0 , 70, 70, r3 * 0.8, r3 , OPEN);
     stroke("grey");
    arc(0, 0 , 90, 90, r2, 120, OPEN);
    arc(0, 0 , 110, 110, r2 * 0.4, r2 * 0.8, OPEN);
     stroke("white");
    arc(0, 0 , 130, 130, r2 * 0.8, r2 * 1.3, OPEN);
     stroke("grey");
    arc(0, 0 , 150, 150, r3 * 0.3, r3 * 0.6, OPEN);
     stroke("white");
    arc(0, 0 , 170, 170, r2 * 1.2, r2 * 1.5, OPEN);

    j = j+36;

  }
  endShape(CLOSE);



  if (volhistory.length > 360) { //2 * 3.14 * r
    volhistory.splice(0, 1);
  }

}
