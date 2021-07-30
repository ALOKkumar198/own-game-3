var zombie,zombieImg;
var zombie2,zombie2Img;
var zombie3,zombie3Img;
var zombie4,zombie4Img;

function preLoad(){
  zombieImg=loadImage("zombie1-removebg-preview.png");
  zombie2Img=loadImage("zombie2-removebg-preview.png");
  zombie3Img=loadImage("zombie3-removebg-preview.png");
  zombie4Img=loadImage("zombie4-removebg-preview.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

zombie=createSprite(200,200);
zombie.addImage(zombieImg);

zombie2=createSprite(200,100);
zombie2.addImage(zombie2Img);

zombie3=createSprite(200,250);
zombie3.addImage(zombie3Img);

zombie4=createSprite(200,140);
zombie4.addImage(zombie4Img);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}