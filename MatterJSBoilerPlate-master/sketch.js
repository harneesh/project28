
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boyImg, boy, treeImg, tree, mango1, mango2, mango3, mango4, mango5, stone;
var launcher;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 690, 1200, 10);

	boy = createSprite(200, 620);
	boy.addAnimation("boy", boyImg);
	boy.scale = 0.1;

	mango1 = new Mango(800, 300);
	mango2 = new Mango(700, 300);
	mango3 = new Mango(800, 350);
	mango4 = new Mango(900, 300);
	mango5 = new Mango(700, 200);


	tree = createSprite(800, 400);
	tree.addAnimation("tree", treeImg);
	tree.scale = 0.5;

	stone = new Stone(130, 550);

	launcher = new Launcher(stone.body,{x:130, y:550});
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();
  stone.display();
  launcher.display();
 
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function detectollision() {
	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance<-mango1.r+stone.r) {
		Matter.Body.setStatic(mango1.body, false);
	}

}



