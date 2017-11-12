// VARS
let walker;
let xoff = 0;

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
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0,0);
    this.acc = p5.Vector.fromAngle(noise(xoff) * 360);

    this.update = function() {
        this.acc.rotate(noise(xoff));
        xoff += .05;
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