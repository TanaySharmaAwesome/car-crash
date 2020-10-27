var zenia,Tourus,Cyclap,wall1,wall2,wall3;

function setup() {
  createCanvas(800,400);

  wall1=createSprite(790,50,10,40);
  
  zenia=createSprite(20,50,20,20);
  zenia.velocityX=9;


  wall2=createSprite(790,200,10,40);

  Tourus=createSprite(20,200,20,20);
  Tourus.velocityX=9; 
  
  wall3=createSprite(790,350,10,40);

  Cyclap=createSprite(20,350,20,20);
  Cyclap.velocityX=9;


  console.log("zenia:deformation=(0.5 x 2260 x 60 x 60)/22500 = 180.           score:verybad")
  console.log("Tourus:deformation=(0.5 x 1522 x 50 x 50)/22500 = 84.           score:verygood")
  console.log("Cyclap:deformation=(0.5 x 3000	 x 45 x 45)/22500 = 134.           score:OK")

}

function draw() {
  background("black");  
  
  Tourus.shapecolor="blue";
  Cyclap.shapecolor="green";
  zenia.shapecolor="yellow";

  if (isTouching(zenia,wall1)){
    zenia.velocityX=0;
    Tourus.velocityX=0;
    Cyclap.velocityX=0;
  }

  drawSprites();
}