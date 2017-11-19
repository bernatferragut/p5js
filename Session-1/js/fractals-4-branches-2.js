// Vars
let angle;
let generation;

// PS5
function setup() {
    //console.log('setup done');
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(100);    
    // angle of the branch
    // angle = PI/9;
    angle = map(mouseX, 0, width, 0, PI/2);
    stroke(255);
    // starting position
    translate(width/2, height);
    branch(200,1);
}

// Fractal function > using Transformations: push - pop
function branch(len, generation) {
  strokeWeight(map(generation, 1, 10, 4, 1 ));
  // draw the branch up
  line(0,0,0,-len);
  // transform the branch: go to the tip of it
  translate(0, -len);
  // shrink the branch
  len *= 0.66;
  // add generation
  generation ++;
  // exit condition
  if( len > 2 ) {
    push();
    rotate(angle);
    branch(len, generation);
    pop();
    rotate(-angle);
    branch(len, generation);
    //stroke(colorPicker(colors));
  }
}

// Colors utility
let colors =['#1FAB9E','#B1D781','#FAD02F','#F69229','#F16950'];
function colorPicker(colors, generation) {
    return colors[floor(random(0,5))];
    
}

// Rotation control