//Variable declaration.
var chicken, chickenImg;
var monkey, monkeyImg;
var cow, cowIng;

var gameState = "PLAY";

function preload() {
  
}

function setup() {
  createCanvas(500, 500);
  
  monkey = createSprite(100, 450, 10, 10);
  monkey.shapeColor = "red";
  
  chicken = createSprite(250, 450, 10, 10);
  chicken.shapeColor = "yellow";
  
  cow = createSprite(400, 450, 10, 10);
  cow.shapeColor = "blue"
  
}

function draw() {
  
  if(gameState === "PLAY")
    {
      background(0);
  
      fill(200);
      textSize(13);
      text("Directions Order: up, down, right, left", 130, 50);
      text("Press 'space' to play", 170, 310);
      text("Player 1 (monkey)", 40, 470);
      text("Directions: arrow keys", 30, 485);
      text("Player 2 (chicken)", 200, 470);
      text("Directions: Operators", 190, 485);
      text("Player 3 (cow)", 360, 470);
      text("Directions: a,b,c,d", 350, 485);
      textSize(70);
      text("Crossy Road", 40, 275);
      
      if(keyDown("space"))
        {
          gameState = "END";
        }
    }
  
  /*if(gameState === "END");
  {
    background(255);
  }
  */
    drawSprites();
  
  }
