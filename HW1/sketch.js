//Erika Mesh Jiahua Li
//IGME-609 Project1
//self-portrait
//Jan.27,2019
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
	
  //hair
	push();
	noStroke();
	fill(0,0,0);
  ellipse(300,150,200,200);
  ellipse(220,270,110,90);
  ellipse(380,270,110,90);
  rect(200,150,40,100);
  rect(360,150,40,100);
	pop();
  
  
  //face
  push();
	noStroke();
	fill(255,255,255);
	ellipse(300,200,145,180); 
	pop();
  
  push();
	noFill();
	stroke(0,0,0);
  strokeWeight(7);
  arc(255,195,60,60,3.8,5.4,OPEN); //eyebrow
  arc(330,195,60,60,3.14,4.71,OPEN); //eyebrow
  line(299.5,198,299.5,225); //nose
  arc(260,190,30,30,0.785,2.355,OPEN); //eye
  arc(337,190,30,30,0.785,2.355,OPEN); //eye
  arc(300,235,40,40,0.785,2.355,OPEN); //mouth
	pop();
  
  push();
  noStroke();
	fill(0,0,0);
  ellipse(254,233,32,32);  //blush
  ellipse(345,233,32,32);  //blush
  arc(335,113,120,110,0.785,3.925,OPEN); //bangs
  pop();
  
  
  //cloth
  push();
  stroke(0,0,0);
  strokeWeight(7);
  fill(255,0,0);
  arc(300,400,280,200,3.14,0,CHORD);
  pop(); 
  
  push();
	noStroke();
	fill(0,0,0);
  arc(276,300,45,50,0.3,3.14,OPEN); //collar
  arc(318,300,45,50,0,2.84,OPEN); //collar
  ellipse(298,335,10,10); //buttom
  ellipse(298,360,10,10); //buttom
  ellipse(298,385,10,10); //buttom
	pop();
  
  //ears
  push();
	noStroke(); 
  ellipse(222,200,25,35);
  ellipse(378,200,25,35);
	pop();
  
  
  //earrings
  push();
  noStroke();
  fill(0,0,255);
  beginShape();  //blue earings
  vertex(378,210);
  vertex(386,218);
  vertex(382,224);
  vertex(374,224);
  vertex(370,218);
  endShape();
  
  beginShape(); //blue earings
  vertex(222,210);
  vertex(230,218);
  vertex(226,224);
  vertex(218,224);
  vertex(214,218);
  endShape();
  pop();
  
  push();
  noStroke();
  fill(255,255,0);
  ellipse(222,230,10,10);//yellow earrings
  ellipse(378,230,10,10);//yellow earrings
  pop();
  
  //shapes for cropping the hair
  push();
	noStroke(); 
  arc(164,186,90,140,4.71,1.57,OPEN); 
  arc(436,186,90,140,1.57,4.71,OPEN);
  ellipse(300,303,80,15);
	pop();
  
  
 
}