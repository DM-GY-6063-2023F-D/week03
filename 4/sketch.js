// week 03: 3 levels of loops

let maxDiam = 100;
let minDiam = maxDiam / 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200, 200, 200);
  fill("pink");

  for (let xpos = 0; xpos <= width; xpos += maxDiam) {
    for (let ypos = 0; ypos <= height; ypos += maxDiam) {
      for (let dim = maxDiam; dim > minDiam; dim -= 10) {
        ellipse(xpos, ypos, dim, dim);
      }
    }
  }
}
