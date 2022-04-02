const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimage
var cannonbase
var cannon
var tower,towerimage
var angle
var cannonball
var balls = []
var boats = []
function preload() {
 backgroundimage = loadImage("assets/background.gif")
 
 towerimage = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 cannon = new Cannon(180,110,130,100,angle)

}

function draw() {
  image(backgroundimage,0,0,width,height)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 push()
 imageMode(CENTER) 
 image(towerimage,tower.position.x,tower.position.y,160,310)
 pop()  
 showboats()
 for(var i = 0;i<balls.length;i++){
   showcannonball(balls[i],i)
 }
 cannon.display()
}
function keyReleased(){
  if(keyCode == DOWN_ARROW){
    cannonball = new Cannonball(cannon.x,cannon.y)
    balls.push(cannonball)
    balls[balls.length-1].shoot()
  }
}
function showcannonball(ball,i){
if(ball){
  ball.display()
}
}
function showboats(){
  if(boats.length>0){
    if(boats[boats.length-1]==undefined||boats[boats.length-1].body.position.x<width-300){
      var positions = [-40,-60,-70,-20]
      var position = random(positions)
      var boat = new Boat(width,height-100,170,170,position)
      boats.push(boat)
    }
    for(var i = 0;i<boats.length;i++){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0})
        boats[i].display()
      }
    }
  }
  else{
    var boat = new Boat(width,height,-60,170,170,-60)
    boats.push(boat)
  }
}