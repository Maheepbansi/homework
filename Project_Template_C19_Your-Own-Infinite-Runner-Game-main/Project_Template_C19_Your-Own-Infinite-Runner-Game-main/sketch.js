var penguin
var ocean,oceanimg
var penguinimg_1,penguinimg_2,penguinimg_3,penguinimg_4, 
penguinimg
var shark
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    oceanimg = loadImage("ocean.png");
    penguinimg = loadAnimation("penguin-1.png",
"penguin-2.png","penguin-3.png","penguin-4.png" );
  gameoverimg=loadAnimation("GameOver.png")


}

function setup() {
  createCanvas(400,600);
  
    
    penguin = createSprite(70,580,20,20);
    penguin.addAnimation("penguin",penguinimg);
    penguin.scale = 0.08;


 
}

function draw() {
  background(oceanimg)
 if(gameState===PLAY){
        penguin.x = World.mouseX;
        edges= createEdgeSprites();
        penguin.collide(edges); 
        if(ocean.y > 400 ){
            ocean.y = height/2;
          }

 if(shark.isTouching(penguin)){
    gameState=END;
    penguin.destory();

 }         
           
        
 }        
   drawSprites();   
}