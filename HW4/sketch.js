let x = 100;
let y = 100;
let value = 0;

function setup() {
  createCanvas(550, 550);

  
}

//draw the black retangles
function retangle(){
     push();
  fill(0);
  rect(85,0,50,100);
  rect(270,370,250,100);
  rect(415,370,20,100);
  rect(0,500,600,15);
  rect(315,500,15,15)
  pop();
     
}

// draw the moving circle
  function movingcircle(){
    push();
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  strokeWeight(5);
  ellipse(x, y, 100, 100);
  pop();
  }

//draw the world 
 function keyworld(){
   push();
  textSize(30);
  textFont('poppins');
   fill(0);
  text(key, 240, 305); // Display last key pressed.
   pop();
 }

//draw the repeating rectangles on the left
  function repeat1(){
    
  var numberOfRectangles= 0;   
  var xl=140;
  var yl=280;
  var xw=5;
  var xh=100;
    noFill();
  strokeWeight(1);
   while( numberOfRectangles <= 10 )
   {
   rectMode(CENTER);
     rect(xl,yl,xw,xh);
     
    xw= xw +15;
    xh= xh+15;
     
   numberOfRectangles++;
    
   }
  }

//set the mouse press
function mousepress(){
  fill(0);
  if (mouseIsPressed) {
    ellipse(550, 0, 250, 250);
  } else {
    rect(550, 0, 250, 200);
  }
}

    function draw(){

// set keyboard input
    if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  movingcircle();
  retangle();
  repeat1();
  keyworld();
  mousepress();
    
      
//Move the mouse across the page to change the triangles's fill value     
       
   fill(value);
   ellipse(75,140,10);
   ellipse(90,140,10);
   ellipse(105,140,10);
   ellipse(120,140,10);
      ellipse(135,140,10);
}
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
    
  }


}