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

    this.update = function() {
        let mouse = createVector(mouseX, mouseY); // mouse vector position
        this.acc = p5.Vector.sub(mouse, this.pos);   // accel = pos - mouse
        // this.acc.normalize();
        // this.acc.mult(.5);
        this.acc.setMag(.5);
;       this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    this.display = function() {
        background(0);
        fill(200);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}



