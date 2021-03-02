var fixedRect,movingRect;

function setup()
{
  createCanvas(600,600);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(300,200,50,50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
 
  gameObject1=createSprite(100,300,50,50);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(200,300,50,50);
  gameObject2.shapeColor="blue";
  gameObject3=createSprite(300,300,50,50);
  gameObject3.shapeColor="blue";
  gameObject4=createSprite(400,300,50,50);
  gameObject4.shapeColor="blue";
}

function draw()
{
  background("gold");

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(istouching(movingRect,gameObject3))
  {
    gameObject3.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else
  {
    gameObject3.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  drawSprites();

}

