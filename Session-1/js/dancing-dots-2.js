// PS5
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle = new Particle(width/2, height/2);
}

function draw() {
    // an external force affects the particle acc
    let gravity = createVector(random(-0.1,0.1), random(-0.1,0.2)); 
    particle.applyForce(gravity);
    particle.createParticle();
    particle.updateParticle();
}

// Classes
class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.pos = createVector(this.x, this.y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    createParticle() {
        background(100);
        fill(0);
        ellipse(this.pos.x, this.pos.y, 20, 20);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    updateParticle() {  
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }
}