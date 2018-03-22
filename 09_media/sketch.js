var fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/fingers.mov',
                         'assets/fingers.webm']);
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  fingers.loadPixels();
  var stepSize = 32; //round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y < height; y+=stepSize) {
    for (var x=0; x < width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - fingers.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}