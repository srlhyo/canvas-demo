// Helio Goncalves | November, 2018
// This is projects has only purpose to ciment
// knowledge acquired while watching and learning
// p5.js, through tutorials, by Daniel Shiffman (http://codingtra.in)

// Variables
let col = 0;
let fillCol = 255;

function setup() {
    createCanvas(400, 200);
}

function draw() {
    background(col);

    /* Objective: background and fill colors changing as mouse moves in the axis
      from one side to another of the canvas. 
  
      - background goes from 0 255
      - canvas goes from 0 600 wide 
      
      For better results, I am using map() to map out the background range values to 
      the mouseX range values */

    // Condition that prevents mouseX from being fired outside the Canvas
    if (mouseX > 0 && mouseX < 400 && mouseY < 200 && mouseY > 0) {
        col = map(mouseX, 0, 400, 0, 255);
        fillCol = map(mouseX, 0, 400, 255, 0);
    }

    // motivational text
    fill(fillCol);
    textSize(40);
    textAlign(CENTER);
    text("Super Fun", width / 2, height / 2);
}