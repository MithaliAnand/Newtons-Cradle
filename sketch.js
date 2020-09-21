
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof;
var bob1,bob2,bob3,bob4,bob5;

var rope1;
var bobDiameter;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
	
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	

	//Create the Bodies Here.
	
  
	bob1 = new Bob(220,650,bobDiameter);
	bob2=new Bob(298,650,bobDiameter);
	bob3=new Bob(380,650,bobDiameter);
	bob4=new Bob(455,650,bobDiameter);
	bob5=new Bob(530,650,bobDiameter);



	Roof= new roof(400,50,500,20);

	rope1= new Rope(bob1.body,Roof.body,-bobDiameter*2, 0);
	rope2=new Rope(bob2.body,Roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,Roof.body,0, 0)
	rope4=new Rope(bob4.body,Roof.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,Roof.body,bobDiameter*2, 0)
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  Roof.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}


