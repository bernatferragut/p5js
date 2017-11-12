// PS5

// Fg = (m1 + m2) * G / d2
let particle;
let attractor;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    particle = new Particle(400, 100, 3);
    attractor = new Attractor(width/2, height/2);
}

function draw() {
    background(100)

    let force = attractor.calculateAttraction(particle);
    
    // Particle
    particle.createParticle();
    particle.updateParticle();
    particle.edges();    
    // Attractor
    attractor.createAttractor();
    attractor.calculateAttraction(particle);
}

// Prticle class
class Particle {
    constructor(x,y,m){
        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
    }

    createParticle() {
        fill(0);
        ellipse(this.pos.x, this.pos.y, this.mass * 16, this.mass * 16);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    updateParticle() {  
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
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

// Attractor class
class Attractor {
    constructor() {
        this.pos = createVector(width/2,height/2);
        this.mass = 20;
        this.G = 1;
    }

    calculateAttraction(p) {
        // Calculate de direction of the force
        let force = p5.Vector.sub(this.pos, p.pos);
        //Distance between objects
        let distance = force.mag();
        // Limiting the distance to eliminate "extreme" results
        distance = constrain(distance, 5, 25);
        // Normalize Vector
        force.normalize();
        // Calculate gravitational force magnitude
        let strength = (this.G * this.mass * p.mass) / (distance * distance);
        // Get force vector => magnitude * direction
        force.mult(strength);
        return force;
    }

    createAttractor() {
        ellipseMode(CENTER);
        ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
    }
}
