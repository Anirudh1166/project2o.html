var movingrect
var fixedrect
                   


function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(600,400,50,80)
  fixedrect.shapeColor="blue";
movingrect=createSprite(400,200,80,30);
movingrect.shapeColor="lightblue"
}

function draw() {
  background(255,255,255);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&  
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingect.height/2
  

  
  ){




  fixedrect.shapeColor="lightgreen";
  movingrect.shapeColor="lightgreen"



}
else{




  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow"





}

  drawSprites();}
































































