// Vars
let angle;
let gen;

// PS5
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);    
    angle = PI/4;
    stroke(255);
    translate(width/6, height/1.5); //moves the (0,0) coord.
    stockA(350,1);
}

// Fractal function > using Transformations: push - pop

function stockA(len, gen) {
    // colors
    strokeWeight(map(gen, 0,8,4,0));
    stroke(colors[gen%5])
    // line1
    rotate(angle);
    line(0,0,0,-len);
    translate(0,-len);
    push();
    // line2
    rotate(-angle*2);
    line(0,0,0,len);
    pop();
    translate(0,len);
    rotate(-angle);
    // add gen
    gen ++;
    // exception escape
    if(len >2) {
        stockA(len/2,gen)
    }

}

// Colors utility
let colors =['#1FAB9E','#B1D781','#FAD02F','#F69229','#F16950'];
function colorPicker(colors, generation) {
    return colors[floor(random(0,5))];
    
}