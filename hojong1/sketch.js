function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  if(mouseIsPressed){
    rect(mouseX, mouseY, 70, 70);
    fill(0, 255, 0);
  }
  else{
    ellipse(mouseX, mouseY, 50, 50);
    fill(0, 255, 255);
  }
}
