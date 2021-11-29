const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var holder,ball;
var ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon, polygon_img;

var gamestate = "onSling";

///////////////////////////////////////////
function preload(){
  polygon_img=loadImage("polygon.png");
}

///////////////////////////////////////////
function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  polygon = new Polygon(40,40,20,20);
  slingshot = new Slingshot(polygon.body,{x:150,y:200});

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,210,10);
 
  //level one (blocks stand1)
    block101 = new Block(300,275,30,40);
     console.log(block101);
    block102 = new Block(330,275,30,40);
    block103 = new Block(360,275,30,40);
    block104 = new Block(390,275,30,40);
    block105 = new Block(420,275,30,40);
    block106 = new Block(450,275,30,40);
    block107 = new Block(480,275,30,40);
  //level one (blocks stand2)
    block201 = new Block(640,175,25,35);
    block202 = new Block(660,175,25,35);
    block203 = new Block(680,175,25,35);
    block204 = new Block(700,175,25,35);
    block205 = new Block(720,175,25,35);
    block206 = new Block(740,175,25,35);
    block207 = new Block(760,175,25,35);

  //level two (blocks stand1)
    block108 = new Block(330,235,30,40);
    block109 = new Block(360,235,30,40);
    block1010 = new Block(390,235,30,40);
    block1011 = new Block(420,235,30,40);
    block1012 = new Block(450,235,30,40);
  //level two (blocks stand2)
    block208 = new Block(650,135,25,35);
    block209 = new Block(675,135,25,35);
    block2010 = new Block(700,135,25,35);
    block2011 = new Block(725,135,25,35);
    block2012 = new Block(750,135,25,35);

  //level three (blocks stand1)
    block1013 = new Block(360,195,30,40);
    block1014 = new Block(390,195,30,40);
    block1015 = new Block(420,195,30,40);
  //level three (blocks stand2)
    block2013 = new Block(675,95,25,35);
    block2014 = new Block(700,95,25,35);
    block2015 = new Block(725,95,25,35);

  //top (blocks stand1)
    block1016 = new Block(390,155,30,40);
  //top (blocks stand2)
    block2016 = new Block(700,55,25,35);

}

///////////////////////////////////////////
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("white");
  text("Drag the polygon and release it",20,30);
  

  ground.display();

  polygon.display();
  
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);

  fill("skyblue");
   // (blocks stand1)
     block101.display();
     block102.display();
     block103.display();
     block104.display();
     block105.display();
     block106.display();
     block107.display();
   // (blocks stand2)
    block201.display();
    block202.display();
    block203.display();
    block204.display();
    block205.display();
    block206.display();
    block207.display();

  fill("pink");
   // (blocks stand1)
     block108.display();
     block109.display();
     block1010.display();
     block1011.display();
     block1012.display();
   // (blocks stand2)
     block208.display();
     block209.display();
     block2010.display();
     block2011.display();
     block2012.display();

  fill("turquoise");
   // (blocks stand1)
     block1013.display();
     block1014.display();
     block1015.display();
   // (blocks stand2)
     block2013.display();
     block2014.display();
     block2015.display();
  
  fill("grey");
   // (blocks stand1)
     block1016.display();
   // (blocks stand2)
    block2016.display();

  textSize(20);
  fill("white");
  text("Drag the polygon and release it");
}

//mouse functions
function mouseDragged(){
  if(gamestate!=="launch"){
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
 }

 function mouseReleased(){
  slingshot.fly();
  gamestate = "launch";

 }
