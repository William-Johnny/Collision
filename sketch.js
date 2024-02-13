let world1TileDictionnary = {}
let world1Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,1,1,12,12,12,0],
  [0,12,12,12,12,2,12,12,12,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let world1TileSize = 64

let world2TileDictionnary = {}
let world2Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0],
  [0,12,12,1,1,12,12,12,12,12,12,12,1,1,12,12,12,0],
  [0,12,1,1,1,1,12,12,12,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let world2TileSize = 64
let currentWorld = 0

let worlds = [] 
let tileDictionnaries = []
let worldsTileSizes = []
let hero
let heroWidth = world1TileSize
let heroHeight = world1TileSize
let heroX = 3*world1TileSize
let heroY = 6*world1TileSize

// Appelée une fois
function setup() {
  createCanvas(world1Board[0].length*world1TileSize,world1Board.length*world1TileSize);
  world1TileDictionnary = { 
                    0: loadImage('assets/bord.jpg'),
                     12:loadImage('assets/ciel.jpg'),
                     1:loadImage('assets/herbe.jpg'),
                     2:loadImage('assets/pierre.jpg'),
                     3:loadImage('assets/lune.jpg')
                    }

  world2TileDictionnary = { 
                      0: loadImage('assets/bord.jpg'),
                       12:loadImage('assets/ciel.jpg'),
                       1:loadImage('assets/herbe.jpg'),
                       2:loadImage('assets/pierre.jpg'),
                       3:loadImage('assets/lune.jpg')
                      }

  hero = loadImage('assets/hero.jpg');
  worlds = [world1Board,world2Board]
  tileDictionnaries = [world1TileDictionnary,world2TileDictionnary]
  worldsTileSizes = [world1TileSize,world2TileSize]
}

function drawWorld(gameBoard,tileDictionnary,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      let currentImageName = tileDictionnary[currentTileValue];
      // Dessiner l'image
      image(currentImageName, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}


function checkCollision(gameBoard,tileSize) {

  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue===1) {
        if (rectIsInRect(heroX,heroY,x*tileSize-tileSize,y*tileSize-tileSize,tileSize*2,tileSize*2)) {
          return  true
        }
        
      }else if (currentTileValue===2) {
        if (rectIsInRect(heroX,heroY,x*tileSize-tileSize,y*tileSize-tileSize,tileSize*2,tileSize*2)) {
          return  true
        }
        
      }else if (currentTileValue===0) {
        if (rectIsInRect(heroX,heroY,x*tileSize-tileSize,y*tileSize-tileSize,tileSize*2,tileSize*2)) {
          return  true
        }
        
      }
    }
  }

}

var rectIsInRect = function(x,y,xP,yP,widthP,heightP){
  if ((x>xP) && (x<xP+widthP)){
     if ((y>yP) && (y<yP+heightP)){
            return true;
     }    
   }
    return false;
 
};

// Appelé en continue après le setup
function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    heroX -= 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
      heroX += 5;
    } 
  }

  if (keyIsDown(RIGHT_ARROW)) {
    heroX += 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
      heroX -= 5;
    } 
  }

  if (keyIsDown(UP_ARROW)) {
    heroY -= 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
      heroY += 5;
    } 
  }

  if (keyIsDown(DOWN_ARROW)) {
    heroY += 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
      heroY -= 5;
    } 
  }



  drawWorld(worlds[currentWorld],
            tileDictionnaries[currentWorld],
            worldsTileSizes[currentWorld]);
  
  image(hero, heroX, heroY, heroWidth, heroHeight);
  //background(20);
}
