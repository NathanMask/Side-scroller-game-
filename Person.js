function Person () {
  this.pos = createVector(10,250);
  this.vel = createVector(3, 0);
  //change value of X to 1 to get it moving
  this.acc = createVector(1,0)
  this.mass = 11;
 	this.applyForce = function(force) {
  	this.acc.add(force);
 }
  
  this.update = function() {  
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    fill(175,242,179);
    stroke(255);
    ellipse(this.pos.x+23, this.pos.y-20, this.mass*5, this.mass*5);
    fill(230,75,215);
    rect(this.pos.x, this.pos.y, this.mass*4, this.mass*10);
 		
  }
   this.edges = function() {
  if (this.pos.y > 250) {
   this.vel.y *= 0;
    this.pos.y = 250;
  }
   }
		}
