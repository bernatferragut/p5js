// PS5
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle = new Particle(width/2, 0);
}

function draw() {
    // 1st external force affects the particle acc.
    let gravity = createVector(0, 0.01); 
    particle.applyForce(gravity);
    // 2nd external force affects the particle acc.
    if (mouseIsPressed) {
        let wind = createVector(0.001,0);
        particle.applyForce(wind);
    }
    // Physics: creation, updates, exceptions
    particle.createParticle();
    particle.updateParticle();
    particle.edges();    
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
        //this.acc.set(0,0); // start again to 0 in each frame;
    }

    edges() {
        if( this.pos.y + 10 > height ) {
            this.vel.y *= -1;
            this.pos.y = height;
        }
        else if( this.pos.x + 10 > width ) {
            this.vel.x *= -1;
            this.pos.x = width
        }
    }
}