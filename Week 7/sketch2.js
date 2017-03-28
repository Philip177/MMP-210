// windows
function setup() {
createCanvas(640, 480);
	background("brown");
	
	stroke("darkblue");
	
	drawWindow(50, 10, 200, 400, 8);
    drawWindow(300, 100, 150, 200, 4);
     drawWindow(500, 150, 100, 100, 2);
}


var drawWindow = function(x, y, w, h, m) {
	noStroke();
	fill("lightblue");
	rect(x, y, w/3, h);
	
	fill("crimson");
	rect(x + w/3, y, w/3, h);
    
    fill("darkblue")
    rect(x + w*2/3, y, w/3, h);
	
	strokeWeight(m);
	stroke("purple");
	rect(x, y, w, h);
	
	stroke("darkred");
	strokeWeight(m/2);
    fill("green");
	rect(x + m, y + m, w/3 - 3*m, h/3);
	rect(x + m + w/3, y + m, w/3 - 3*m, h/3);
    rect(x + m + w*2/3, y + m, w/3 - 3*m, h/3);
	
	rect(x + m, y + 3*m + h/3, w/3 - 3*m, h/3 - 3*m);
	rect(x + m + w/3, y + 3*m + h/3, w/3 - 3*m, h/3 - 3*m);
    rect(x + m + w*2/3, y + 3*m + h/3, w/3 - 3*m, h/3 - 3*m);
    
	rect(x + m, y + 3*m + h*2/3, w/3 - 3*m, h/4 - 3*m);
	rect(x + m + w/3, y + 3*m + h*2/3, w/3 - 3*m, h/4 - 3*m);
    rect(x + m + w*2/3, y + 3*m + h*2/3, w/3 - 3*m, h/4 - 3*m);
}