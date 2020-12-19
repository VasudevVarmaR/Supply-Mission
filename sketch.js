var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1,wall2,wall3;
var leftSide,rightSide,bottomSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1=Bodies.rectangle(275,610,20,100,{isStatic:true});
	World.add(world,wall1);
 
	wall2=Bodies.rectangle(375,650,200,20 , {isStatic:true});
	World.add(world,wall2);

	wall3=Bodies.rectangle(475,610,20,100, {isStatic:true});
	World.add(world,wall3)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rightSide=createSprite(wall1.position.x,wall1.position.y,20,100);
  rightSide.shapeColor="red";

  bottomSide=createSprite(wall2.position.x,wall2.position.y,200,20);
  bottomSide.shapeColor="red";

  leftSide=createSprite(wall3.position.x,wall3.position.y,20,100);
  leftSide.shapeColor="red";


  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();
}
function keyPressed()
 {
 if (keyCode === DOWN_ARROW)                                                                    
 {
	Matter.Body.setStatic(packageBody,false);
 }
}



