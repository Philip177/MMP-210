// windows
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background("#147f93");
    
    var ww = width/6; // window width
    var wh = height/3; // window height
    
    for ( var x = 0; x < width; x+=ww) {
       for (var y = 0; y < height; y+=wh){ 

    
        
           fill("lightblue");
           rect(x,y, ww/2, wh/2);
        
            fill("brown");
            rect(x, y+20, ww/2, wh/2);
           
           fill("lightgreen");
            rect(x, y+35, ww/2, wh/2);
           
           fill("black");
            rect(x, y+75, ww/2, wh/2);
           
            fill("silver");
            rect(x, y+45, ww/2, wh/2);

    
        }
    }
}