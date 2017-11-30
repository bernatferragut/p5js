// JS

// Random letter => Method 1

let chars = ['A','B','C','D','E','F','G','H','I','K']; // 10 letters => 9 + A

function newChar() {
    let randNumber = Math.floor(Math.random() * 10); // returns an int between 0-9
    return chars[randNumber];
}

let randChar = newChar();

// Random letter => Method 2

function newChar2() {
    let randNumber = Math.floor(Math.random() * 25 + 65); // returns a random number between 65-90
    return String.fromCharCode(randNumber);
}

console.log(newChar2());