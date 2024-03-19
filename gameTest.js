//import ('/Users/william-johnguenon/Documents/Goblin/Projet Final/Collision/world2.js');
// import ('world2.js');
let deskDecoration = [
  [12,12,12,12,12,12,12,12],
  [12,3.1,3.2,3.3,12,12,12],
  [12,3.4,3.5,3.6,12,12,12],
]

let bilioDecoration = [
  [1],
]

let furnitureDecoration = [
  [12,12,12,12],
  [12,1,2,12],
  [12,5,6,12],
]

let doorDecoration = [
  [12,12,12,12],
  [12,12,1,1,12],
  [12,12,1,1,12],
  [12,12,3,1,12],
  [12,12,1,1,12],
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
]

let bedDecoration = [
  [12,12,12,12,12,12,12,12,12],
  [1,3,5,7,12,12,12],
  [2,4,6,8,12,12,12],
  ]

let world1TileSize = 64
let world1CollisionTileSize = 64
let worldDecorationTileSize = 64
let biblioDecorationTileSize = 580
let bedDecorationTileSize = 180
let deskDecorationTileSize = 140
let furnitureDecorationTileSize = 180
let doorDecorationTileSize = 120

let currentFrontWorld=1
let currentWorld = 0;
let worlds = [];
let tileDictionnaries = [];
let worldsTileSizes = [];
let hero;
let heroWidth = world1TileSize;
let heroHeight = world1TileSize;
let heroX = 3*world1TileSize;
let heroY = 5*world1TileSize;
let txt = false;
let tile = 0;
let irotate = 0;

let side = 80;
let y1 = 410;
let x1 = 415;
let w1 = 20;
let h1 = 50;
let ry2 = 50;
let img;
let bool = true;
let bookDisplayed = false;
let bookOpened = false;
let zoneAvailable = true;
let doorClosed=true;
let menuDisplayed=false;

let fade;
let fadeAmount = 1;
let page = 1;

let song;
let button;
let play=false;
//let opening=true

canvasHeight = PandC.length*world1TileSize;
canvasWidth = PandC[0].length*world1TileSize

