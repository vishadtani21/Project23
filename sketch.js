var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1sprite, side2sprite, side3sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white";

	//create ur copy of engine n ur copy of world
	engine = Engine.create();
	world = engine.world;

	//first u create rectangular sprites and then u make their corresponding physics engine bodies

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	//creating the sprites for the three sides
	side1sprite= createSprite(width/2-50,height-90,20,100);
	side1sprite.shapeColor="red";

	side2sprite= createSprite(width/2,height-50,100,20);
	side2sprite.shapeColor="red";

	side3sprite= createSprite(width/2+50,height-90,20,100);
	side3sprite.shapeColor="red";

	
	//creating the physics engine bodies for the 3 sides
	 side1 = Bodies.rectangle(width/2-30, height-90, 20, 100 , {isStatic:true} );
	 World.add(world,side1);
	 
	 side2 = Bodies.rectangle(width/2, 630, 100, 20 , {isStatic:true} );
	 World.add(world,side2);

	 side3 = Bodies.rectangle(width/2+30, height-90, 20, 100 , {isStatic:true} );
	 World.add(world,side3);

	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  //keyPressed();  Calling a pre defined function like function preload( ) inside function draw ( ) isn't necessary

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(packageBody,false);
  
    
  }
}



