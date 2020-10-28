const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
    myWorld = myEngine.world;
var options={
  isStatic:true
}
    
var options2 = {
  restitution:1.0
}

    ground=Bodies.rectangle(200,390,200,20,options);
    World.add(myWorld,ground);

    ball=Bodies.circle(200,200,30,options2);
    World.add(myWorld,ball);
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}