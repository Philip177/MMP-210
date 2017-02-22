function setup(){
createCanvas(640,480);
line(55,25,70,800);
background('green');
fill('blue')
//    two points, numbers in (x1, y1, x2, y2)
    //head
    ellipse(300,300,600);
    //eyes
fill('#f4d85d')

    ellipse(150, 230, 150, 75);
     ellipse(450, 230, 150, 75);
    
    //nose
    triangle(270, 75+325, 298, 20+325, 326, 75+325);
    
    strokeWeight(10);
    stroke("silver");
    line(100,450,380,450);
}