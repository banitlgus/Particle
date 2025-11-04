let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.3);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}

function mouseClicked() {

  let wind = createVector(0.1, 0);
  ball.addWind(wind);

}
