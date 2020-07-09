const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,20);
	ground=new Ground(width/2,650,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dustbin.display();
  
  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	 } }



