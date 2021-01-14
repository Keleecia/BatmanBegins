const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;
var rain = [];
var rainSecond = [];
var i= 0;
var umbrellas;
var man, theMan;
var randomLightning;
var L1,L2,L3,L4;
var lightning;


function preload()
{
    man = loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png");
    L1 = loadImage("images/1.png");
    L2 = loadImage("images/2.png");
    L3 = loadImage("images/3.png");
    L4 = loadImage("images/4.png");

}

function setup(){

    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);

    umbrellas = new Umbrella(210,360);
    theMan = createSprite(200,450,300,400);
    theMan.addAnimation("man walk",man);
    theMan.scale = 0.6;

}

function draw(){

    Engine.update(engine);
    
    background("black"); 
   
    

   

if(frameCount%200 === 0)
{
  randomLightning = Math.round(random(1,5));
}
else
{
    randomLightning = 0;
}
    
     switch(randomLightning)
     {

    case 0:

     break;

     case 1:
        lightning = image(L1,190,-25,300,300);
     break;
           
     case 2:
        lightning = image(L2,190,-25,300,300);
     break;
               
     case 3:
        lightning = image(L3,190,-25,300,300);
     break;
            
      case 4:
        lightning = image(L4,190,-25,300,300);
      break;
     }



    for ( var m = 0; m < rain.length; m++)
    {
      rain[m].display();
    }

    for ( var l = 0; l < rainSecond.length; l++)
    {
        rainSecond[l].display();
    }


    if(frameCount%30 === 0)
    {
    for (var k =0; k <= width; k = k +Math.round(random(1,200) ))
    {
      rain.push(new Drops(k,-20));
    }


    
  
    if(frameCount%10 === 0)
    {
    for (var p =0; p <= width; p = p +Math.round(random(1,200) ))
    {
      rainSecond.push(new Drops(p,-20));
    }
    }
}

    drawSprites();
}   