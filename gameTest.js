//import ('/Users/william-johnguenon/Documents/Goblin/Projet Final/Collision/world2.js');
// import ('world2.js');

// console.log(world2Board);

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
  [12,12,12,12,12,12,12,12],
  [12,3.1,3.2,3.3,12,12,12],
  [12,3.4,3.5,3.6,12,12,12],
]

let bilioDecoration = [
  [12,1,2,12],
  [12,3,4,12],
  [12,5,6,12],
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
  [1,0,6,6,0,0,0,3,3,3,1],
  [1,7,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,5,0,0,0,0,4,4,4,4,1],
  [1,5,0,0,0,0,4,4,4,4,1],
  [1,1,1,1,1,1,1,1,1,1,1],
]

let world1TileSize = 64
let world1CollisionTileSize = 64
let worldDecorationTileSize = 64
let biblioDecorationTileSize = 170
let bedDecorationTileSize = 170
let deskDecorationTileSize = 140

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

let side = 80;
let y1 = 270;
let x1 = 125;
let w1 = 50;
let h1 = 80;
let ry2 = 50;
let img;
let bool = true;
let bookDisplayed = false;
let bookOpened = false;
let zoneAvailable = true;

let fade;
let fadeAmount = 1;
let page = 1;
let opening=true

canvasHeight = worldtestBoard.length*world1TileSize;
canvasWidth = worldtestBoard[0].length*world1TileSize

