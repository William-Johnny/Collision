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
  [12,12,1,2,12],
  [12,12,3,4,12],
  [12,12,5,6,12],
  [12,12,7,8,12],
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
let collision = world1Collision;

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
let keyFound=false;
let menuDisplayed=false;

let fade;
let fadeAmount = 1;
let page = 1;

let song;
let button;
let play=false;

let slider;
let bg;
let bg2;

canMove=0;
canMove2=0;
canMove3=0;

let w = 45;
let h = 30;

let res = "";

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

// Location and size of key img when in use
let x = 100;
let y = 100;
let keyWidth = 100;
let keyHeight = 100; 
let offsetX, offsetY; // Mouseclick offset

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
  bg = loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Pièce.png');
  bg2 = loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/Cuisine.png');
  digicode = loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/Digicode.png ');
  letter = loadImage('assets/Lettre.png ');
}

function setup() {
  let canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.center();

  worldtestTileDictionnary = { 
    0: createImage(1,1),
    12:loadImage('assets/Tuiles/Sol/SOL@4x.png'),
  };
  worldDecorationTiles = { 
    0: createImage(1,1),
    12:createImage(1,1),
    13:createImage(1,1),
    2:createImage(1,1),
    3.1:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/gauche.png'),
    3.2:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/milieu.png'),
    3.3:loadImage('assets/Tuiles/Meuble/Chambre/Bureau/Vue de haut/droit.png'),

    2.1:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Vue de haut/D.png'),
    2.2:loadImage('assets/Tuiles/Meuble/Chambre/Commode/Vue de haut/G.png'),

    "4.1":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut copy@4x.png'),
    "4.2":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut@4x.png'),
    "4.3":loadImage('assets/Tuiles/Meuble/Chambre/biblio/Vue de haut/biblio haut 2@4x.png'),

    "porte":loadImage('assets/Tuiles/Porte/Chambre/Vue de haut/vue de haut-21.png'),
    11:loadImage('assets/Tuiles/Porte/Chambre/Vue de haut/vue de haut-22.png'),
    
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

  bathroomDecorationTiles = { 
    0: createImage(1,1),
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/Toilettes.png'),

    5:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 2.png'),
    6:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 1.png'),
    7:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 3.png'),
    8:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 4.png'),
    9:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 5.png'),
    10:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 6.png'),
    11:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 7.png'),
    13:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Baignoire 8.png'),

    3:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Lavabo G.png'),
    4:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Lavabo D.png'),

    14:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/ps.png'),

    15:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Porte G.png'),
    16:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Porte D.png'),
    
    17:loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Aeration.png'),
    
  }

  livingRoomDecorationTiles = { 
    0: createImage(1,1),
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Meuble/Salon/Piano/Vue\ de\ haut/piano\ @4x.png'),
    // 2:loadImage('assets/Tuiles/Meuble/Chambre/Lit/Point & click/lit bas g@4x.png'),
    3:loadImage('assets/Tuiles/Meuble/Salon/Canapé/Vue\ de\ haut/canapé\ g@4x.png'),
    4:loadImage('assets/Tuiles/Meuble/Salon/Canapé/Vue\ de\ haut/Canapé\ d@4x.png'),
    
    5:loadImage('assets/Tuiles/Meuble/Salon/Porte coffre/Vue\ de\ haut/porte h-d@4x.png'),
    6:loadImage('assets/Tuiles/Meuble/Salon/Porte coffre/Vue\ de\ haut/porte h-g@4x.png'),
    7:loadImage('assets/Tuiles/Meuble/Salon/Porte coffre/Vue\ de\ haut/porte b-d@4x.png'),
    8:loadImage('assets/Tuiles/Meuble/Salon/Porte coffre/Vue\ de\ haut/porte b-g@4x.png'),

    9:loadImage('assets/Tuiles/Meuble/Salon/Tapis/Vue\ de\ haut/tapis h-d@4x.png'),

  }

  let kitchenDecorationTiles = {
    0: createImage(1,1),
    12: createImage(1,1),
    "1-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-1.png"),
    "1-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-2.png"),
    "1-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-3.png"),
    "1-4": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-4.png"),
    "1-5": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-5.png"),
    "1-6": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-6.png"),
    "1-8": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-8.png"),
    "1-9": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/1-9.png"),
    "2-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/2-2.png"),
    "2-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/2-3.png"),
    "2-4": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/2-4.png"),
    "2-5": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/2-5.png"),
    "2-6": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/2-6.png"),
    "3-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/3-1.png"),
    "3-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/3-2.png"),
    "3-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/3-3.png"),
    "4-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/4-1.png"),
    "4-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/4-2.png"),
    "4-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/4-3.png"),
    "4-11": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/4-11.png"),
    "5-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/5-1.png"),
    "5-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/5-2.png"),
    "5-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/5-3.png"),
    "5-11": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/5-11.png"),
    "6-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/6-1.png"),
    "6-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/6-2.png"),
    "6-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/6-3.png"),
    "7-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-1.png"),
    "7-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-2.png"),
    "7-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-3.png"),
    "7-4": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-4.png"),
    "7-5": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-5.png"),
    "7-6": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/7-6.png"),
    "8-1": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/8-1.png"),
    "8-2": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/8-2.png"),
    "8-3": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/8-3.png"),
    "8-4": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/8-4.png"),
    "8-5": loadImage("assets/Tuiles/Meuble/Cuisine/Vu de haut/8-5.png")
  };

  let doorLetterDecorationTiles = {
    0: createImage(1,1),
    12:createImage(1,1),
  };

  let baseFilePath = "assets/Tuiles/Meuble/Chambre/Porte/";

  for (let i = 1; i <= 8; i++) {
    let key = `${i}`;
    let filePath = loadImage(`${baseFilePath}${i}.png`);
    doorLetterDecorationTiles[key] = filePath;
  }

  doorDecorationTile = { 
    12: createImage(1,1),
    1:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    2:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    3:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    4:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    5:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte poignée.png'),
    6:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    7:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
    8:loadImage('assets/Tuiles/Porte/Chambre/Point and click/porte.png'),
  }


  hero0 = loadImage('assets/Tuiles/Personnages/Garçon/Vue dessus.png');
  hero1 = loadImage('assets/Tuiles/Personnages/Garçon/g.png');
  hero2 = loadImage('assets/Tuiles/Personnages/Garçon/d.png');
  hero3 = loadImage('assets/Tuiles/Personnages/Garçon/b.png');
  currentHeroImage=hero0;
  
  worlds = [worldtestBoard,world1Decoration,PandC,deskDecoration,bedDecoration,bilioDecoration,furnitureDecoration,doorDecoration,world2Decoration,world3Decoration,world4Decoration,doorDecoration]
  
  tileDictionnaries = [worldtestTileDictionnary,worldDecorationTiles,PandCTiles,deskDecorationTiles,bedDecorationTiles,biblioDecorationTiles,furnitureDecorationTile,doorDecorationTile,bathroomDecorationTiles,kitchenDecorationTiles, livingRoomDecorationTiles,doorLetterDecorationTiles]
  
  worldsTileSizes = [world1TileSize,world1CollisionTileSize,world1TileSize,deskDecorationTileSize,bedDecorationTileSize,biblioDecorationTileSize,furnitureDecorationTileSize,doorDecorationTileSize,world1TileSize,world1TileSize,world1TileSize,115]

  img2.resize(200,0);
  img3.resize(400,0);
  img4.resize(150,0);
  biblio.resize(310,0);

  fade = 1
  let save = JSON.parse(localStorage.getItem("save"));
  let frontSave = JSON.parse(localStorage.getItem("frontSave"));
  let collisionSave = JSON.parse(localStorage.getItem("collisionSave"));
  if (save<1) {
    button = createButton('Play');
    button.center();
    button.mousePressed(playSound);
    button.style('font-family', 'American Typewriter');
  }else if (save===1) {
    currentWorld=0;
  }else{
    currentWorld=save;
    currentFrontWorld=frontSave;
    collision=collisionSave;
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

/////////////////////////////////////////////////////   MOVEMENTS
const checkKeys = (currentMap)=>{
  if (currentFrontWorld===1 || currentFrontWorld>=8 && currentFrontWorld!=11) {
    if (keyIsDown(LEFT_ARROW)) {
      currentHeroImage=hero1;
      heroX -= 5;
      if (checkCollision(collision,world1CollisionTileSize)) {
        heroX += 5;
      } 
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      currentHeroImage=hero2;
      heroX += 5;
      if (checkCollision(collision,world1CollisionTileSize)) {
        heroX -= 5;
      } 
    }
    
    if (keyIsDown(UP_ARROW)) {
      currentHeroImage=hero0;
      heroY -= 5;
      if (checkCollision(collision,world1CollisionTileSize)) {
        heroY += 5;
      } 
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      currentHeroImage=hero3;
      heroY += 5;
      if (checkCollision(collision,world1CollisionTileSize)) {
        heroY -= 5;
      } 
    }
  }else{
    if (keyIsDown(80)) {
      localStorage.setItem("keyImgClicked", JSON.stringify(false));
      currentWorld=0;
      bool=true;
      currentFrontWorld=1;  //retour au monde de décoration de base
    }
  }

  if (currentFrontWorld===12) {
    if (keyIsDown(80)) {
      currentWorld=2;
      currentFrontWorld=9;
      collision=world3Collision;
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

function adjustBrightness(adjustment) {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] += adjustment; // Red
    pixels[i + 1] += adjustment; // Green
    pixels[i + 2] += adjustment; // Blue
  }
  updatePixels();
}

function mouseClicked() {
  
  if (currentFrontWorld===12) {
    if(pointIsInObjective((0*w+0*20)+255, (0*h+0*15)+205, mouseX,mouseY, w, h)){
      res+="1";
      console.log("ok")
    }

    if(pointIsInObjective((1*w+1*20)+255,(0*h+0*15)+205, mouseX,mouseY,w, h)){
      res+="2";
    }

    if(pointIsInObjective((2*w+2*20)+255, (0*h+0*15)+205, mouseX,mouseY, w, h)){
      res+="3";
    }

    if(pointIsInObjective((0*w+0*20)+255,(1*h+1*15)+205, mouseX,mouseY,w, h)){
      res+="4";
    }
    
    if(pointIsInObjective((1*w+1*20)+255, (1*h+1*15)+205, mouseX,mouseY, w, h)){
      res+="5";
    }

    if(pointIsInObjective((2*w+2*20)+255,(1*h+1*15)+205, mouseX,mouseY,w, h)){
      res+="6";
    }

    if(pointIsInObjective((0*w+0*20)+255,(2*h+2*15)+205, mouseX,mouseY,w, h)){
      res+="7";
    }
    
    if(pointIsInObjective((1*w+1*20)+255, (2*h+2*15)+205, mouseX,mouseY, w, h)){
      res+="8";
    }

    if(pointIsInObjective((2*w+2*20)+255,(2*h+2*15)+205, mouseX,mouseY,w, h)){
      res+="9";
    }

    if(pointIsInObjective((0*w+0*20)+255,(3*h+3*15)+205, mouseX,mouseY,w, h)){
      res+="*";
    }
    
    if(pointIsInObjective((1*w+1*20)+255,(3*h+3*15)+205,  mouseX,mouseY, w, h)){
      res+="0";
    }

    if(pointIsInObjective((2*w+2*20)+255,(3*h+3*15)+205, mouseX,mouseY,w, h)){
      res+="#";
    }
  }
}

function addLetterSpacing(input, amount, spacer) {
  spacerCharacter = '\u200A' || spacer;
  let characters = input.split('');
  spacerCharacter = spacerCharacter.repeat(amount);
  return characters.join(spacerCharacter);
}


// Appelé en continue après le setup
function draw() {
  checkCollision(collision,world1CollisionTileSize)

  if (currentFrontWorld===8) {
    canMove++;
    if (canMove<=1) {
      heroX=7*world1TileSize;
      heroY=7*world1TileSize;
    }
  }else if (currentFrontWorld===9) {
    canMove2++;
    if (canMove2<=1) {
      heroX=5*world1TileSize;
      heroY=4*world1TileSize;
    }
  }else if (currentFrontWorld===10) {
    canMove3++;
    if (canMove3<=1) {
      heroX=4*world1TileSize;
      heroY=2*world1TileSize;
    }
  }
  
  //console.log(currentFrontWorld); 
  if (currentFrontWorld===8) {
    background(bg);
  }
  if (currentFrontWorld===12) {
    background(digicode);
  }
  if (currentFrontWorld===9) {
    let canvasHeight2=world3Board.length*world1TileSize;
    let canvasWidth2 = world3Board[0].length*world1TileSize
    let canvas2 = createCanvas(canvasWidth2,canvasHeight2);
    canvas2.center();
    background(bg2);
  }
  let save = JSON.parse(localStorage.getItem("save"));      // SAVE OPENING
  
  ///////////////////////////////////////////////////// OPENING
  if (save<1 && play) {
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
        inventoryCanvas();
      }
    }
  }
  ////////////////////////////////////////////////////////// 

  ////////////////////////////////////////////////////////// DRAW WORLDS
  if (bool && save>=1 && currentFrontWorld===5) {
    imageMode(CORNER);
    drawWorld(worlds[currentWorld],
      tileDictionnaries[currentWorld],
      worldsTileSizes[currentWorld]);
    image(biblio, 180, 0);
    
  }else{
    if (bool && save>=1) {
      imageMode(CORNER);
      if (currentWorld===0) {
        background(0); 
      }
      if (currentFrontWorld!==8 && currentFrontWorld!==9 && currentFrontWorld!==12) {
        drawWorld(worlds[currentWorld],
                tileDictionnaries[currentWorld],
                worldsTileSizes[currentWorld]);
      }
      
      if (currentFrontWorld<3 || currentFrontWorld===8 || currentFrontWorld===9 || currentFrontWorld===10) {
        image(currentHeroImage, heroX, heroY, heroWidth, heroHeight);
      }

      if (currentFrontWorld!==12) {
        drawFront(worlds[currentFrontWorld],
        tileDictionnaries[currentFrontWorld],
        worldsTileSizes[currentFrontWorld]);
      }
      
    }
  }
  
  
  //////////////////////////////////////////////////////////
  
  
  ////////////////////////////////////////////////////////// TEST CONTACT WITH INTERACTABLE OBJECTS
  if (txt && currentFrontWorld===1 || txt && currentFrontWorld===8 || txt && currentFrontWorld===9) {
    textSize(22);
    textFont('Arial');
    fill('white');
    text("M to interact", 370, 200);
    if (keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
    if (keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
  
    if (keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
  
    if (keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
    txt = false;
  }
  //////////////////////////////////////////////////////////
  //console.log(currentFrontWorld);
  if (currentFrontWorld>2 && currentFrontWorld < 8 || currentFrontWorld===11) {
    fill('white');
    text("P to exit", 300, 565);
  }

  if (currentFrontWorld===12) {
    fill('white');
    text("P to exit", 300, 500);
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
          keyFound=true;
          localStorage.setItem("keyFound", JSON.stringify(keyFound));
          imageMode(CENTER);
          image(img3, canvasWidth/2, canvasHeight/2);
          zoneAvailable = false;
        }
      }
    }
  }else if (currentFrontWorld===11){
    if (mouseIsPressed === true) {
      if (pointIsInObjective(335,200, mouseX,mouseY, 100,150)) {
        bool=false;
        //imageMode(CORNER);
        // image(bluredImg, 0, 0);
        // bluredImg.resize(1440, 900);
        imageMode(CENTER);
        image(letter, canvasWidth/2, canvasHeight/2,550,576);
        //zoneAvailable = false;
      }
    }
  }

  let keyClicked = JSON.parse(localStorage.getItem("keyImgClicked"));
  if (currentFrontWorld===7 && keyClicked) {
    image(theKey,x, y,100,50)
    // Is mouse over object
    if (mouseX > x && mouseX < x + keyWidth && mouseY > y && mouseY < y + keyHeight) {
      rollover = true;
    } else {
      rollover = false;
    }

    // Adjust location if being dragged
    if (dragging) {
      x = mouseX + offsetX;
      y = mouseY + offsetY;
    }

    if (mouseIsPressed===true) {
      if (mouseX > x && mouseX < x + keyWidth && mouseY > y && mouseY < y + keyHeight) {
        dragging = true;
        offsetX = x - mouseX;
        offsetY = y - mouseY;
      }
    }else{
      // Quit dragging
      dragging = false;

      if ((x>0) && (x<0+100)){
        if ((y>0) && (y<0+100)){
          localStorage.setItem("save", JSON.stringify(2));
          localStorage.setItem("frontSave", JSON.stringify(8));
          localStorage.setItem("collisionSave", JSON.stringify(world2Collision));
          
          currentWorld=2;
          currentFrontWorld=8;
          collision=world2Collision;
        }    
      }
    }
    
    fill(0);
    rect(0,0,100,100)
  }

  let brightness = JSON.parse(localStorage.getItem("brightness"));
  adjustBrightness(brightness);

  if (res==="1256") {
    localStorage.setItem("passwordFound", JSON.stringify(true));
    fill('green');
  }else if (res.length>4) {
    res="";
    fill('red');
  }
  let digicodeNumbers = addLetterSpacing(res, 15, '\u2007');
  //rect(335,200,100,150);
  if (currentFrontWorld===12) {
    text(digicodeNumbers, 270, 175);
  }
  
  checkKeys(currentWorld);
}

let menuCanvas = () => {
  if (menuDisplayed) {
    let s3 = function( sketch ) {
      let bg;
      let slider1;
      let slider2;
      let canvasWidth = 661;
      let canvasHeight= 483; 
  
      sketch.setup=function() {
        bg = loadImage('assets/Tuiles/Menu.png');
        createCanvas(canvasWidth, canvasHeight);
       
        slider1 = createSlider(0, 255);
        slider1.position(canvasWidth+100, canvasHeight-100);
        slider1.size(80);
        // slider1.style("-webkit-appearance", "none"); 
        // slider1.style("-moz-range-track", "red"); 
  
        slider2 = createSlider(-100, 100, 0);
        slider2.position(canvasWidth+100, canvasHeight+50);
        slider2.size(80);

      }

      function adjustBrightness(adjustment) {
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
          pixels[i] += adjustment; // Red
          pixels[i + 1] += adjustment; // Green
          pixels[i + 2] += adjustment; // Blue
        }
        updatePixels();
      }
      
      
  
      sketch.draw=function() {
        background(bg);
        let brightness = slider2.value();
        adjustBrightness(brightness);
        localStorage.setItem("brightness", JSON.stringify(brightness));
      }
    };
    new p5(s3);
  }else{
    location.reload();
  }

};

