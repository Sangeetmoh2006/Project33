const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;
var boyImg;

function preload() {
  snowImg = loadImage("snow2.jpg");
  boyImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1200,1000);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  boy = createSprite(700, 600);
  boy.addImage("boy", boyImg);
}

function draw() {
  background(snowImg);
  Engine.update(engine);
  drawSprites();
}