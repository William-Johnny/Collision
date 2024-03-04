let world1TileDictionnary = {}
let world1Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,1,1,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let world1TileSize = 64

let world2TileDictionnary = {}
let world2Board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,2,12,12,12,12,12,12,12,12,0],
  [0,12,12,3,3,12,12,12,12,12,12,12,3,3,12,12,12,0],
  [0,12,3,3,3,3,12,12,12,3,3,3,3,3,3,3,3,0],
  [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let world2TileSize = 64

let worldDecoration = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,12,3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,13,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,2,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]
let worldDecorationTileSize = 64

let currentWorld = 1

let worlds = [] 
let tileDictionnaries = []
let worldsTileSizes = []
let hero
let heroWidth = world1TileSize
let heroHeight = world1TileSize
let heroX = 3*world1TileSize
let heroY = 6*world1TileSize
let txt = false

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
                       12:loadImage('assets/grass.png'),
                       2:loadImage('assets/rock.png'),
                       3:loadImage('assets/water.png'),
                      }
  
  worldDecorationTiles = { 
                        0: createImage(1,1),
                        12:createImage(1,1),
                        13:loadImage('assets/leaves.png'),
                        2:loadImage('assets/trunk.png'),
                        3:createImage(1,1),
                        1:createImage(1,1)
                        }

  hero = loadImage('assets/hero.png');
  worlds = [world1Board,world2Board,worldDecoration]
  tileDictionnaries = [world1TileDictionnary,world2TileDictionnary,worldDecorationTiles]
  worldsTileSizes = [world1TileSize,world2TileSize,worldDecorationTileSize]
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

function drawFront(gameBoard,tileDictionnary,tileSize) {
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
      if (currentTileValue===1 || currentTileValue===0) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          return  true
        } 
      }else if (currentTileValue===2) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          txt=true;
          return  true
        } 
      }
    }
  }

}

var pointIsInRect = function(x,y,xR,yR,widthR,heightR){
  if ((x>=xR) && (x<=xR+widthR)){
     if ((y>=yR) && (y<=yR+heightR)){
            return true;
     }    
   }
    return false;
 
};

function rectIsInRect(xP,yP,wP,hP,xR,yR,wR,hR){
  // Arrivée par la gauche
  if (xP + wP > xR){
    if (pointIsInRect(xP+wP, yP + hP/2,xR,yR,wR,hR)) {
      print("Par la gauche et le centre");
      return true;
    }
    if (pointIsInRect(xP+wP, yP,xR,yR,wR,hR)){
      print("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xP+wP, yP + hP,xR,yR,wR,hR)){
      print("Par la gauche et le haut");
      return true;
    }
    
    
  }

  // Arrivée par la droite
  if (xP < xR + wR){
    if (pointIsInRect(xP, yP + hP/2,xR,yR,wR,hR)){
      print("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xP, yP + hP,xR,yR,wR,hR)){
      print("Par la droite et le haut");
      return true;
    }
    if (pointIsInRect(xP, yP,xR,yR,wR,hR)){
      print("Par la droite et le bas");
      return true;
    }
    
  }

   // Arrivée par le bas
   if (yP < yR + hR){

    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      print("Par la bas et le centre : Effet tête du personnage qui passe sur la maison");
      return true;
    }

    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      print("Par la bas et la gauche");
      return true;
    }
    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      print("Par le bas et la droite");
      return true;
    }
   }

   // Arrivée par le haut
   if (yP + hP > yR){
    if (pointIsInRect(xP + wP / 2, yP+hP,xR,yR,wR,hR)){
      print("Par le haut et le centre");
      return true;
    }
    
    if (pointIsInRect(xP, yP+hP, xR,yR,wR,hR)){
      print("Par le haut et la gauche");
      return true;
    }
    if (pointIsInRect(xP + wP, yP+hP,xR,yR,wR,hR)){
      print("Par le bas et la droite");
      return true;
    }
   }

};

// function keyPressed() {
//   if (keyCode === UP_ARROW){
//     heroY -= 64;
//     setTimeout(() => {
//       heroY += 64;
//       if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
//         heroY -= 64;
//       } 
//     }, 500);
//     if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld])) {
//       heroY += 64;
//     } 
//   }
// }

const checkKeys = (currentMap)=>{
  if (currentMap===0) {
    if (keyIsDown(LEFT_ARROW)) {
      heroX -= 5;
      if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
        heroX += 5;
      } 
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      heroX += 5;
      if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
        heroX -= 5;
      } 
    }
  
  }else if (currentMap===1) {
    if (keyIsDown(LEFT_ARROW)) {
      heroX -= 5;
      if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
        heroX += 5;
      } 
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      heroX += 5;
      if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
        heroX -= 5;
      } 
    }
    
    if (keyIsDown(UP_ARROW)) {
    heroY -= 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
      heroY += 5;
    } 

    if (keyIsDown(UP_ARROW) && keyIsDown(77)) {
      currentWorld=0
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    heroY += 5;
    if (checkCollision(worlds[currentWorld],worldsTileSizes[currentWorld]) || checkCollision(worlds[2],worldsTileSizes[2])) {
      heroY -= 5;
    } 
  }
  }
  
  
}

// Appelé en continue après le setup
function draw() {
  checkKeys(currentWorld);
  drawWorld(worlds[currentWorld],
            tileDictionnaries[currentWorld],
            worldsTileSizes[currentWorld]);
  
  image(hero, heroX, heroY, heroWidth, heroHeight);
  
  if (currentWorld===1) {
    drawFront(worlds[2],
    worldDecorationTiles,
    worldsTileSizes[2]);
  }

  if (txt) {
    textSize(22);
    fill('white');
    text("M to interact", 370, 200);
    txt = false;
  }
  
  
  //background(20);
}


