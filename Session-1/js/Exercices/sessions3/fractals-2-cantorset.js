// Fractals
let colors = ['#5B9496','#9AC0BA','#CCD9CE','#F6EDD3'];

function setup() {
    //console.log('setup has been set');
    createCanvas(window.innerWidth, window.innerHeight);
    let color = chooseColor(colors);
    background(color);    
}

function draw() {
    cantorSet(50,50,(width-100));
    noLoop();
}


// Line function
function cantorSet(x,y,len) {
    let h = 30;
    // recursive exit condition
    if( len >= 1) {
        stroke(255);
        strokeWeight(1);
        line(x,y,x + len,y);
        // Go downto next position
        y += h;
        // Draw 2 more lines 1/3 of the length, erase the middle one
        cantorSet(x,y,len/3);
        cantorSet(x + len * 2/3, y, len/3);
    }
    
}


// Color functionality
function chooseColor(colors) {
    return colors[Math.floor(random(0,4))];
    
}
