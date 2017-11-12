// VARS
let walker;

// SETUP
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    walker = new Walker();
}
// DRAW
function draw() {
    background(51);
    walker.display();
    walker.walk();
}
// WALKER
function Walker() {
    this.x = width/2;
    this.y = height/2;

    this.display = function() {
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }

    this.walk = function() {
        this.x += random(1, -1) * 10 ;
        this.y += random(1, -1) * 10 ;
    }
}



