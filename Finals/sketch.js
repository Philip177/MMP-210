var x;
var y;
var speed = 15;
var eyeSize = 25;
var LeyePosX = 140;
var LeyePosY = 175;
var Lxupdate = 4;
var Lyupdate = 5;
var ReyePosX = 260;
var ReyePosY = 175;
var Rxupdate = 5;
var Ryupdate = 4;

var black; // Hard-Coded Value (GRAY)
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
var numSpaceships = 8;
var xPositions = [];
var yPositions = [];
var spaceshipSize = [];
var spaceshipSpeed = [];
var spaceshipColor = [];

var explodeShips = false;

function setup(){
x=random( 12, 72);
y=random( 24, 84);

createCanvas(640, 500); //Picture size 500 x 500
noStroke(); //Shapes have no strokes, only fills
    
    silver= color(179, 179, 179);
    
      for (var i = 0; i < numSpaceships; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        spaceshipSize[i] = random(20, 100);
        spaceshipSpeed[i] = random(0.1, 20);
        spaceshipColor[i] = color(
            random(0,255), 
            random(0,255), 
            random(0,255)
        );
    }
    var index =  floor(random(0, spaceshipColor.length));
    console.log(index);
    spaceshipColor[index]  = color("white");
}

function draw(){
    background("black");
    
    // monster
fill(body);
ellipse (320+x, 250+y, 320, 250);
        
fill(skinBase);
rect(100+x, 100+y, 200, 200, 10);

fill(mouth); 
triangle(100+x, 250+y, 300+x, 255+y, 195+x, 270+y);
    
fill(ears);
triangle(100+x, 100+y, 200+x, 100+y, 150+x, 50+y);
    
fill(ears);
triangle(200+x, 100+y, 300+x, 100+y, 250+x, 50+y);

fill(leg); 
triangle(175+x, 400+y, 350+x, 425+y, 345+x, 380+y);
    fill("pink")
ellipse(140+x, 175+y, eyeSize, eyeSize);
//eyePosX += 120;
    ellipse(260+x, 175+y, eyeSize, eyeSize);
//eyePosX += 120;
    
    
   // ship(mouseX, mouseY, 200);
 // spaceships
    for (var i = 0; i < numSpaceships; i++) {
        fill(spaceshipColor[i]);
        if (!explodeShips) {
           // ship(xPositions[i], yPositions[i], spaceshipSize[i]);
           
        } else {
            
        }
        explode(xPositions[i], yPositions[i]);
         xPositions[i] += spaceshipSpeed[i];
        if (xPositions[i] > width + spaceshipSize[i]/2) {
            xPositions[i] = -spaceshipSize[i]/2;
            yPositions[i] = random(0, height);
        }
    }

// laser eyes
if (mouseIsPressed){
    
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

}

}
function keyPressed() {
   if (keyCode == RIGHT_ARROW) {
        x += speed;   
   } else if (keyCode == LEFT_ARROW) {
       x -= speed;
   } else if (keyCode == DOWN_ARROW) {
       y += speed;
   } else if (keyCode == UP_ARROW) {
       y -= speed;
   }
}

function mouseReleased() {
    explodeShips = true;
}

var explode = function(x,y) {
    fill("red");
    ellipse(x, y, random(1, 50));
}

function ship(x, y, spaceshipWidth) {
    var spaceshipHeight = spaceshipWidth/4;
    var spaceshipWing = spaceshipWidth/3;
    var wingMargin = spaceshipWidth/10;
    var cockpitWidth = spaceshipWidth/3;
    
    
    
    // wing 1
    triangle(x, y - spaceshipWing, x, y + spaceshipHeight + spaceshipWing, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // wing 2
    triangle(x + wingMargin, y - spaceshipWing + wingMargin/2, x + wingMargin, y + spaceshipHeight + spaceshipWing - wingMargin/2, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // body
    rect(x, y, spaceshipWidth, spaceshipHeight);
    
    // cockpit
    triangle(x + spaceshipWidth, y, x + spaceshipWidth, y + spaceshipHeight, x + spaceshipWidth + cockpitWidth, y + spaceshipHeight/2);
    
    // window 
    ellipse(x + spaceshipWidth + cockpitWidth/4, y + spaceshipHeight/4, spaceshipHeight/2);
}