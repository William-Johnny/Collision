//import ('/Users/william-johnguenon/Documents/Goblin/Projet Final/Collision/world2.js');
// import ('world2.js');

// console.log(world2Board);

let world1TileDictionnary = {}

let worldtestBoard = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,0,0,0,0,0,0,0,0,0,0],
]
let world1TileSize = 64

let world1Decoration = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,12,2.1,2.2,12,12,12,3.1,3.2,3.3,0],
  [0,"porte2",12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,12,12,12,12,12,12,12,12,12,0],
  [0,"4.1",12,12,12,12,"5.7","5.5","5.3","5.1",0],
  [0,"4.2",12,12,"porte",12,"5.8","5.6","5.4","5.2",0],
  [0,0,0,0,0,0,0,0,0,0,0],
]

let deskDecoration = [
  [12,12,12,12,12,12,12,12,12],
  [12,3.1,3.2,3.3,12,12,12,12],
  [12,3.4,3.5,3.6,12,12,12,12],
]

let PandC = [
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
  [12,12,12,12,12,12,12,12,12,12,12],
]

let bedDecoration = [
  [12,12,12,12,12,12,12,12,12],
  [12,1,3,5,7,12,12,12],
  [12,2,4,6,8,12,12,12],
]

// let world1Decoration = [
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,2.1,2.2,12,12,12,3.1,3.2,3.3,12,0],
//   [0,"porte",12,12,12,12,3.4,3.5,3.6,12,0],
//   [0,12,12,12,12,12,12,12,12,12,0],
//   [0,12,12,12,12,12,12,12,12,12,0],
//   [0,"4.1",12,12,12,12,12,12,12,12,0],
//   [0,"4.2",12,12,"porte",12,12,12,12,12,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ]

let world1Collision = [
  [1,1,1,1,1,1,1,1,1,1,1],
  [1,0,2,2,0,0,0,3,3,3,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,2,0,0,0,0,4,4,4,4,1],
  [1,2,0,0,0,0,4,4,4,4,1],
  [1,1,1,1,1,1,1,1,1,1,1],
]
let world1CollisionTileSize = 64
let worldDecorationTileSize = 64
let deskDecorationTileSize = 128


let currentFrontWorld=1
let currentWorld = 0;
let worlds = [];
let tileDictionnaries = [];
let worldsTileSizes = [];
let hero;
let heroWidth = world1TileSize;
let heroHeight = 100;
let heroX = 3*world1TileSize;
let heroY = 5*world1TileSize;
let txt = false;
let tile = 0;

// Appelée une fois
function setup() {
  createCanvas(worldtestBoard[0].length*world1TileSize,worldtestBoard.length*world1TileSize);
  
  worldtestTileDictionnary = { 
    0: createImage(1,1),
     12:loadImage('assets/Tuiles/Sol/Sol2.png'),
     2:loadImage('assets/pierre.jpg'),
     3:loadImage('assets/lune.jpg')
  }
  worldDecorationTiles = { 
    0: loadImage('assets/bord.jpg'),
    12:createImage(1,1),
    13:loadImage('assets/leaves.png'),
    2:loadImage('assets/trunk.png'),
    3.1:loadImage('assets/Tuiles/Meuble/Bureau/Vue de haut/gauche.png'),
    3.2:loadImage('assets/Tuiles/Meuble/Bureau/Vue de haut/milieu.png'),
    3.3:loadImage('assets/Tuiles/Meuble/Bureau/Vue de haut/droit.png'),
    2.1:loadImage('assets/Tuiles/Meuble/Commode/Vue de haut/g.png'),
    2.2:loadImage('assets/Tuiles/Meuble/Commode/Vue de haut/d.png'),
    "4.1":loadImage('assets/Tuiles/Meuble/biblio/Vu de haut/biblio haut 2@4x.png'),
    "4.2":loadImage('assets/Tuiles/Meuble/biblio/Vu de haut/biblio haut@4x.png'),
    "porte":loadImage('assets/Tuiles/Porte/Vue de haut/vue de haut-21.png'),
    "porte2":loadImage('assets/Tuiles/Porte/Vue de haut/vue de haut-22.png'),
    
    "5.1":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut g_1@4x.png'),
    "5.2":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut g@4x.png'),
    "5.3":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut m@4x.png'),
    "5.4":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut m_3@4x.png'),
    "5.5":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut m_2@4x.png'),
    "5.6":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut m_1@4x.png'),
    "5.7":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut d_1@4x.png'),
    "5.8":loadImage('assets/Tuiles/Meuble/Lit/Vue de haut/vue haut d@4x.png'),
  }

  bedDecorationTiles = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit haut g@4x.png'),
    2:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit bas g@4x.png'),
    3:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit haut m-g@4x.png'),
    4:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit bas m-g@4x.png'),
    5:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit haut m@4x.png'),
    6:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit bas m@4x.png'),
    7:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit haut m-d@4x.png'),
    8:loadImage('assets/Tuiles/Meuble/Lit/Point & click/lit bas m-d@4x.png'),
  }

  deskDecorationTiles = { 
    12: createImage(1,1),
    3.1:loadImage('assets/Tuiles/Meuble/Bureau/point and click/gauche h.png'),
    3.4:loadImage('assets/Tuiles/Meuble/Bureau/point and click/gauche b.png'),
    3.2:loadImage('assets/Tuiles/Meuble/Bureau/point and click/milieu h.png'),
    3.5:loadImage('assets/Tuiles/Meuble/Bureau/point and click/milieu b.png'),
    3.3:loadImage('assets/Tuiles/Meuble/Bureau/point and click/droite h.png'),
    3.6:loadImage('assets/Tuiles/Meuble/Bureau/point and click/droite b.png'),
  }
  

  PandCTiles = {
    12:loadImage('assets/Tuiles/Mur/mur base@4x.png'),
  }
  hero = loadImage('assets/hero.png');
  // worlds = [world1Board,world2Board,worldDecoration]
  // tileDictionnaries = [world1TileDictionnary,world2TileDictionnary,worldDecorationTiles]
  // worldsTileSizes = [world1TileSize,world2TileSize,worldDecorationTileSize]
  worlds = [worldtestBoard,world1Decoration,PandC,deskDecoration,bedDecoration]
  tileDictionnaries = [worldtestTileDictionnary,worldDecorationTiles,PandCTiles,deskDecorationTiles,bedDecorationTiles]
  worldsTileSizes = [world1TileSize,world1CollisionTileSize,worldDecorationTileSize,deskDecorationTileSize,deskDecorationTileSize]
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
      // if (currentTileValue===1 || currentTileValue===0) {
      //   if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
      //     return  true
      //   } 
      // }else if (currentTileValue===2) {
      //   if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
      //     txt=true;
      //     return  true
      //   } 
      // }
      if (currentTileValue===1) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          return  true
        } 
      }
      
      if (currentTileValue===3 || currentTileValue===4) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          txt = true;
          tile=currentTileValue;
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

