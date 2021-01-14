var knife,knifeImage;
var fruits,fruit1,fruit2,fruit3,fruit4;
var monsters,monstersImage;


var PLAY=1
var END=2
var gameState=1
var gameOver


function preload(){
 
  knifeImage = loadImage("sword.png")
 
  fruits1 = loadImage("fruit1.png")
  fruits2 = loadImage("fruit2.png")
  fruits3 = loadImage("fruit3.png")
  fruits4 = loadImage("fruit4.png")
  
  monstersImage = loadImage("alien1.png")
  
  gameOver = loadImage("gameover.png")
  
}

function setup(){
  
 createCanvas(600,600)
  
  knife = createSprite(40,200,20,20)
  knife.addImage("knife",knifeImage)
  knife.scale=0.7;
  
  score=0;
  fruitGroup= new Group();
  monsterGroup= new Group();
  
  knife.setCollider("rectangle",0,0,40,40);
    
  }
  
function draw(){
 background(200)
  
  fruits();
  monsters();
  
  knife.y=World.mouseY;
  knife.x=World.mouseX;
 
  if (fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      score=score+2
      }
  
  if (monsterGroup.isTouching(knife)){
      gameState=END;
      }
  
  if (gameState === END){
     fruitGroup.destroyEach();
    monsterGroup.destroyEach();
    fruitGroup.setVelocityXEach=0;
     monsterGroup.setVelocityXEach=0;
    
    knife.addImage("knife",gameOver)
     knife.y=200;
  knife.x=200;
  }
  
  
  
  
  
  drawSprites();
  
  text("score :"+ score,300,30)
  
}

function fruits(){
  
   if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20) 
     fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
     if (r == 1){
       fruit.addImage(fruits1)
     } else if (r == 2){
       fruit.addImage(fruits2)
     } else if (r == 3){
       fruit.addImage(fruits3)
     } else if (r == 4){
       fruit.addImage(fruits4)
     }
     
     fruit.y=Math.round(random(50,340));
     
     fruit.velocityX=-7;
     fruit.setlifetime=100;
     
     fruitGroup.add(fruit);    
   } 
  
  
}

  function monsters(){
    
    if(World.frameCount %200===0){
    monster = createSprite(400,200,20,20)  
    monster.addAnimation("moving", monstersImage)
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
      
    monsterGroup.add(monster);   
    }
       
  }  