function preload(){
  img2 = loadImage('assets/Subject.png');
  img3 = loadImage('assets/openBook.png');
  img4 = loadImage('assets/key.png');
  biblio = loadImage("assets/Tuiles/Meuble/Chambre/biblio/point & click/biblio.png");
  inventory = loadImage('assets/Tuiles/Inventaire/1.png');
  menu = loadImage('assets/Tuiles/Menu.png');
  song = loadSound('assets/The Spooky House of Shady Lane.m4a');
  fontRegular = loadFont('assets/Typographie/Nevermore Nom Jeu.otf');
  fontPlay = loadFont('assets/Typographie/HeavenGate Bouton_Menu.otf');
}
// Appelée une fois
function setup() {
  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.center();

  worldtestTileDictionnary = { 
    0: createImage(1,1),
    12:loadImage('assets/Tuiles/Sol/Chambre/Sol2.png'),
  };
  worldDecorationTiles = { 
    0: loadImage('assets/bord.jpg'),
    12:createImage(1,1),
    13:loadImage('assets/leaves.png'),
    2:loadImage('assets/trunk.png'),
    3.1:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/gauche.png'),
    3.2:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/milieu.png'),
    3.3:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/droit.png'),

    2.1:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Vue de haut/D.png'),
    2.2:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Vue de haut/G.png'),

    "4.1":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut copy@4x.png'),
    "4.2":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut@4x.png'),
    "4.3":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut 2@4x.png'),

    "porte":loadImage('assets/Tuiles/Porte/Chambre/Vue de haut/vue de haut-21.png'),
    "porte2":loadImage('assets/Tuiles/Porte/Chambre/Vue de haut/vue de haut-22.png'),
    
    "5.1":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut g_1@4x.png'),
    "5.2":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut g@4x.png'),
    "5.3":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut m@4x.png'),
    "5.4":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut m_3@4x.png'),
    "5.5":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut m_2@4x.png'),
    "5.6":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut m_1@4x.png'),
    "5.7":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut d_1@4x.png'),
    "5.8":loadImage('assets/Tuiles/Meuble/Chambre/Lit/Vue de haut/vue haut d@4x.png'),
  };

  bedDecorationTiles = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit haut g@4x.png'),
    2:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit bas g@4x.png'),
    3:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit haut m-g@4x.png'),
    4:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit bas m-g@4x.png'),
    5:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit haut m@4x.png'),
    6:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit bas m@4x.png'),
    7:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit haut m-d@4x.png'),
    8:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit bas m-d@4x.png'),
  }

  deskDecorationTiles = { 
    12: createImage(1,1),
    3.1:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/gauche h.png'),
    3.4:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/gauche b.png'),
    3.2:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/milieu h.png'),
    3.5:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/milieu b.png'),
    3.3:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/droit h.png'),
    3.6:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Point and click/droit b.png'),
  }

  biblioDecorationTiles = { 
    0: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Chambre/biblio/point & click/biblio.png'),
  }

  furnitureDecorationTile = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Point and click/gauche h.png'),
    2:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Point and click/droit h.png'),
    5:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Point and click/gauche b.png'),
    6:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Point and click/droit b.png'),
  }

  doorDecorationTile = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    3:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte poignée.png')
  }
  

  PandCTiles = {
    12:loadImage('assets/Tuiles/Mur/Chambre/mur base@4x.png'),
  }
  hero0 = loadImage('assets/Tuiles/Personnages/Garçon/Vue dessus.png');
  hero1 = loadImage('assets/Tuiles/Personnages/Garçon/g.png');
  hero2 = loadImage('assets/Tuiles/Personnages/Garçon/d.png');
  hero3 = loadImage('assets/Tuiles/Personnages/Garçon/b.png');
  currentHeroImage=hero0;
  
  worlds = [worldtestBoard,world1Decoration,PandC,deskDecoration,bedDecoration,bilioDecoration,furnitureDecoration,doorDecoration]
  tileDictionnaries = [worldtestTileDictionnary,worldDecorationTiles,PandCTiles,deskDecorationTiles,bedDecorationTiles,biblioDecorationTiles,furnitureDecorationTile,doorDecorationTile]
  worldsTileSizes = [world1TileSize,world1CollisionTileSize,world1TileSize,deskDecorationTileSize,bedDecorationTileSize,biblioDecorationTileSize,furnitureDecorationTileSize,doorDecorationTileSize]

  img2.resize(200,0);
  img3.resize(400,0);
  img4.resize(150,0)
  biblio.resize(310,0)

  fade = 1
  let save = JSON.parse(localStorage.getItem("save"));
  if (save!==1) {
    button = createButton('Play');
    button.center();
    button.mousePressed(playSound);
    button.style('font-family', 'American Typewriter');
  }
  
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
      
      if (currentTileValue===3 || currentTileValue===4 || currentTileValue===5 || currentTileValue===6) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          txt = true;
          tile=currentTileValue;
          return  true
        } 
      }

      if (currentTileValue===7) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          // if (doorClosed===false) {
          //   currentWorld=2;
          //   currentFrontWorld=2;
          //   return  true
          // }
          // //txt = true;
          // return  true
          txt = true;
          tile=currentTileValue;
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

/////////////////////////////////////////////////////   MOVEMENTS
const checkKeys = (currentMap)=>{
  if (currentFrontWorld===1) {
    if (keyIsDown(LEFT_ARROW)) {
      currentHeroImage=hero1;
      //irotate -= 5;
      heroX -= 5;
      if (checkCollision(world1Collision,world1CollisionTileSize)) {
        heroX += 5;
      } 
      //console.log(irotate);
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      currentHeroImage=hero2;
      heroX += 5;
      if (checkCollision(world1Collision,world1CollisionTileSize)) {
        heroX -= 5;
      } 
    }
    
    if (keyIsDown(UP_ARROW)) {
      currentHeroImage=hero0;
      heroY -= 5;
      if (checkCollision(world1Collision,world1CollisionTileSize)) {
        heroY += 5;
      } 
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      currentHeroImage=hero3;
      heroY += 5;
      if (checkCollision(world1Collision,world1CollisionTileSize)) {
        heroY -= 5;
      } 
    }
  }else{
    if (keyIsDown(80)) {
      currentWorld=0;
      bool=true;
      currentFrontWorld=1;  //retour au monde de décoration de base
    }
  }
}
/////////////////////////////////////////////////////

let pointIsInObjective = function(Nb1,Nb2,x,y,w,h){
  if ((x>Nb1) && (x<Nb1+w)){
     if ((y>Nb2) && (y<Nb2+h)){
         return true;
     }    
   }
    return false;
 
};

function playSound(){
  song.play();
  button.remove();
  play=true;
}


