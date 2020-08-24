
function setup() { createCanvas(1200,800);
     fixedRect=createSprite(400, 100, 50, 80); 
    fixedRect.shapeColor="green"; 
movingRect=createSprite(400,800,80,30);
 movingRect.shapeColor="green";
 fixedRect.debug=true; 
movingRect.debug=true;

//movingRect.velocityY= -5;
//fixedRect.velocityY= 5; 
}

function draw() {
     background(255,255,255); 
    movingRect.x=World.mouseX;
     movingRect.y=World.mouseY; 
    if( isTouching(fixedRect,movingRect)){
         movingRect.shapeColor = "brown";
         fixedRect.shapeColor = "brown"; 
        }
        else{ 
            movingRect.shapeColor = "green";
            fixedRect.shapeColor = "green";
             }


 console.log(fixedRect.width/2+movingRect.width/2); 
console.log(movingRect.x-fixedRect.x);
//bounceOff(movingRect,fixedRect); 
drawSprites();
} 
