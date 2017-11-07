// VARS
let walker;

// SETUP
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    walker = new Walker();
}
// DRAW
function draw() {
    //background(255);
    walker.display();
    walker.walk();
}
// WALKER
function Walker() {
    this.pos = createVector(width/2, height/2);

    this.walk = function() {
        this.vel = createVector(random(3, -3), random(3, -3));
        this.pos = this.pos.add(this.vel); // v3 = v1 = v2
    }

    this.display = function() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, 1, 1);
    }
}



