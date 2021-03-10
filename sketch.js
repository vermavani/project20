var cat,cat1I,cat2I,cat3I,cat4I;
var mouse,mouse1I,mouse2I,mouse3I,mouse4I;


function preload() {
    //load the images here
    gardenI = loadImage("garden.png")
    cat1I = loadImage("cat1.png")
    cat2I = loadAnimation("cat2.png","cat3.png")
    cat4I = loadAnimation("cat4.png")
   
    mouse1I = loadAnimation("mouse1.png","mouse2.png")
    mouse2I = loadImage("mouse2.png")
    mouse3I = loadAnimation("mouse3.png")
    mouse4I = loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(800,800);
   //create background
    garden = createSprite(300,200)
    garden.addImage(gardenI)
    garden.scale = 1.2;

    //create tom and jerry sprites here
     cat= createSprite(700,400)
     cat.addImage(cat1I)
     cat.scale = 0.18;

     mouse = createSprite(100,400)
     mouse.addImage(mouse2I)
     mouse.scale = 0.15;
    
}

function draw() {
 
     background(250);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x<(cat.width-mouse.width/2)){
         
        cat.addAnimation("ending",cat4I)
        cat.changeAnimation("ending")
        cat.velocityX = 0;

        mouse.addAnimation("stop",mouse4I)
        mouse.changeAnimation("stop")
      
     }

    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
   cat.velocityX = -2;
   cat.addAnimation("catRunning",cat2I)
   cat.changeAnimation("catRunning")
   mouse.addAnimation("teasing",mouse1I)
   mouse.changeAnimation("teasing")
 }

}
