// week 03: loops and random() for sizes

let maxDiam = 100;
let minDiam = maxDiam / 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200, 200, 200);
  fill("pink");
  randomSeed(0);

  for (let xpos = 0; xpos <= width; xpos += maxDiam) {
    for (let ypos = 0; ypos <= height; ypos += maxDiam) {
      let tDiam = random(minDiam, maxDiam);
      ellipse(xpos, ypos, tDiam, tDiam);
    }
  }
}
