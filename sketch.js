var gameState= "start";
var backgroundImg;
var ground;
var penguin;
var ObstacleImg1, ObstacleImg2,  ObstacleImg3;
var penguin_walking, penguin_collided;


function preload(){
  penguin_walking = loadAnimation("P1.png","P3.png","P2.png","P3.png");
  penguin_collided = loadImage("");
  ObstacleImg1 = loadImage("Obstacle1.png");
  ObstacleImg2 = loadImage("Obstacle2.png");
  ObstacleImg3 = loadImage("Obstacle3.png");
  backgroundImg = loadImage("Antarctica.jpg");

}

function setup(){
 createCanvas(windowWidth,windowHeight);

 penguin = createSprite(50,200,20,20);
 penguin.addAnimation("walking",penguin_walking);
 penguin.scale = 0.5;
 

 ground = createSprite(300,280,1200,5);
 ground.velocityX = -1;
ground.x = ground.width/2 ;


              


}

function draw(){
background("white");
penguin.collide(ground);
if (ground.x<=0) {
  ground.x= ground.width/2
}
drawSprites()

}

