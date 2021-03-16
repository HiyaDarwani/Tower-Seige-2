const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	  world = engine.world;
    
    //Ground
    ground = new Ground(600,height,1200,40);

    //Stand
    stand = new Ground(450, 300, 350, 10);

    //Blocks-1
    block1 = new Block(330, 235, 40, 50)
    block2 = new Block(370, 235, 40, 50)
    block3 = new Block(410, 235, 40, 50)
    block4 = new Block(450, 235, 40, 50)
    block5 = new Block(490, 235, 40, 50)
    block6 = new Block(530, 235, 40, 50)
    block7 = new Block(570, 235, 40, 50)

    //Block-2
    block8 = new Block1(370, 190, 40, 50)
    block9 = new Block1(410, 190, 40, 50)
    block10 = new Block1(450, 190, 40, 50)
    block11 = new Block1(490, 190, 40, 50)
    block12 = new Block1(530, 190, 40, 50)

    //Block-3
    block13 = new Block(410, 140, 40, 50)
    block14 = new Block(450, 140, 40, 50)
    block15 = new Block(490, 140, 40, 50)
    
    //Block-4
    block16 = new Block1(450, 100, 40, 50)

    //Polygon
    polygon = new Polygon(100, 50, 60, 60)

    //SlingShot
   slingShot = new Chain(polygon.body, {x:95, y:250})

	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Black");


  drawSprites();
 ground.display();
 stand.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 polygon.display();
 slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}



