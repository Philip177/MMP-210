// This sets up the document with specific rules.
// Assignment 2 - Use Variables as arguments for the drawing function.

// NO HARD-CODED VALUES OTHER THAN VARIABLES

function setup(){
    
createCanvas(640, 500); //Picture size 500 x 500
noStroke(); //Shapes have no strokes, only fills

var emerald = color(46, 284, 113); // Hard-Coded Value (GRAY)
var skinBase = color("aqua");
var faceParts = color("purple");
var body = color("blue");
var ears = color("orange");
var eyeSize = 25;
var eyePosX = 140;
var eyePosY = 175;
var earSize = 25;
var earX = 140;
var earY = 175;
var mouth = color("red");
var leg = color("red");


background(emerald); // Variable Value
fill(body);
ellipse (320, 250, 320, 250);
    
fill(skinBase);
rect(100, 100, 200, 200, 10);
    
    
fill(faceParts);
ellipse(eyePosX, eyePosY, eyeSize, eyeSize);
eyePosX += 120;
ellipse(eyePosX, eyePosY, eyeSize, eyeSize);

fill(mouth); 
triangle(100, 250, 300, 255, 195, 270);
    
fill(ears);
triangle(100, 100, 200, 100, 150, 50);
    
fill(ears);
triangle(200, 100, 300, 100, 250, 50);

fill(leg); 
triangle(175, 400, 350, 425, 345, 380);
}