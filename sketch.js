var zenia,Tourus,Cyclap,wall1,wall2,wall3;
var spped, weight;


function setup() {
  createCanvas(1000,400);

  wall1=createSprite(790,50,10,40);
  
  zenia=createSprite(20,50,20,20);
  zenia.velocityX=9;


  wall2=createSprite(790,200,10,40);

  Tourus=createSprite(20,200,20,20);
  Tourus.velocityX=9; 
  
  wall3=createSprite(790,350,10,40);

  Cyclap=createSprite(20,350,20,20);
  Cyclap.velocityX=9;

  speed1=random(65,105);
  speed2=random(65,105);
  speed3=random(65,105);

  weight1=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);


}

function draw() {
  background("black");  
  
  zenia.velocityX=speed1;
  Tourus.velocityX=speed2;
  Cyclap.velocityX=speed3;

  Tourus.shapecolor="blue";
  Cyclap.shapecolor="green";
  zenia.shapecolor="yellow";

  if (wall1.x-zenia.x<(zenia.width+wall1.width)/2){
    zenia.velocityX=0;

    var deformation =0.5*weight1*speed1*speed1/25509;

    if (deformation>180){
       zenia.shapeColor="red";
    }

    if (deformation<180 && deformation>100){
      zenia.shapeColor="yellow";
   }

   if (deformation<100){
    zenia.shapeColor="green";
   }
  }

  if (wall2.x-Tourus.x<(Tourus.width+wall2.width)/2){
    Tourus.velocityX=0;

    var deformation =0.5*weight2*speed2*speed2/25509;

    if (deformation>180){
      Tourus.shapeColor="red";
    }

    if (deformation<180 && deformation>100){
      Tourus.shapeColor="yellow";
   }

   if (deformation<100){
    Tourus.shapeColor="green";
   }
  }

  if (wall2.x-Cyclap.x<(Cyclap.width+wall2.width)/2){
    Cyclap.velocityX=0;

    var deformation =0.5*weight3*speed3*speed3/25500;

    if (deformation>180){
      Cyclap.shapeColor="red";
    }

    if (deformation<180 && deformation>100){
      Cyclap.shapeColor="yellow";
   }

   if (deformation<100){
    Cyclap.shapeColor="green";
   }
  }  

  drawSprites();
}