let inventoryCanvas = () => {
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
      if ((mouseX>-360) && (mouseX<-360+120)){
        if ((mouseY>-50) && (mouseY<-50+50)){
          menuDisplayed = true;
          menuCanvas();
          return menuDisplayed;
        }    
      }
      
    }else if (menuDisplayed) {
      if ((mouseX>-360) && (mouseX<-360+120)){
        if ((mouseY>-50) && (mouseY<-50+50)){
          menuDisplayed = false;
          menuCanvas();
          return menuDisplayed;
        }    
      }
    }
    };

    let pointIsInObjective = function(Nb1,Nb2,x,y,w,h){
      if ((x>Nb1) && (x<Nb1+w)){
         if ((y>Nb2) && (y<Nb2+h)){
             return true;
         }    
       }
        return false;
     
    };
    
    localStorage.setItem("keyImgClicked", JSON.stringify(false));
    sketch.draw = function() {
      sketch.background(100);
      sketch.imageMode(CORNER);
      sketch.image(inventory, 0, 0);

      if (sketch.mouseIsPressed===true && currentFrontWorld===7) {
        //console.log(sketch.mouseX,sketch.mouseY);
        if (pointIsInObjective(30, 240,sketch.mouseX,sketch.mouseY,100,40)) {
          localStorage.setItem("keyImgClicked", JSON.stringify(true));
        }
        
      }
      //console.log(keyImgClicked);
      let keyFound = JSON.parse(localStorage.getItem("keyFound"));
      let keyImgClicked = JSON.parse(localStorage.getItem("keyImgClicked"));
      if (keyFound && keyImgClicked===false) {
        sketch.image(theKey,  30, 240,100,40);
      }
      //sketch.rect(30, 240,100,40);
    }
  };
  
  new p5(s2);

};

let save = JSON.parse(localStorage.getItem("save")); 

if (save>=1) {
  inventoryCanvas();
}