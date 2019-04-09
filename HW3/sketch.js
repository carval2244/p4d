
function setup() {
  
  var side = 600;
  createCanvas(side, side);
  yLocation=600;
}

function draw() {
 
  background(199,38,10+frameCount/2);
  colorMode(HSB);
  // Draw the bird
  push();
  noStroke();
  fill(18,80,100);
  yLocation = yLocation-1;
  ellipse(60,yLocation,120,120);
  
  pop();
  
  
 
  var ringWidth = width/60;
  
   // Draw clouds
  cloud(width/2, height/2, ringWidth);
  cloud(0, 0, ringWidth); 
  cloud(0, height, ringWidth)
  cloud(width, 0, ringWidth); 
  cloud(200,130, ringWidth); 
  cloud(470,500, ringWidth); 

  //Draw the paper plane
  paperPlane(mouseX,mouseY);
  
}
//function of the paper plane
function  paperPlane(x,y) {
  
  push();
  translate(x, y);
  noStroke();
  fill(48,100,100);
  triangle(0,0,30,10,18,18);
  triangle(0,0,12,22,-2,30);
  pop(); 
  
  push();
  translate(x, y);
  fill(38,100,100);
  noStroke();
  triangle(0,0,18,18,18,30);
  pop();
  
  push();
  translate(x, y);
  noFill();
  stroke(0);
  line(20,30,25,40);
  line(18,32,20,40);
  pop();
}
//function of the cloud
function cloud(x, y, ringWidth) {
  
  push();
  
  translate(x, y);

  circle(0, 0, ringWidth*8,ringWidth*11);
  circle(0, 0, ringWidth*20,ringWidth*8);
  circle(45, 0, ringWidth*7,ringWidth*9);
  circle(-45, 0, ringWidth*7,ringWidth*9);  
 
  pop();
}

// function of the circle
function circle(x, y, size1,size2) {
  
	push();
  
  noStroke();
  fill(0+frameCount/2);
  ellipse(x, y, size1,size2);
  
  pop();
}