// Appelé en continue après le setup
function draw() {
  checkKeys(currentWorld);
  let save = JSON.parse(localStorage.getItem("save"));      // SAVE OPENING
  
  ///////////////////////////////////////////////////// OPENING
  if (save!==1 && play) {
    if (page===1) {
      background(0);
      fill(255, 0, 0, fade)
      textSize(25)
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
      textSize(25)
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
      fill(255, 0, 0, fade)
      textFont(fontRegular);
      textSize(100)
      text("DARVOZA", 50,175)
      if (fade<0) fadeAmount=1; 
    
      if (fade>255) {
        fadeAmount=-10; 
      }
      fade += fadeAmount; 
      if (fade === 0 ) {
        localStorage.setItem("save", JSON.stringify(1));
        newCanvas();
      }
    }
  }
  ////////////////////////////////////////////////////////// 

  ////////////////////////////////////////////////////////// DRAW WORLDS
  if (bool && save===1 && currentFrontWorld===5) {
    imageMode(CORNER);
    drawWorld(worlds[currentWorld],
      tileDictionnaries[currentWorld],
      worldsTileSizes[currentWorld]);
    image(biblio, 180, 0);
    
  }else{
    if (bool && save===1) {
      imageMode(CORNER);
      if (currentWorld===0) {
        background(0); 
      }
      drawWorld(worlds[currentWorld],
                tileDictionnaries[currentWorld],
                worldsTileSizes[currentWorld]);
      if (currentWorld!=2 && currentFrontWorld!=3) {
        // imageMode(CENTER);
        // angleMode(DEGREES); 
        // push()
        // translate(heroY, heroX);
        // rotate(irotate);
        // image(currentHeroImage, heroX, heroY, heroWidth, heroHeight);
        // pop()
        image(currentHeroImage, heroX, heroY, heroWidth, heroHeight);
      }
      drawFront(worlds[currentFrontWorld],
        tileDictionnaries[currentFrontWorld],
      worldsTileSizes[currentFrontWorld]);
    }
  }
  
  
  //////////////////////////////////////////////////////////
  
  
  ////////////////////////////////////////////////////////// TEST CONTACT WITH INTERACTABLE OBJECTS
  if (txt) {
    textSize(22);
    textFont('Arial');
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
  //////////////////////////////////////////////////////////

  if (currentFrontWorld>2) {
    fill('white');
    text("P to exit", 300, 565);
  }

  //////////////////////////////////////////////////////////   POINT AND CLICK
  if (zoneAvailable && currentFrontWorld===5){

    if (mouseIsPressed === true) {
      if(pointIsInObjective(y1, x1, mouseX,mouseY, w1, h1)){
        bool = false;
        // imageMode(CORNER);
        // image(bluredImg, 0, 0);
        // bluredImg.resize(1440, 900);
        // imageMode(CENTER);
        // image(img2, canvasWidth/2, canvasHeight/2);
        imageMode(CENTER);
        image(img2,canvasWidth/2, canvasHeight/2);
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
        if (pointIsInObjective(canvasWidth/2+15, canvasHeight/2-25, mouseX,mouseY, 150,50)) {
          //imageMode(CORNER);
          // image(bluredImg, 0, 0);
          // bluredImg.resize(1440, 900);
          doorClosed=false;
          imageMode(CENTER);
          image(img3, canvasWidth/2, canvasHeight/2);
          zoneAvailable = false;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////

  if (menuDisplayed) {
    background(0);
    image(menu, 0, 0);
    
  }
}

let inventoryCanvas = () => {
  console.log("ok");
  let s2 = function( sketch ) {

    sketch.preload = function(){
      theKey = loadImage('assets/key.png');
    }
  
    sketch.setup = function() {
      let canvas2 = sketch.createCanvas(160, 693);
      canvas2.id('inventory');
      canvas2.position(100,200);
    }
  
    sketch.mouseClicked = function() {
    if (!menuDisplayed) {
      if ((mouseX>-380) && (mouseX<-380+120)){
        if ((mouseY>-50) && (mouseY<-50+50)){
          menuDisplayed = true;
        }    
      }
      
    }else if (menuDisplayed) {
      if ((mouseX>-380) && (mouseX<-380+120)){
        if ((mouseY>-50) && (mouseY<-50+50)){
          menuDisplayed = false;
        }    
      }
    }
    };
  
    sketch.draw = function() {
      //for canvas 2
      sketch.background(100);
      sketch.imageMode(CORNER);
      sketch.image(inventory, 0, 0);
      if (doorClosed===false) {
      sketch.image(theKey,  30, 240,100,40);
      }
      //sketch.rect(-50,-300,100,50);
    }
  };
  
  new p5(s2);

};

let menuCanvas = () => {
  let bg;
  let s3 = function( sketch ) {
  
    sketch.setup = function() {
      bg = loadImage('assets/moonwalk.jpg');
      let menuCanvas = sketch.createCanvas(661, 483);
      //canvas2.id('inventory');
      menuCanvas.position(100,200);
    }
  
    sketch.draw = function() {
      background(bg);
    }
  };
  
  new p5(s3);

};

let save = JSON.parse(localStorage.getItem("save")); 

if (save===1) {
  inventoryCanvas();
}
