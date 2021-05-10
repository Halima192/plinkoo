const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 

  var engine,world;
  var particle;
  var divisions=[];
var divisionHeight=300;
  var score =0;
var particles = [];
var plinkos = [];
var gameStste="PLAY";
var count=0;
var score=0;
var line;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   */
text("500",15,550)
text("500",90,550)
text("500",170,550)

text("300",250,550)
text("300",340,550)

text("200",430,550)
text("200",500,550)
text("200",580,550)

text("100",650,550)
text("100",730,550)

if(particles!=null){
 particles.display();
  if(particles.body.position.y>760){
    if(particles.body.position.x<200){
      score=score+500
      particles=null;
    }
    else if(particles.body.position.x>240&&particles.body.position.x<420){
      score=score+300
      particles=null;
    }
    else if(particles.body.position.x>420&&particles.body.position.x<590){
      score=score+200
      particles=null;
    }
    else if(particles.body.position.x>640&&particles.body.position.x<740){
      score=score+100
      particles=null;
    }
    
  }
  

}
   ground.display();

}

function mousePressed(){
  particles=new Particle(mouseX,10,10,10,10)
}
