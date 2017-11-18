// P5JS
function setup() {
    //console.log('setup done');
    createCanvas(window.innerWidth, window.innerHeight);
    background(100);
}

function draw() {
    // angle of the branch
    angle = PI/4;
    // starting position
    translate(width/2, height);
    stroke(255);
    branch(200);
}

// Fractal function > using Transformations: push - pop
function branch(len) {    
  strokeWeight(1);
  // Draw the branch >  straight up!
  line(0,0,0,-len);
  // Transform the branch
  translate(0, -len);
  len *= 0.66;
  // Exit condition
  if( len > 1 ) {
    rotate(angle);
    branch(len);
  }
}

