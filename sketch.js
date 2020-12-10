
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ball1;
var top1;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	top1=new top(400,25,500,35);
	//Create the Bodies Here.
	ball1=new ball(400,400,20,20);
	
  
}


function draw() {
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  ball1.display();
  top1.display();
  
  
 
}



