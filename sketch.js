const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, ball, engine, world;


function setup() {
  createCanvas(400, 400);
  engine = Matter.Engine.create();
  world = engine.world
var groundoption= {
  isStatic:true
} 

var balloption ={
  restitution : 1
}

  ground = Bodies.rectangle(200, 390, 400, 10,groundoption);
  ball = Bodies.circle(200,270,30,balloption);
  console.log(ball.position);
  World.add(world,ground);
  World.add(world,ball);
  
  
}

function draw() {
  background(67, 24, 90);
  Engine.update(engine);
  ellipseMode(CENTER)
  rectMode(CENTER)

  ellipse(ball.position.x,ball.position.y,30,30);
  rect(ground.position.x,ground.position.y, 400, 10);
  
}