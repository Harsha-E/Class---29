const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var bg;
var offf, qwerty;
var box1, box2 , box3, box4 , box5;
var Bird1, pigg , pigg2, logg , logg2, logg3 , logg4;
var ground1, platform;
var constrainedLog;


function preload(){

  bg = loadImage('images/bg.png');

}

function setup() {
  /*
  
  constrainedLog = new log(100, 100, 150, PI/2);
    
  constrainedLog.display();

  var chainoptions = {

    bodyA : Bird1.body,
    bodyB : constrainedLog.body,
    length: 20,
    stiffness: 0.2
    
   }
  
  var chain = Matter.Constraint.create(chainoptions);
  World.add(qwerty, chain);
  */
 
 createCanvas(900,700);
  
  offf = Engine.create();
  
  qwerty = offf.world;

  Bird1 = new bird(130,300);

  pigg = new pig(620,645);

  pigg2 = new pig(620,575);

  box1 = new box(500,650, 60,  60);
  
  box2 = new box(750,650, 60,  60);

  box3 = new box(500, 560, 60,  60);
  
  box4 = new box(750, 560, 60,  60);
  
  box5 = new box(625, 480, 60,  60);
  
  logg = new log(625, 590 , 315 , PI / 2 );

  logg2 = new log(625, 515 , 315 , PI / 2 );

  logg3 = new log(550, 490 , 140 , PI / 4 );

  logg4 = new log(715, 490 , 140 , -PI / 4 );
  
  platform = new ground(100, 570, 200, 150);

  ground1 = new ground(375,670, 1050, 65);

  SlingShot1 = new S_Shot(Bird1.body, {
    x : 140,
    y : 330,
  });

}

function draw() {
  background(bg);

console.log(mouseX +":X , Y:" + mouseY );

  Engine.update(offf);

  box1.display();
  
  box2.display();
  
  box3.display();
  
  box4.display();

  box5.display();
  
  pigg.display();

  pigg2.display();
  
  logg.display();
  
  logg2.display();

  logg3.display();
  
  logg4.display();
  
  platform.display();

  ground1.display();

  Bird1.display();

  SlingShot1.display();
}

function mouseDragged(){

  Matter.Body.setPosition(Bird1.body, {

    x : mouseX,
    y : mouseY,

  })
}

function mouseReleased(){

  SlingShot1.fly();

}