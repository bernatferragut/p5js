// P5.js Sketch => dancing-dots-1

let dot;
// Dot Object
function Dot() {
    this.x = width/2;
    this.y = height/2;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);

    this.createDot = () => { 
        fill(0);
        ellipse(this.pos.x, this.pos.y, 50, 50)
    };

    this.update = () => { 
        this.acc = createVector(0, random(-0.01,0.01));
        this.acc.normalize();
        this.acc.mult(0.1);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
     };
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(200);
    dot = new Dot();    
}

function draw() {
    background(200);
    dot.createDot();
    dot.update();
}