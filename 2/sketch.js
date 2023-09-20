// week 03: loops

let maxDiam = 80;
let minDiam = maxDiam / 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200, 200, 200);
  fill("pink");

  for (let xpos = 0; xpos <= width; xpos += maxDiam) {
    ellipse(xpos, 0, maxDiam, maxDiam);
  }

  for (let ypos = 0; ypos <= height; ypos += maxDiam) {
    ellipse(0, ypos, maxDiam, maxDiam);
  }
}
