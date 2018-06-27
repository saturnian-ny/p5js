var plant;
var value;
var isOverImage;

function preload(){
  plant = loadImage("assets/oval_low.png");
}

function setup(){
  createCanvas(700, 700);
}

function draw(){
  background(200);

// if (mouseX >=plant.좌측상단 && mouse X <=우측상단 && mouseY >= 좌측하단 && mouseY <= 우측하단){
// }

  translate(width/2, height/2);
  rotate(value);
  imageMode(CENTER);
  image(plant, 0, 0);
}

function mousePressed(){
  value = (radians(frameCount));
}
