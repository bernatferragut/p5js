// VARS
let walker;
//let mouse;

// SETUP
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(100);
    walker = new Walker();
}
// DRAW
function draw() {
    walker.display();
    walker.update();
}

// WALKER > Position + Velocity + Acceleration = Render Engine
function Walker() {
    this.pos = createVector(width/2, height/2); // v1
    this.vel = createVector(0,0);
    this.acc = p5.Vector.fromAngle(random(TWO_PI    ));

    this.update = function() {
        // this.acc = createVector(random(-3,3), random(-3,3));
        // this.acc = p5.Vector.fromAngle(random(TWO_PI    ));
        this.acc.rotate(random(3));
        this.acc.setMag(.1);
;       this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    this.display = function() {
        background(0);
        fill(200);
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }
}