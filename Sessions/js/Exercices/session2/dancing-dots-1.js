// P5.js Sketch => dancing-dots-1

let dot;
let maxCircleSize = 50;
// Dot Object
function Dot() {
    this.phase = 0;
    this.factor = 0.03;
    this.x = width/2;
    this.y = height/2;
    this.circleSize = 10;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);

    this.createDot = () => { 
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.circleSize, this.circleSize);
    };

    this.update = () => { 
        this.phase = frameCount * this.factor;
        this.acc = createVector(0, sin(this.phase));
        this.acc.normalize();
        this.acc.mult(0.1);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        let sizeOffset = (cos(this.phase + 1) * 0.5);
        this.circleSize = sizeOffset *s maxCircleSize;
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