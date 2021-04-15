
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg = "sprites/bg1.png";
function preload(){
   
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
         
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    log1 = new Log(300, 100, 275, 20)



    bird = new Bird(200,180,25,25);
    bird1 = new Bird(250,180,25,25);
    bird2 = new Bird(300,180,25,25);
    bird3 = new Bird(350,180,25,25);
    bird4 = new Bird(400,180,25,25);

    
    slingshot = new SlingShot(bird.body,{x:200, y:100});
    slingshot1 = new SlingShot(bird1.body,{x:250, y:100});
    slingshot2 = new SlingShot(bird2.body,{x:300, y:100});
    slingshot3 = new SlingShot(bird3.body,{x:350, y:100});
    slingshot4 = new SlingShot(bird4.body,{x:400, y:100});

}

function draw(){
    background("white");
   
    Engine.update(engine);
    strokeWeight(4);

    ground.display()



    slingshot.display();
    slingshot1.display();
    slingshot2.display();
    slingshot3.display();
    slingshot4.display();

    bird.display();
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();


    log1.display()

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}






