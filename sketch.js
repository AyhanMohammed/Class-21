
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options = {
		restitution: 0.3,
		density: 1.2

	}

	ball = Bodies.circle(200,100,15,ball_options);
	World.add(world,ball);

	ground =new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,15);
  ground.show();
  leftSide.show();
  rightSide.show();

 

  
  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.8})
	}
}


