// week 03: 2 levels of loops

let maxDiam = 80;
let minDiam = maxDiam / 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200, 200, 200);
  fill("pink");

  for (let xpos = 0; xpos <= width; xpos += maxDiam) {
    for (let ypos = 0; ypos <= height; ypos += maxDiam) {
      ellipse(xpos, ypos, maxDiam, maxDiam);
    }
  }
}
