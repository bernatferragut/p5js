// Fractals
let colors = ['#5B9496','#9AC0BA','#CCD9CE','#F6EDD3'];

function setup() {
    //console.log('setup has been set');
    createCanvas(window.innerWidth, window.innerHeight);
    let color = chooseColor(colors);
    background(color);    
}

function draw() {
    circle(width/2, height/2, 700);
}


// Circle function
function circle(x, y, d) {
    noFill();
    ellipse(x, y, d, d);
    // we call ourselves to create the fractal
    // we need to set up a recursive limit to control infinity
    if ( d > 2) {
        circle(x + d/2 , y, d/2);
        circle(x - d/2 , y, d/2);
    }
}


// Color functionality
function chooseColor(colors) {
    return colors[Math.floor(random(0,4))];
    
}