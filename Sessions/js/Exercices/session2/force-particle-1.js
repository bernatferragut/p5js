// PS5
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle = new Particle(width/2, height/2);
}

function draw() {
    // an external force affects the particle acc
    let gravity = createVector(0, 0.01); 
    particle.applyForce(gravity);
    particle.createParticle();
    particle.updateParticle();
    // edges behaviour
    if( particle.pos.y > height) {
        gravity = -gravity;
    }
}

// Classes
class Particle {
    constructor(x,y){
        this.pos = createVector(x, y);
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