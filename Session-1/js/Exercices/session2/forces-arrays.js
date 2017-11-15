// PS5
let particles = [];
let numPart = 300;
let colors = ['#FF29C5','#D026E8','#B036FF', '#6726E8','#3729FF'];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    for (let i=0; i< numPart; i++){
        particles[i] = new Particle(random(width),20, random(0.1,1), colors[Math.floor(Math.random() *5)]);
    }
}

function draw() {
    background(0)

    for (let i=0; i< particles.length; i++){
         // External forces affects the particle acc.
        let wind = createVector(0.01,0);
        let gravity = createVector(0, 0.02 * particles[0].mass);

        if(mouseIsPressed) {
            particles[i].applyForce(wind);
        }
        
        particles[i].applyForce(gravity);
    
        // Particle i
        particles[i].createParticle();
        particles[i].updateParticle();
        particles[i].edges();    
    }
   
}

// Classes
class Particle {
    constructor(x,y,m,c){
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.color = c;
        this.mass = m;
    }

    createParticle() {
        noStroke()
;        fill(this.color);
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