var apple,head,body;
var appleimg,headimg;
var appleGroup;

var dots=3;
const snakelen=100;
var gameState = 0;
const DELAY =3000;
var k=2;

var x = [];
var y = [];
var wWidth;
var wHeight;

function preload()
{
  appleimg =loadImage("Apple.png");
  headimg =loadImage("Head1.png");
  bodyimg =loadImage("Body1.png");

}


function setup() {
	createCanvas(windowWidth, windowHeight);
  wWidth=windowWidth;
  wHeight=windowHeight;
  
  // head = createSprite(100, 100);
  // head.scale = 0.1;
  // head.addImage(headimg);
  
  // body= createSprite(100, 110);
  // body.addImage(bodyimg);
  createSnake();
  drawSnake();
 
  appleGroup = new Group();
  //apple = createSprite(round(windowWidth/2), round(windowHeight/2),10,10);
  apple = createSprite(300, 300,10,10);
   apple.scale = 0.05;
   apple.addImage(appleimg);
   appleGroup.add(apple);
   gameState=0;
    //stroke(3);
  // line(apple.x-10,270,apple.x+10,270);

}


function draw()
{

  background("white");
  stroke(3);
  //line(apple.x-10,apple.y-10,apple.x-10,apple.y+10);
 //line(apple.x-10,apple.y-10,apple.x+10,apple.y-10);
 fillStyle = 'white';
 font = 'normal bold 100px serif';
 text('SCORE '+ (dots-3), windowWidth-100,40);


  if (gameState==0)
  {
  createSnake();
  //setTimeout("drawSnake()", DELAY);
  drawSnake();
  gameState=1;
  k=2;
  }

  if(gameState==1)
  {
    //setTimeout("moveSnake()", DELAY);
    moveSnake();
    //setTimeout("drawSnake()", DELAY);
    drawSnake();
     }



if(gameState !== 2)
{
  // var r = Math.floor(Math.random() * 29);
  // apple_x = r * 10;

  // r = Math.floor(Math.random() * 29);
  // apple_y = r * 10;
  // //apple_x = 
  // //apple_y =
  //if ((x[0]==apple.x) && (y[0]==apple.y))


//  if ((x[0] > (apple.x-10)) &&(x[0] <(apple.x+10))&&(y[0] > (apple.y-10))&&(y[0] < (apple.y+10)))
if (isTouching(x[0],y[0],apple))
  
   {
    console.log("Got Apple ")
    
    dots=dots+1;
    createApple();
    console.log(dots);
    console.log(x);
    console.log(y);
  }
}
// console.log(x[0]);
// console.log(y[0]);
// console.log(apple.x);
// console.log(apple.y);


  if((x[0]<0) || (y[0]<0) ||(x[0]>=windowWidth) || (y[0]>=windowHeight))
  {
   // console.log("Game End:: Collision")
    appleGroup.destroyEach();
    fillStyle = 'white';
    font = 'normal bold 25px serif';
    text('Game over', windowWidth/2, windowHeight/2);
    gameState=2;
  }
 
  drawSprites();
}



function keyPressed()
{
    if((keyCode === LEFT_ARROW) && (k!== 2)) {
    k=1;
    //console.log("left key pressed")
  }

  if((keyCode === RIGHT_ARROW) && (k!== 1)) {
    k=2;
    //console.log("Right key pressed")
  }

  if((keyCode === UP_ARROW) &&(k!== 4)) {
    k=3;
    //console.log("Up key pressed")
  }

  if((keyCode === DOWN_ARROW) && (k!== 3)) {
    k=4;
    //console.log("Down key pressed")
  }

}
 

function createApple(){
  
  appleGroup.destroyEach();
  apple = createSprite(Math.round(random(100, wWidth-100)),Math.round(random(100, wHeight-100)),10,10);
  apple.addImage(appleimg);
  apple.scale=0.05;
  //apple.lifetime = 150;
  appleGroup.add(apple);
  }

  function createSnake() 
  {
    dots = 3;
    for (var z = 0; z < dots; z++) {
        x[z] = 50 - z * 10;
        y[z] = 50;

      }
  } 


function drawSnake()
{

  for (var z = 0; z < dots; z++) 
  {      
    if (z == 0) {
        image(headimg, x[z], y[z]);
    } else {
        image(bodyimg, x[z], y[z]);
    }
    
  } 
  //setTimeout(function () { console.log(""); }, 2000);  
//await sleep(5000) ;
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function moveSnake() {

  for (var z = dots; z > 0; z--) 
  {
    x[z] = x[(z - 1)];
    y[z] = y[(z - 1)];
  }

  if (k==1)
  {
  x[0]    =x[0] - 10;
  }

  if (k==2)
  {
  x[0]    =x[0] + 10;
  }

  if (k==3)
  {
  y[0]    =y[0] - 10;
  }
  
  if (k==4)
  {
  y[0]    =y[0] + 10;
  }

  // console.log(x[0]);
  // console.log(y[0]);
}  

function isTouching(xx,yy,object2){
  if (xx - object2.x < 10/2 + 10/2
    && object2.x - xx < 10/2 + 10/2
    && yy - object2.y < 10/2 + 10/2
    && object2.y - yy < 10/2 + 10/2) {
    
    return true;
  }
  else {
    return false;
  } 
}