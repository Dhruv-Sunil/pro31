const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
var particles1 = []
var plinko1 = []
var divisions1 = []
var divH = 300
var score = 0
var ground1
function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world
 ground1=new ground(width/2,height, width,20)
 for (var k=0;k<=width;k=k+80){
divisions1.push(new divisions(k,divH/2,10,divH))

 }
 for (var j=75;j<=width;j=j+50){
plinko1.push(new plinko(j,75))

 }
 for (var j=50;j<=width-10;j=j+50){
  plinko1.push(new plinko(j,175))
  
   }


   for (var j=75;j<=width;j=j+50){
    plinko1.push(new plinko(j,275))
    
     }

     for (var j=50;j<=width-10;j=j+50){
      plinko1.push(new plinko(j,375))
      
       }





}

function draw() {
  background(255,255,255);
  Engine.update(engine)
 ground1.display()  
  for(var i=0;i<plinko1.length;i++){
plinko1[i].display()

  }
  if (frameCount%60===0){
particles1.push(new particles(random(width/2-30,width/2+30),10,10))
score++

  }
  for(var j=0;j<particles1.length;j++){
    particles1[j].display()
    
      }
      for(var k=0;k<divisions1.length;k++){
        divisions1[k].display()
        
          } 
}