const checkKeys = (currentMap)=>{
    // if (keyIsDown(LEFT_ARROW)) {
    //   heroX -= 5;
    //   if (checkCollision(world1Collision,world1CollisionTileSize)) {
    //     heroX += 5;
    //   } 
    // }
  
    // if (keyIsDown(RIGHT_ARROW)) {
    //   heroX += 5;
    //   if (checkCollision(world1Collision,world1CollisionTileSize)) {
    //     heroX -= 5;
    //   } 
    // }
    
    // if (keyIsDown(UP_ARROW)) {
    //   heroY -= 5;
    //   if (checkCollision(world1Collision,world1CollisionTileSize)) {
    //     heroY += 5;
    //   } 
    // }

    // if (keyIsDown(DOWN_ARROW)) {
    //   heroY += 5;
    //   if (checkCollision(world1Collision,world1CollisionTileSize)) {
    //     heroY -= 5;
    //   } 
    // }

  if (keyIsDown(LEFT_ARROW)) {
    heroX -= 5;
    if (checkCollision(world1Collision,world1CollisionTileSize)) {
      heroX += 5;
    } 
  }

  if (keyIsDown(RIGHT_ARROW)) {
    heroX += 5;
    if (checkCollision(world1Collision,world1CollisionTileSize)) {
      heroX -= 5;
    } 
  }
  
  if (keyIsDown(UP_ARROW)) {
    heroY -= 5;
    if (checkCollision(world1Collision,world1CollisionTileSize)) {
      heroY += 5;
    } 
  }

  if (keyIsDown(DOWN_ARROW)) {
    heroY += 5;
    if (checkCollision(world1Collision,world1CollisionTileSize)) {
      heroY -= 5;
    } 
  }
  
}

// Appelé en continue après le setup
function draw() {
  checkKeys(currentWorld);
  drawWorld(worlds[currentWorld],
            tileDictionnaries[currentWorld],
            worldsTileSizes[currentWorld]);
  if (currentWorld!=2 && currentFrontWorld!=3) {
    image(hero, heroX, heroY, heroWidth, heroHeight);
  }
  drawFront(worlds[currentFrontWorld],
    tileDictionnaries[currentFrontWorld],
  worldsTileSizes[currentFrontWorld]);
  
  

  if (txt) {
    textSize(22);
    fill('white');
    text("M to interact", 370, 200);
    if (keyIsDown(UP_ARROW) && keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
    if (keyIsDown(LEFT_ARROW)&& keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
  
    if (keyIsDown(RIGHT_ARROW)&& keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
  
    if (keyIsDown(DOWN_ARROW)&& keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
    txt = false;
  }
  
  
  //background(20);
}


