let capture;

function setup() {
  createCanvas(400, 400);
  capture = createCapture();
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}