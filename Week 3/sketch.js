// logo
function setup(){
    
createCanvas(640, 480);
    background("lightblue");
    
// ts means text size
    var ts= 60;
    var linenumber = 1;
    
    var skinbase = ("yellow");
    fill(skinbase);
    ellipse (320, 250, 320, 250);
    
     var skinbase = ("yellow");
    fill(skinbase);
    ellipse (113, 421, 150, 167);
    
     var skinbase = ("yellow");
    fill(skinbase);
    ellipse (558, 120, 50, 43);
    
    fill(skinbase);
    ellipse (601, 267, 32, 124);
    
    fill(skinbase);
    ellipse (22, 89, 395, 90);
    
    var lavaLampColor = ("purple");
    noFill();
    stroke(lavaLampColor);
    strokeWeight(30);
    ellipse (320, 240, 640, 1500);
    fill("white");
    
    textSize(ts);
    textFont("Moncaco");
    textAlign(CENTER);
    
    noStroke();
    //rect(320, 240, 78, 12);
    
    var y = 10;
    var x = 320;
    
    var greeting = "PJC, welcomes you!";
    var greetingWidth = textWidth(greeting);
    rectMode(CENTER);
    var intro = "Where all your dreams";
    var continued = "burn with passion.";
    var ending =  "© symbol"
       
    rect(x, y +ts/2, greetingWidth, ts);
    fill("black")
    text(greeting, x, y + ts*linenumber);
    linenumber = linenumber +1;
    text(intro, x, y + ts*linenumber);
    linenumber = linenumber +1;
    text(continued, x, y + ts*linenumber);
    linenumber = linenumber +1;
    text(ending, x, y + ts*linenumber + 200); 
    
}