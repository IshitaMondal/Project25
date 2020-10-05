
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper_ball;
var basket_leftside,basket_rightside,basket_bottomside;
var dusbinImg,paperImg;

//function preload(){
	//dustbinImg = loadImage("images/dustbingreen.png");
//}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700, 390, 1400, 20);	
	paper_ball = new Paper(100, 330, 70);
	basket_leftside = new Dustbin(1100, 310, 20, 100);
    basket_rightside = new Dustbin(1200, 310, 20, 100);
	basket_bottomside = new Dustbin(1150, 350, 100, 20);
	//paper_ball.debug();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.update(engine);
  ground.display();
  paper_ball.display();
  basket_leftside.display();
  basket_rightside.display();
  basket_bottomside.display();
 
  //image(dustbinImg, 1100, 260, 100, 100 );

   
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:85,y:-85});
	}
}


