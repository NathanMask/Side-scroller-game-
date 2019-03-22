var person;
var sceneNum = 0; 

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
	if(key === ' '){
    var jump = createVector(0, -19)
    person.applyForce(jump);
  } else if (key=='q'){
  	sceneNum++;
  }
}

function draw() {
  if(sceneNum === 0){
    background(
      
      80,125,125);
    fill(155,300,400);
    textSize(20);
    text("Big Boys 2D(The Game)",230,150)
    fill(0,255,255)
    text("-Press Q To Start-",250,185);
    
  
  } else if (sceneNum === 1){
    background(51, 204, 255); 
    fill(255,255,255);
    ellipse(100,100,100,100);
    ellipse(125,125,100,100);
    ellipse(150,150,130,100);
    ellipse(95,95,100,100);
    ellipse(80,150,100,100);
    ellipse(145, 150, 126, 97);
    ellipse(107, 150, 70, 60);
    ellipse(218, 150, 70, 60);
    //sun
    fill(255,255,0);
    ellipse(500,50,200,200);
    
    translate(-person.pos.x,0);
    var gravity = createVector(0,1.2);
    person.applyForce(gravity);
    
    if(mouseIsPressed){
    var force = createVector(0.1,0);
    person.applyForce(force);
    }
    //translate(-person.pos.x,0);
      person.update();
    	person.edges();
      person.display();
    fill(255,0,100);
  	noStroke();
    for(var i = 500; i < 40000; i = i + 3500){
    fill(0,255,0);
      rect(i, height-220,100,50,10)
      rect(i+25, height-420,50,220,10);
      rect(i+1800, height-100,400,100,10);
      rect(i+2700, height-220,55,300,10); 
      rect(i+900, height-100,50,100,10);
      rect(i+900, height-400,50,55,10);
      fill(255, 242, 0);
    }

  } else {
    
    background(255, 255, 102);
    fill(0,255,0);
  
    text("You Finshed Big Boys2D(The Game)",150,150)
    
    
   
  }
    
}

