
var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivaltime=0;
var score=0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(windowWidth, windowHeight); 
monkey=createSprite(100,250,30,30);
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2;
  
    foodGroup=createGroup();
  obstacleGroup=createGroup();
  
  ground=createSprite(200,320,600,20);
  ground.x=ground.width/2;
}


function draw() {
background("white");
  if(ground.X<0){
    ground.x=ground.width/2;
  }
  
 stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivaltime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8;

  food();
obstacles();
  
  monkey.collide(ground);
  drawSprites();
}
function food() {
   if (frameCount % 80 === 0) {
     banana = createSprite(600,110,40,10);
   banana.y = Math.round(random(100,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  foodGroup.add(banana);
    }
}


function obstacles() {
   if (frameCount % 300 === 0) {
     obstacle = createSprite(600,270,40,10);
  
   obstacle.addImage( obstacleImage);
     obstacle.scale = 0.2;
  obstacle.velocityX = -6;
   obstacle.lifetime = 200;
   obstacleGroup.add( obstacle);
    }
}