function preload(){
  img2 = loadImage('assets/Subject.png');
  img3 = loadImage('assets/openBook.png');
  img4 = loadImage('assets/key.png');
}
// Appelée une fois
function setup() {
  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.center();
  
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

  biblioDecorationTiles = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/biblio/point & click/gauche h.png'),
    2:loadImage('assets/Tuiles/Meuble/biblio/point & click/droit h.png'),
    3:loadImage('assets/Tuiles/Meuble/biblio/point & click/gauche m.png'),
    4:loadImage('assets/Tuiles/Meuble/biblio/point & click/droit m.png'),
    5:loadImage('assets/Tuiles/Meuble/biblio/point & click/gauche b.png'),
    6:loadImage('assets/Tuiles/Meuble/biblio/point & click/droit b.png'),
  }
  

  PandCTiles = {
    12:loadImage('assets/Tuiles/Mur/mur base@4x.png'),
  }
  hero0 = loadImage('assets/hero.png');
  hero1 = loadImage('assets/hero1.png');
  currentHeroImage=hero0;
  // worlds = [world1Board,world2Board,worldDecoration]
  // tileDictionnaries = [world1TileDictionnary,world2TileDictionnary,worldDecorationTiles]
  // worldsTileSizes = [world1TileSize,world2TileSize,worldDecorationTileSize]
  worlds = [worldtestBoard,world1Decoration,PandC,deskDecoration,bedDecoration,bilioDecoration]
  tileDictionnaries = [worldtestTileDictionnary,worldDecorationTiles,PandCTiles,deskDecorationTiles,bedDecorationTiles,biblioDecorationTiles]
  worldsTileSizes = [world1TileSize,world1CollisionTileSize,world1TileSize,deskDecorationTileSize,bedDecorationTileSize,biblioDecorationTileSize]

  img2.resize(200,0);
  img3.resize(400,0);
  img4.resize(150,0)

  textSize(25)
  fade = 1
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
      
      if (currentTileValue===3 || currentTileValue===4 || currentTileValue===5) {
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
  if (currentFrontWorld===1) {
    if (keyIsDown(LEFT_ARROW)) {
      currentHeroImage=hero1;
      heroX -= 5;
      if (checkCollision(world1Collision,world1CollisionTileSize)) {
        heroX += 5;
      } 
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      heroX += 5;
      currentHeroImage=hero0;
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
}

let pointIsInObjective = function(Nb1,Nb2,x,y,w,h){
  if ((x>Nb1) && (x<Nb1+w)){
     if ((y>Nb2) && (y<Nb2+h)){
         return true;
     }    
   }
    return false;
 
 };

// Appelé en continue après le setup
function draw() {
  if (page===1) {
    background(0);
    fill(255, 0, 0, fade)
    text("Wama Studio", 50,175)
    text("presents", 50,225)
    if (fade<0) fadeAmount=1; 
  
    if (fade>255) {
      fadeAmount=-10; 
    }
    fade += fadeAmount; 
    if (fade === 0 ) {
      page=2
    }
  }
  if (page===2) {
    background(0);
    fill(255, 0, 0, fade)
    text("In association with", 50,175)
    text("Les intervenants", 50,225)
    if (fade<0) fadeAmount=1; 
  
    if (fade>255) {
      fadeAmount=-10; 
    }
    fade += fadeAmount;
    if (fade === 0 ) {
      page=3
    }
  }
  if (page===3) {
    background(0);
    print(fade)
    fill(255, 0, 0, fade)
    text("DARVOZA", 50,175)
    if (fade<0) fadeAmount=1; 
  
    if (fade>255) {
      fadeAmount=-10; 
    }
    fade += fadeAmount; 
    if (fade === 0 ) {
      opening=false
    }
  }

  if (bool && opening===false) {
    checkKeys(currentWorld);
    drawWorld(worlds[currentWorld],
              tileDictionnaries[currentWorld],
              worldsTileSizes[currentWorld]);
    if (currentWorld!=2 && currentFrontWorld!=3) {
      image(currentHeroImage, heroX, heroY, heroWidth, heroHeight);
    }
    drawFront(worlds[currentFrontWorld],
      tileDictionnaries[currentFrontWorld],
    worldsTileSizes[currentFrontWorld]);
  }
  
  
  

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
  
  if (zoneAvailable && currentFrontWorld===5){

    if (mouseIsPressed === true) {
      if(pointIsInObjective(y1, x1, mouseX,mouseY, w1, h1)){
        // imageMode(CORNER);
        // image(bluredImg, 0, 0);
        // bluredImg.resize(1440, 900);
        // imageMode(CENTER);
        // image(img2, canvasWidth/2, canvasHeight/2);
        imageMode(CENTER);
        image(img2,canvasWidth/2, canvasHeight/2);
        bool = false;
        setTimeout(() => {
          bookDisplayed = true;
        }, 500);
      }
    }

    if (bookDisplayed) {
      if (mouseIsPressed === true) {
        if (pointIsInObjective(0, 0, mouseX,mouseY, 442 , 514)) {
          // imageMode(CORNER);
          // image(bluredImg, 0, 0);
          // bluredImg.resize(1440, 900);
          imageMode(CENTER);
          image(img3, canvasWidth/2, canvasHeight/2);
          image(img4, canvasWidth/2+90, canvasHeight/2);
          setTimeout(() => {
            bookOpened = true;
          }, 500);
        }
      }
    }

    if (bookOpened) {
      if (mouseIsPressed === true) {
        if (pointIsInObjective(canvasWidth/2, canvasHeight/2, mouseX,mouseY, 150,50)) {
          //imageMode(CORNER);
          // image(bluredImg, 0, 0);
          // bluredImg.resize(1440, 900);
          imageMode(CENTER);
          image(img3, canvasWidth/2, canvasHeight/2);
          zoneAvailable = false;
        }
      }
    }
  }

  // if (mouseIsPressed === true) {
  //   if (pointIsInObjective(0, 0, mouseX,mouseY, 500,900)) {
  //     bool = true;
  //   }
    
  // }
  if (bool && zoneAvailable===false) {
    imageMode(CORNER);
    drawFront(worlds[currentFrontWorld],
      tileDictionnaries[currentFrontWorld],
    worldsTileSizes[currentFrontWorld]);
    image(key, 1320, 125);
    key.resize(100,40) 
    
  }else if (bool && opening===false){
    imageMode(CORNER);
    drawFront(worlds[currentFrontWorld],
      tileDictionnaries[currentFrontWorld],
      worldsTileSizes[currentFrontWorld]);
    bookDisplayed = false;
  }
  // fill("red");
  // rect(0, 0, 100,60);
  //background(20);
}


