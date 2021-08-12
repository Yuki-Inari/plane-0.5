var sky,skyImg
var plane,planeImg
var bird, birdImg,birdsGroup
var gameState = "play"
function preload(){
skyImg = loadImage("sky-game-background-vector-21861325.jpg");
planeImg = loadImage("1a110764d92bdb614419b393f8fc1490.png");
birdImg = loadImage("download.png");

birdsGroup = new Group();
}
//avoide the birds as you play like a airoplane

function setup() {
createCanvas(600, 600);

sky = createSprite(300,300);
  sky.addImage("sky",skyImg);
  sky.velocityX = 1;

  plane = createSprite(500,200,50,50)
  plane.addImage(planeImg)
  plane.scale = 0.3

}

function draw() {
background(200);
if(gameState ==="play"){
  if(sky.x > 400){
    sky.x = 300
}
if(keyDown("up_arrow")){
  plane.y = plane.y-6
}
if(keyDown("down_arrow")){
  plane.y = plane.y+6
}

if(keyDown("left_arrow")){
  plane.x = plane.x-6
}

if(keyDown("right_arrow")){
  plane.x = plane.x+6
}
 
 if(birdsGroup.isTouching(plane)){
plane.destroy()
 }
   gameState = "end"
 }
 spawnbirds() 
drawSprites();

}
if(gameState === "end"){
  stroke("blue")
  fill("black")
  textSize(30)
  text("Game Over!",230,250)
}

function spawnbirds(){
    if (frameCount%240 ===0){
    
      bird = createSprite(20, 370)
    
      bird.scale = 0.3
    
      bird.y = Math.round (random(120,400))

      bird.addImage(birdImg)
     

   
      bird.velocityX = 4

      bird.lifetime = 800
 
      birdsGroup.add(bird)

      plane.depth = bird.depth
      plane.depth = plane.depth +1
    }
  }