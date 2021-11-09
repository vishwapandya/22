const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine;
var myworld;
var ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;
  
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);

  
  rectMode(CENTER);
}


function draw() 
{
  background("purple");
  Engine.update(myengine);
  
  
  rect(ground.position.x,ground.position.y,400,20);
 
}
