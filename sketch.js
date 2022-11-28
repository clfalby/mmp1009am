var
tree=0;
seethru=255;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(205,tree,225);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(2);
  fill(255,150,127,seethru); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),75,75); // center of canvas, 20px dia
  fill(132,mouseX,mouseX);
  stroke(71,122,189);
  strokeWeight(5);
  rect(100,120,tree,tree);
  fill(116,10,57,seethru);
  strokeWeight(0);
  ellipse(mouseX,mouseY,20,20);
  stroke(0);
  strokeWeight(3);
  line(tree,5,100,tree);
  
 
}

function mousePressed(){
  if (tree>=300){
    tree=0
  }else{
    tree=tree+5;
  }
 ellipse=rect;

  seethru=seethru-10;
}
