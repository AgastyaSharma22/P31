const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles=[];
var plinko=[];
var division=[];

var divisionHeight=300;

function setup() {
  engine = Engine.create();
  world = engine.world
  createCanvas(480,500);
  ground=new Ground(240,450,500,50);
}

function draw() {
  Engine.update(engine);
  background(0,240,70);  
  ground.display();
  
 
}

for(var j=40;j<=Plinko.width;j=j+50){
  plinko.push(new Plinko(j,75));
}
for(var j=15;j<Plinko.width-10;j=j+50){
  plinko.push(new Plinko(j,175));
}

for(var k=0; k<=Division.width; k=k+80){
  division.push(new Division(k,Division.height-divisionHeight/2,10,divisionHeight));
}

for(var k=0; k<division.height; k++){
  division[k].display();
}
for(var j=0;j<plinko.length;j++){
  plinko[j].display();
}