// logo
function setup(){
    
createCanvas(640, 480);
    background("lightblue");
    
// ts means text size
    var ts= 60;
    var linenumber = 1;
    
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
       
    rect(x, y +ts/2, greetingWidth, ts);
    text(greeting, x, y + ts*linenumber);
    linenumber = linenumber +1;
    text(intro, x, y + ts*linenumber);
    linenumber = linenumber +1;
    text(continued, x, y + ts*linenumber);
}