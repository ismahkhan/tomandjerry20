var garden , gardenImg;
var cat , catImg , catImg2 , catImg4;
var mouse , mouseImg , mouseImg2 , mouseImg4;
var gardenImg;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    catImg4 = loadImage("images/cat4.png");

    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png" );
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,600);
    cat.addAnimation("cat_sitting" , catImg);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouse_standing", mouseImg);
    mouse.scale = 0.2;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouse_happy" , mouseImg4 )
        mouse.changeAnimation("mouse_happy");
        cat.addAnimation("cat_happy" , catImg4)
        cat.changeAnimation("cat_happy");
        cat.velocityX = 0;
        cat.x = 300;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -4;
        cat.addAnimation("cat_moving" , catImg2);
        cat.changeAnimation("cat_moving");

        mouse.addAnimation("mouse_teasing" , mouseImg2);
        mouse.changeAnimation("mouse_teasing");
        mouse.frameDelay = 25;
    }

}
