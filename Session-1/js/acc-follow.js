

// VARS
let walker;

// SETUP
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(100);
    walker = new Walker();
}
// DRAW
function draw() {
    //background(255);
    walker.display();
    walker.update();
}
// WALKER > Position + Velocity + Acceleration = Render Engine
function Walker() {
    this.pos = createVector(width/2, height/2); // v1
    this.vel = createVector(0,0);
    // this.acc = createVector(0,0.1);

    this.update = function() {
        this.acc = createVector(random(.3, -.3), random(.3, -.3)); // v3
        this.acc.mult(0.10);                                         // mult vect
        this.vel = this.vel.add(this.acc);                         // v2
        this.pos = this.pos.add(this.vel);                         // v1
    }

    this.display = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 1, 1);
    }
}



