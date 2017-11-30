// PS5
let particle1;
let particle2;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle1 = new Particle(400, 100, 3);
    particle2 = new Particle(1000, 100, 1);
}

function draw() {
    background(100)
    // External forces affects the particle acc.
    let wind = createVector(0.01,0);

    let gravity1 = createVector(0, 0.02 * particle1.mass);
    let gravity2 = createVector(0, 0.02 * particle2.mass);
    
    particle1.applyForce(gravity1);
    particle2.applyForce(gravity2);

    if(mouseIsPressed) {
        particle1.applyForce(wind);
        particle2.applyForce(wind);

    }

    // Particle 1
    particle1.createParticle();
    particle1.updateParticle();
    particle1.edges();    
    
    // Particle 2
    particle2.createParticle();
    particle2.updateParticle();
    particle2.edges(); 
}

// Classes
class Particle {
    constructor(x,y,m){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
    }

    createParticle() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
    }

    applyForce(force) {
        let f = force.copy(); // se each particle can have it's own force.
        f.div(this.mass);
        this.acc.add(f);
    }

    updateParticle() {  
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(0.998); //  Easy way to add friction
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