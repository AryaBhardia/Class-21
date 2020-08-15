var fixedRect, movingRect;

var rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(800, 400, 50 ,80);
  rect4 = createSprite(100,400, 80, 30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect3.velocityX = -5;
  rect4.velocityX = 5;
}

function draw() {
  background(0,0,0);  

  bounceOFF(fixedRect,movingRect);
  bounceOFF(rect3,rect4);

  drawSprites();
}

