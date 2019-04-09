
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	
	push();
	noStroke();
	fill(252,224,203);
	ellipse(200,150,110,150);
	pop();
	
	push();
	noStroke();
	fill(0,0,0);
	arc(200,100,140,120,HALF_PI+QUARTER_PI,QUARTER_PI,PIE);
	rect(130,100,25,120);
	rect(245,100,25,120);
	
	ellipse(177,150,10,10);
	ellipse(221,150,10,10);
	pop();
	
	push();
	stroke(243,205,162);
	strokeWeight(4);
	line(195,175,205,175);
  line(195,165,195,175);
  pop();
  
 noFill();
  stroke('rgb(100%,0%,10%)');
strokeWeight(4);
  arc(200,190,30,20,0,3.14,OPEN);

		
	
	
}