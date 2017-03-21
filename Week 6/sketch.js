
// This sets up the document with specific rules.
// Assignment 2 - Use Variables as arguments for the drawing function.

// NO HARD-CODED VALUES OTHER THAN VARIABLES
var eyeSize = 25;
var LeyePosX = 140;
var LeyePosY = 175;
var Lxupdate = 4;
var Lyupdate = 5;
var ReyePosX = 260;
var ReyePosY = 175;
var Rxupdate = 5;
var Ryupdate = 4;

var emerald; // Hard-Coded Value (GRAY)
var skinBase = "aqua";
var faceParts = "purple";
var body = "blue";
var ears = "orange";
var earSize = 25;
var eyePosX = 140;
var eyePosY = 175;
var earX = 140;
var earY = 175;
var mouth = "red";
var leg = "red";
var lasereyes = "violet";

function setup(){
    
createCanvas(640, 500); //Picture size 500 x 500
noStroke(); //Shapes have no strokes, only fills
    
    emerald = color(46, 284, 113);
    
    // background(emerald); // Variable Value
fill(body);
ellipse (320, 250, 320, 250);
        
fill(skinBase);
rect(100, 100, 200, 200, 10);

fill(mouth); 
triangle(100, 250, 300, 255, 195, 270);
    
fill(ears);
triangle(100, 100, 200, 100, 150, 50);
    
fill(ears);
triangle(200, 100, 300, 100, 250, 50);

fill(leg); 
triangle(175, 400, 350, 425, 345, 380);
}
function draw(){

    
LeyePosX += Lxupdate;
LeyePosY += Lyupdate;
fill(lasereyes);
rect(LeyePosX, LeyePosY, eyeSize, eyeSize);
//eyePosX += 120;
    if(LeyePosX > width || LeyePosX <= 0){
        Lxupdate *= -1;
    }
     if(LeyePosY > height || LeyePosY <= 0){
        Lyupdate *= -1;
     }                          

ReyePosX += Rxupdate;
ReyePosY += Ryupdate;
fill(lasereyes);
rect(ReyePosX, ReyePosY, eyeSize, eyeSize);
//eyePosX += 120;

    if(ReyePosX > width || ReyePosX <= 0){
        Rxupdate *= -1;
    }
     if(ReyePosY > height || ReyePosY <= 0){
        Ryupdate *= -1;
     }                          
fill("pink")
ellipse(140, 175, eyeSize, eyeSize);
//eyePosX += 120;
    ellipse(260, 175, eyeSize, eyeSize);
//eyePosX += 120;
}