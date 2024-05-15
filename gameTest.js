let canvas

let world1TileSize = 130
let world1CollisionTileSize = 100
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
let y1 = 265;
let x1 = 285;
let w1 = 20;
let h1 = 80;
let ry2 = 50;
let img;
let bool = true;
let bookDisplayed = false;
let bookOpened = false;
let zoneAvailable = true;
let keyFound=false;
let menuDisplayed=false;

let towelOpened=false;
let fogImg=true;

let fade;
let fadeAmount = 1;
let page = 1;

let button;
let play=false;

let slider;
let bg;
let bg2;

canMove=0;
canMove2=0;
canMove3=0;
canMove4=0;

let w = 90;
let h = 99;

let res = "";

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

// Location and size of key img when in use
let x = 100;
let y = 100;
let pinX = 10;
let pinY = 20;
let keyWidth = 100;
let keyHeight = 100; 
let offsetX, offsetY; // Mouseclick offset

let irotate = 0;
let previousRotation = 0; 
let rotationCount = 0;

let redLight=true;
let babaDisplayed=false;
let randomNbforbaba=0;
let roundRandomNbforbaba=0;
let i=0;
let babaX=0;
let babaY=0;
let babaHeight=260;
let babaWidth=260;
let nbOfcollisionWithBaba=0;
let cooldown = 5;

let gameOverBool=false;

let health = 100;

let canDisplayDialogue = true;
let canDisplayPcDialogue = true;
let canDisplayPcDialogueLRDoor = true;
let canDisplayP = false;
let canDisplayPforLRDoor = false;

let progress = 0;

let dollTaken = false;

let canPlaySound = true;

let video;

let runAnim = true;

let canvasHeight = 0;
let canvasWidth = 0;
let canvasResised = false;
let canvasResised2 = false;
let canvasResised3 = false;

function setFullSreen(){
    var elem = document.getElementsByTagName("body")[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
}

document.getElementsByTagName("body")[0].addEventListener("mouseup", ()=>{
  setFullSreen();
  if (canvasResised2===false) {
    setTimeout(() => {
      d1.resize(canvasWidth,0);
      d2.resize(canvasWidth,0);
      d3.resize(canvasWidth,0);
      canvasHeight = windowHeight;
      canvasWidth = windowWidth;
      resizeCanvas(canvasWidth, canvasHeight);
      canvasResised2=true;
    }, 500);
  }
});

function preload(){
  img2 = loadImage('assets/Subject.png');
  img3 = loadImage('assets/openBook.png');
  img4 = loadImage('assets/key.png');
  //biblio = loadImage("assets/Tuiles/Meuble/Chambre/biblio/point & click/biblio.png");
  inventory = loadImage('assets/Tuiles/Inventaire/1.png');
  menu = loadImage('assets/Tuiles/Menu.png');
  song = loadSound('assets/The Spooky House of Shady Lane.m4a');
  fontRegular = loadFont('assets/Typographie/Nevermore Nom Jeu.otf');
  fontPlay = loadFont('assets/Typographie/HeavenGate Bouton_Menu.otf');
  bg = loadImage('assets/Tuiles/Meuble/Salle de bain/Vue de haut/Pièce.png');
  bg2 = loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/Cuisine.png');
  digicode = loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/Digicode.png ');
  letter = loadImage('assets/Lettre.png ');
  fog = loadImage('assets/fog.png');
  towel = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/1.png')
  towel2 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/2.png')
  towel3 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/3.png')
  mirror = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Vue\ 2.png')
  pin = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Epingle.png')
  salon = loadImage('assets/salon haut.png');
  porteBlinde = loadImage("assets/mur2.png"); 
  roue = loadImage("assets/roue.png"); 
  green = loadImage("assets/murVert.png"); 
  entrance = loadImage('assets/Tuiles/Meuble/Entree/entree.png ');
  baba = loadImage('assets/Tuiles/Personnages/Babayaga/Babayaga.png');
  baba1 = loadImage('assets/Tuiles/Personnages/Babayaga/Babayaga D.png');
  baba2 = loadImage('assets/Tuiles/Personnages/Babayaga/Babayaga B.png');
  unlockableDoor = loadImage("assets/Tuiles/Meuble/Chambre/Vue point and click/lit p&c@4x.png"); 
  mainKitchenFurniture = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/1.png ");
  secondaryKitchenFurniture = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 2/2.png ");
  kitchenWall = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 4/4.png "); 
  cupboard1 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautMChiffre/1.png "); 
  cupboard2 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautMChiffre/2.png  "); 
  cupboard3 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautMChiffre/3.png "); 
  roomWithDoll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/mur\ 1@4x.png"); 
  noDoll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/sans poupée @4x.png"); 
  doll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/doll.png");
  d1 = loadImage("assets/Dialogue/Chambre1.png"); 
  d2 = loadImage("assets/Dialogue/Chambre2.png");
  d3 = loadImage("assets/Dialogue/J'ai oublié quelque chose.png");
  loadingScreen1 = loadImage("assets/Tuiles/1.png"); 
  lightFog = loadImage("assets/lightFog.png");
  ding = loadSound('assets/hotel-bell-ding-1-174457.mp3');
  vent1 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/1.png");
  vent2 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/2.png");
  vent3 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/3.png");
  vent4 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/4.png");
  vent5 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/5.png");
  room = loadImage("assets/Tuiles/Meuble/Chambre/Vue\ de\ haut/Vue\ de\ haut.png ");
  biblio = loadImage("assets/Tuiles/Meuble/Chambre/Vue point and click/Vue biblio.png ");
  prop1 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation1.png");
  prop2 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation2.png");
  prop3 = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation3.png");
}

function setup() {
  setFullSreen()
  canvasHeight = windowHeight;
  canvasWidth = windowWidth;
  canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.position(0,0);
  //let canvas = createCanvas(windowWidth, windowHeight);

  hero0 = loadImage('assets/Tuiles/Personnages/Garçon/Vue dessus.png');
  hero1 = loadImage('assets/Tuiles/Personnages/Garçon/g.png');
  hero2 = loadImage('assets/Tuiles/Personnages/Garçon/d.png');
  hero3 = loadImage('assets/Tuiles/Personnages/Garçon/b.png');

  heroWithDoll = loadImage('assets/Tuiles/Personnages/Garçon/Avec poupée.png');
  hero5 = loadImage('assets/Tuiles/Personnages/Garçon/dollg.png');
  hero6 = loadImage('assets/Tuiles/Personnages/Garçon/dolld.png');
  hero7 = loadImage('assets/Tuiles/Personnages/Garçon/dollb.png');
  currentHeroImage=hero0;

  img2.resize(200,0);
  img3.resize(400,0);
  img4.resize(150,0);
  roue.resize(200,0);
  d1.resize(canvasWidth,0);
  d2.resize(canvasWidth,0);
  d3.resize(canvasWidth,0);

  fade = 1
  let worldSave = JSON.parse(localStorage.getItem("worldSave"));
  let frontSave = JSON.parse(localStorage.getItem("frontSave"));
  let collisionSave = JSON.parse(localStorage.getItem("collisionSave"));

  if (save<1) {
    button = createButton('Play');
    button.center();
    button.mousePressed(playSound);
    button.style('font-family', 'American Typewriter');
  }else if (save===2) {
    currentWorld=worldSave;
    currentFrontWorld=frontSave;
    collision=collisionSave;
  }

  angleMode(DEGREES);  
  randomNbforbaba = random(0, 2);
  roundRandomNbforbaba = round(randomNbforbaba);

  //console.log(frontSave);

  video = createVideo('assets/Darvoza.mp4');
  
  // Hide the video element
  video.hide();
}

/////////////////////////////////////////////////////   MOVEMENTS
const checkKeys = (currentMap)=>{
  if (babaDisplayed===false) {
    if (currentFrontWorld===1 || currentFrontWorld>8 && currentFrontWorld!=10) {
      if (keyIsDown(LEFT_ARROW)) {
        currentHeroImage=hero1;
        heroX -= 20;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroX += 20;
        } 
        canDisplayDialogue=false;
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        currentHeroImage=hero2;
        heroX += 20;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroX -= 20;
        } 
        canDisplayDialogue=false;
      }
      
      if (keyIsDown(UP_ARROW)) {
        currentHeroImage=hero0;
        heroY -= 20;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroY += 20;
        } 
        canDisplayDialogue=false;
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        currentHeroImage=hero3;
        heroY += 20;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroY -= 20;
        } 
        canDisplayDialogue=false;
      }
    }else{
      if (keyIsDown(80)) {
        localStorage.setItem("keyImgClicked", JSON.stringify(false));
        currentWorld=0;
        towelOpened=false;
        bool=true;
        canDisplayP=false;
        currentFrontWorld=1;  //retour au monde de décoration de base pour la chambre
      }
    }
  
    if (currentFrontWorld===12 || currentFrontWorld===25 || currentFrontWorld===26 || currentFrontWorld===27) {
      if (keyIsDown(80)) {
        bool=true;
        currentWorld=2;
        currentFrontWorld=9;
        collision=world3Collision;    //retour au monde de décoration de base pour la cuisine
      }
    }
  
    if (currentFrontWorld===13 || currentFrontWorld===14 || currentFrontWorld===60) {
      if (keyIsDown(80)) {
        localStorage.setItem("pinImgClicked", JSON.stringify(false));
        bool=true;
        currentFrontWorld=50;
        collision=world2Collision;    //retour au monde de décoration de base pour la salle de bain
      }
    }
  
    if (currentFrontWorld===15 || currentFrontWorld===28) {
      if (keyIsDown(80)) {
        bool=true;
        currentFrontWorld=20;
        collision=world4Collision;    //retour au monde de décoration de base pour le salon
      }
    }
  }else{    // restriction de certain mouvement si Baba Yaga apparait
    if (keyIsDown(LEFT_ARROW) && cooldown === 0) {
      currentHeroImage=hero5;
      cooldown = 10;
    }
  
    if (keyIsDown(RIGHT_ARROW) && cooldown === 0) {
      currentHeroImage=hero6;
      cooldown = 10;
    }

    if (keyIsDown(DOWN_ARROW) && cooldown === 0) {
      currentHeroImage=hero7;
      cooldown = 10;
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

function testplaySound(){
  if (canPlaySound) {
    ding.play();
    canPlaySound=false; 
  }
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
  
  if (currentFrontWorld === 12) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            if (pointIsInObjective((j * w + j * 20) + 565, (i * h + i * 15) + 370, mouseX, mouseY, w, h)) {
                if (i === 3 && j === 0) {
                    res += "*";
                } else if (i === 3 && j === 1) {
                    res += "0";
                } else if (i === 3 && j === 2) {
                    res += "#";
                } else {
                    res += (i * 3) + j + 1;
                }
                console.log("ok");
            }
        }
    }
}
}

function addLetterSpacing(input, amount, spacer) {
  spacerCharacter = '\u200A' || spacer;
  let characters = input.split('');
  spacerCharacter = spacerCharacter.repeat(amount);
  return characters.join(spacerCharacter);
}

function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}

function gameOver() {
  background(0);
  fill(255, 0, 0);
  textSize(100);
  textAlign(CENTER);
  textFont(fontRegular);
  text("GAME OVER",windowWidth/2,windowHeight/2);
  gameOverBool=true;
  localStorage.setItem("save", JSON.stringify(3));
  // NGbutton = createButton('New Game ?');
  // NGbutton.position(width/2,height/2+50);
  // NGbutton.mousePressed(clearLocalStorage());
  // NGbutton.style('font-family', 'American Typewriter');
}

function won() {
  background(0);
  fill("green");
  textSize(100);
  textAlign(CENTER);
  textFont(fontRegular);
  text("YOU WON",width/2,height/2);
  gameOverBool=true;
}

let pinData = localStorage.setItem("pinFound", JSON.stringify(false));

function decreaseHealth(amount) {
  health -= amount;
  
  // Assurer que la santé ne devient pas négative
  if (health < 0) {
    health = 0;
    won();
  }
}

let dollFound = JSON.parse(localStorage.getItem("dollFound"));
// Appelé en continue après le setup
function draw() {
  imageMode(CORNER);
  //console.log(currentFrontWorld,currentWorld);
  checkCollision(collision,world1CollisionTileSize)

  if (cooldown > 0) {
    cooldown--;
  }

  if (0) {
    canMove++;
    if (canMove<=1) {
      heroX=7*world1TileSize;
      heroY=6*world1TileSize;
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
  }else if (currentFrontWorld===21) {
    canMove4++;
    if (canMove4<=1) {
      heroX=9*world1TileSize;
      heroY=4*world1TileSize-60;
    }
  }
  
  //console.log(currentFrontWorld); 
  let save = JSON.parse(localStorage.getItem("save"));
  if (save===2) {
    canvasWidth = windowWidth-160;
    if (canvasResised===false) {
      resizeCanvas(canvasWidth, windowHeight);
      canvasResised=true;
    }
    canvas.position(160,0);
  }
  // if (save===3) {
  //   canvasWidth = windowWidth;
  //   if (canvasResised3===false) {
  //     resizeCanvas(canvasWidth, windowHeight);
  //     canvasResised3=true;
  //   }
  //   canvas.position(0,0);
  // }
  if (gameOverBool===false) {
    if (currentFrontWorld===1 && save===2) {
      localStorage.setItem("frontSave", JSON.stringify(1));
      background(room);
    }

    if (currentFrontWorld===50) {
      background(bg);
    }

    if (currentFrontWorld===5 && bool) {
      imageMode(CORNER);
      background(biblio);
    }
  
    if (currentFrontWorld===20) {
      background(salon);
    }
  
    if (currentFrontWorld===21) {
      background(entrance);
    }
  
    if (currentFrontWorld===12) {
      background(digicode);
    }
    
    if (currentFrontWorld===25 && bool) {
      background(mainKitchenFurniture);
    }
    if (currentFrontWorld===27) {
      background(secondaryKitchenFurniture);
    }
    if (currentFrontWorld===26) {
      background(kitchenWall);
    }
    
    if (currentFrontWorld===13 && bool) {
      background(towel);
      fogImg = JSON.parse(localStorage.getItem("fogImg"));
      if (typeof fogImg !== 'boolean') {
        image(lightFog,0,0,canvasWidth,canvasHeight)
      }
    }
    //console.log(dollFound);
    if (currentFrontWorld===28 && bool && dollFound!==true) {
      background(roomWithDoll);
    }else if(currentFrontWorld===28 && bool && dollFound===true){
      background(noDoll);
    }
    
    let pinFound = JSON.parse(localStorage.getItem("pinFound"));
    fogImg = JSON.parse(localStorage.getItem("fogImg"));
    if (currentFrontWorld===14 && bool) {
      background(mirror);
      if (pinFound!==true && typeof fogImg === 'boolean') {
        image(pin,windowWidth/2+300,windowHeight/2+25,100,100);
      }
      if (typeof fogImg !== 'boolean') {
        image(fog,0,0,canvasWidth,canvasHeight);
      }
    }
  
    if (currentFrontWorld===15 && redLight) {
      background(porteBlinde);
      push()
      //translate(355, 295);
      translate(canvasWidth/2, canvasHeight/2);
      //translate(width / 2, height / 2);
      rotate(irotate);
      imageMode(CENTER);
      image(roue, 0, 0); 
      pop();
      if (canDisplayPcDialogueLRDoor){
        image(d3,-40,canvasHeight-120);
        setTimeout(() => {
          canDisplayPcDialogueLRDoor=false
        }, 2000);
      }
    }
  
    if (currentFrontWorld===9) {
      background(bg2);
    }
  }
  
  ///////////////////////////////////////////////////// OPENING
  if (save<1 && play) {
    video.play();
    image(video, 0, 0, canvasWidth, canvasHeight);
    setTimeout(() => {
      localStorage.setItem("save", JSON.stringify(1));
    }, 10000);
  }

  if (save===1) {

    console.log(canvasHeight);
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;

    background(loadingScreen1);
      
    // Dessiner la barre de chargement
    fill(50);
    rect(100, 100, 200, 20);
    
    // Dessiner la progression
    fill(0, 200, 0);
    let progressWidth = map(progress, 0, 100, 0, 200);
    rect(100, 100, progressWidth, 20);

    if (progress < 100) {
      progress += 0.1;
    }else{
      localStorage.setItem("save", JSON.stringify(2));
      
      localStorage.setItem("collisionSave", JSON.stringify(world1Collision));
      inventoryCanvas();
    }

  }
  ////////////////////////////////////////////////////////// 

  ////////////////////////////////////////////////////////// DRAW WORLDS
  if (gameOverBool===false) {
    if (bool && save===2) {
      imageMode(CORNER);
      // if (currentWorld===0 && currentFrontWorld<12) {
      //   background(0); 
      // }
      
      if (currentFrontWorld<3 || currentFrontWorld===50 || currentFrontWorld===9 || currentFrontWorld===20 || currentFrontWorld===21) {
        image(currentHeroImage, heroX, heroY, heroWidth, heroHeight);
      }

      // console.log(5*world1TileSize);
      if (heroX<=740 && heroX>=650 && currentFrontWorld===21 && heroY>=420 && heroY<=500) {
        babaDisplayed=true;
        let barWidth = 200;
        let barHeight = 20;
        let xPos = (width - barWidth) / 2;
        let yPos = height-64;
        fill(255); // Couleur de fond de la barre
        rect(xPos, yPos, barWidth, barHeight);
        
        let healthWidth = map(health, 0, 100, 0, barWidth); // Calculer la largeur de la barre de vie en fonction de la santé actuelle
        
        fill(0, 255, 0); // Couleur de la barre de vie
        rect(xPos, yPos, healthWidth, barHeight); // Dessiner la barre de vie

        if (babaDisplayed && roundRandomNbforbaba===0) {
          if (currentHeroImage!==hero6) {
            if (health>50) {
              i+=10;
            }else if(health<=50){
              i+=15;
            }else if (health<=25) {
              i+=20;
            }
            
            babaX=9*world1TileSize-i;
            babaY=3*world1TileSize+20;
            image(baba, babaX, babaY, babaWidth, babaHeight);
            if (babaX<=heroX) {
              babaX=0;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random(1,2);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random(1, 2);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
          }
          
        }else if (babaDisplayed && roundRandomNbforbaba===1) {
          if (currentHeroImage!==hero7) {
            if (health>50) {
              i+=10;
            }else if(health<=50){
              i+=15;
            }else if (health<=25) {
              i+=20;
            }
            babaX=5*world1TileSize+20;
            babaY=6*world1TileSize-i;
            image(baba2, babaX, babaY, babaWidth, babaHeight);
            if (babaY<=heroY) {
              babaY=6*world1TileSize;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random([0, 2]);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random([0, 2]);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
          }
        }else if (babaDisplayed && roundRandomNbforbaba===2){
          if (currentHeroImage!==hero5) {
            if (health>50) {
              i+=10;
            }else if(health<=50){
              i+=15;
            }else if (health<=25) {
              i+=20;
            }
            babaX=1*world1TileSize+i;
            babaY=3*world1TileSize+20;
            image(baba1,babaX ,babaY , babaWidth, babaHeight);
            if (babaX>=heroX) {
              babaX=1*world1TileSize;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random(0, 1);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random(0, 1);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
          }
          
        }
      }

      // if (currentFrontWorld<12 && currentFrontWorld!==9) {
      //   drawFront(worlds[currentFrontWorld],
      //   tileDictionnaries[currentFrontWorld],
      //   worldsTileSizes[currentFrontWorld]);
      // }
      let fogImg = JSON.parse(localStorage.getItem("fogImg"));
      if (typeof fogImg === 'boolean') {
        if (currentFrontWorld===50 && fogImg) {
          image(fog,0,0,canvasWidth,canvasHeight);
        }
      }else{
        if (currentFrontWorld===50) {
          image(fog,0,0,canvasWidth,canvasHeight);
        }
      }
      
      
    }
  }
  
  
  ////////////////////////////////////////////////////////// TEST CONTACT WITH INTERACTABLE OBJECTS
  if (txt && currentFrontWorld===1 || txt && currentFrontWorld===50 || txt && currentFrontWorld===9 || txt && currentFrontWorld===20) {
    textSize(50);
    textFont(fontRegular);
    fill('white');
    text("M to interact", windowWidth/2-200, windowHeight-50);
    if (keyIsDown(77)) {
      currentWorld=2;
      currentFrontWorld=tile;
    }
    txt = false;
  }
  //////////////////////////////////////////////////////////    DISPLAY "P TO EXIT"
  //console.log(currentFrontWorld);
  if (currentFrontWorld>2 && currentFrontWorld <= 8 || currentFrontWorld===10 || currentFrontWorld>=13 && currentFrontWorld<20 || currentFrontWorld===28 || currentFrontWorld===60 || currentFrontWorld===12 || currentFrontWorld>=25 && currentFrontWorld<28) {
    fill('white');
    textFont(fontRegular);
    textSize(50);
    text("P to exit", windowWidth/2-200, windowHeight-50);
  }

  //////////////////////////////////////////////////////////   POINT AND CLICK
  if (zoneAvailable && currentFrontWorld===5){

    if (mouseIsPressed === true) {
      if(pointIsInObjective(y1, x1, mouseX,mouseY, w1, h1)){
        bool = false;
        imageMode(CENTER);
        // image(bluredImg, 0, 0);
        // bluredImg.resize(1440, 900);
        // imageMode(CENTER);
        // image(img2, canvasWidth/2, canvasHeight/2);
        image(img2,canvasWidth/2, canvasHeight/2);
        setTimeout(() => {
          bookDisplayed = true;
        }, 500);
      }
    }

    if (bookDisplayed) {
      if (mouseIsPressed === true) {
        if (pointIsInObjective(canvasWidth/2-100, canvasHeight/2-116, mouseX,mouseY, 200 , 235)) {
          imageMode(CENTER);
          // image(bluredImg, 0, 0);
          // bluredImg.resize(1440, 900);
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
          image(img3, canvasWidth/2, canvasHeight/2);
          zoneAvailable = false;
        }
      }
    }

    if (mouseIsPressed === true) {
      if (pointIsInObjective(canvasWidth/2+100,canvasHeight/2-200, mouseX,mouseY, 200,250)) {
        bool=false;
        //imageMode(CORNER);
        // image(bluredImg, 0, 0);
        // bluredImg.resize(1440, 900);
        imageMode(CENTER);
        image(letter, canvasWidth/2, canvasHeight/2,550,576);
        //zoneAvailable = false;
      }
    }
  }else if (currentFrontWorld===13) {
    if (mouseIsPressed === true) {
      if (towelOpened===false) {
        if (pointIsInObjective(windowWidth/2-75,windowHeight/2, mouseX,mouseY, 175,200)) {
          bool=false;
          background(towel2);
          let fogImg = JSON.parse(localStorage.getItem("fogImg"));
          image(lightFog,0,0,canvasWidth,canvasHeight)
          setTimeout(() => {
            background(towel3);
            image(lightFog,0,0,canvasWidth,canvasHeight)
          }, 100);
          towelOpened=true;
        }
      }
      
    }

    if (towelOpened) {
      if (mouseIsPressed===true) {
        if (pointIsInObjective(windowWidth/2,windowHeight/2+110, mouseX,mouseY, 50, 50)) {
          localStorage.setItem("fogImg", JSON.stringify(false));
          background(towel3);
          image(prop1,canvasWidth-275,25,125,120);
          image(prop2,canvasWidth-275,25,125,120);
          image(prop3,canvasWidth-275,25,125,120);
        }
      }
    }
  }else if (currentFrontWorld===14) {
    if (mouseIsPressed === true) {
      if (pointIsInObjective(windowWidth/2+300,windowHeight/2+25,mouseX,mouseY, 100,100)) {
        localStorage.setItem("pinFound", JSON.stringify(true));
        bool=false;
        image(mirror,0,0,canvasWidth,canvasHeight)
      }
    }
  }else if (currentFrontWorld===15) {
    //canDisplayPcDialogue=true;
    // if (dollFound) {
    //   //console.log("ok");
    //   if (mouseIsPressed === true) {
    //     if(pointIsInObjective(canvasWidth/2-100, canvasHeight/2-100,mouseX,mouseY, 200, 200)){   
    //       let coteAdjacent = mouseX-canvasWidth/2;
    //       let coteOpposee = mouseY-canvasHeight/2;
    //       angle = atan(coteOpposee/coteAdjacent);
    //       irotate = angle;
    //       //console.log(angle);
    //       if (angle >= 80) {
    //         rotationCount+=0.25;
    //         angle=0;
    //         if (rotationCount===3) {
    //           background(green);
    //           redLight=false;
    //           setTimeout(() => {
    //             localStorage.setItem("frontSave", JSON.stringify(21));
    //             localStorage.setItem("collisionSave", JSON.stringify(world5Collision));

    //             currentFrontWorld=21;
    //             collision=world5Collision;
    //           }, 1000);
              
    //         }
    //       }
    //     }
    //   }
    // }
      //console.log("ok");
    if (mouseIsPressed === true) {
      if(pointIsInObjective(canvasWidth/2-100, canvasHeight/2-100,mouseX,mouseY, 200, 200)){   
        let coteAdjacent = mouseX-canvasWidth/2;
        let coteOpposee = mouseY-canvasHeight/2;
        angle = atan(coteOpposee/coteAdjacent);
        irotate = angle;
        //console.log(angle);
        if (angle >= 80) {
          rotationCount+=0.25;
          angle=0;
          if (rotationCount===3) {
            background(green);
            redLight=false;
            setTimeout(() => {
              localStorage.setItem("frontSave", JSON.stringify(21));
              localStorage.setItem("collisionSave", JSON.stringify(world5Collision));

              currentFrontWorld=21;
              collision=world5Collision;
            }, 1000);
            
          }
        }
      }
    }
  }else if (currentFrontWorld===25) {
    if (mouseIsPressed === true) {
      if(pointIsInObjective(canvasWidth/2+20, 0, mouseX,mouseY, 200, 260)){
        bool=false;
        background(cupboard1);
          setTimeout(() => {
            background(cupboard2);
          }, 100);
          setTimeout(() => {
            background(cupboard3);
          }, 200);
      }
    }
  }else if (currentFrontWorld===28) {
    if (mouseIsPressed === true) {
      if(pointIsInObjective(canvasWidth/2+50, canvasHeight/2+150, mouseX,mouseY, 100, 100)){
        bool=false;
        dollTaken=true;
        localStorage.setItem("dollFound", JSON.stringify(true));
        background(noDoll);
      }
    }
  }
  let keyClicked = JSON.parse(localStorage.getItem("keyImgClicked"));
  let pinClicked = JSON.parse(localStorage.getItem("pinImgClicked"));
  if (currentFrontWorld===7) {
    background(unlockableDoor)
    if (keyClicked) {
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

        if (pointIsInObjective(windowWidth/2+80,windowHeight/2+50,x,y,100,100)){
          localStorage.setItem("frontSave", JSON.stringify(50));
          localStorage.setItem("collisionSave", JSON.stringify(world2Collision));
          
          currentFrontWorld=50;
          collision=world2Collision;  
        }
      }
    }
    
  }else if (currentFrontWorld===60) {
    if (bool) {
      background(vent1);
    }
    if (pinClicked) {
      image(pin,pinX, pinY,100,100)
      // Is mouse over object
      if (mouseX > pinX && mouseX < pinX + keyWidth && mouseY > pinY && mouseY < pinY + keyHeight) {
        rollover = true;
      } else {
        rollover = false;
      }

      // Adjust location if being dragged
      if (dragging) {
        pinX = mouseX + offsetX;
        pinY = mouseY + offsetY;
      }

      if (mouseIsPressed===true) {
        if (mouseX > pinX && mouseX < pinX + keyWidth && mouseY > pinY && mouseY < pinY + keyHeight) {
          dragging = true;
          offsetX = pinX - mouseX;
          offsetY = pinY - mouseY;
        }
      }else{
        // Quit dragging
        dragging = false;

        if (pointIsInObjective(100,10,pinX,pinY,480,550) && runAnim){
          bool=false;
          setTimeout(() => {
            console.log("a");
            image(vent2,0,0,windowWidth,windowHeight);
          }, 500);
          setTimeout(() => {
            console.log("b");
            image(vent3,0,0,windowWidth,windowHeight);
          }, 1000);
          setTimeout(() => {
            image(vent4,0,0,windowWidth,windowHeight);
          }, 1500);
          setTimeout(() => {
            image(vent5,0,0,windowWidth,windowHeight);
          }, 2000);
          setTimeout(() => {
            console.log("c");
            localStorage.setItem("frontSave", JSON.stringify(9));
            localStorage.setItem("collisionSave", JSON.stringify(world3Collision));
            
            currentFrontWorld=9;
            collision=world3Collision;
            localStorage.setItem("pinFound", JSON.stringify(false));
            bool = true;
          }, 4000);
          runAnim=false;
        }
      }
    }
  }

  let brightness = JSON.parse(localStorage.getItem("brightness"));
  adjustBrightness(brightness);

  if (res==="7452") {
    localStorage.setItem("passwordFound", JSON.stringify(true));
    fill('green');
  }else if (res.length>4) {
    res="";
    fill('red');
  }
  let digicodeNumbers = addLetterSpacing(res, 15, '\u2007');
  if (currentFrontWorld===12) {
    textFont("Arial");
    textSize(50);
    text(digicodeNumbers, 590, 270);
  }

  if (save===2 && canDisplayDialogue && currentFrontWorld===1) {
    image(d1,0,canvasHeight-80);
  }else if (currentFrontWorld===8 && canDisplayPcDialogue){
    setTimeout(() => {
      canDisplayPcDialogue=false
    }, 2000);
    
    image(d2,-40,canvasHeight-60);
    testplaySound();
  }
  
  checkKeys(currentWorld);
  //fill("red");
  //rect(canvasWidth/2+100,canvasHeight/2-200, 200,250)
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
      pin = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Epingle.png')
    }
  
    sketch.setup = function() {
      let canvas2 = sketch.createCanvas(160, 693);
      canvas2.id('inventory');
      canvas2.position(0,100);
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
    localStorage.setItem("pinImgClicked", JSON.stringify(false));
    localStorage.setItem("keyFound", JSON.stringify(false));
    sketch.draw = function() {
      if (gameOverBool) {
        console.log("ok");
      };
      sketch.background(100);
      sketch.imageMode(CORNER);
      sketch.image(inventory, 0, 0);

      if (sketch.mouseIsPressed===true && currentFrontWorld===7) {
        //console.log(sketch.mouseX,sketch.mouseY);
        if (pointIsInObjective(30, 240,sketch.mouseX,sketch.mouseY,100,40)) {
          localStorage.setItem("keyImgClicked", JSON.stringify(true));
        }
        
      }
      
      if (sketch.mouseIsPressed===true && currentFrontWorld===60) {
        if (pointIsInObjective(30, 240,sketch.mouseX,sketch.mouseY,100,40)) {
          localStorage.setItem("pinImgClicked", JSON.stringify(true));
        }
      }
      
      let keyFound = JSON.parse(localStorage.getItem("keyFound"));
      let keyImgClicked = JSON.parse(localStorage.getItem("keyImgClicked"));
      if (keyFound && keyImgClicked===false) {
        sketch.image(theKey,  30, 240,100,40);
      }
      let pinFound = JSON.parse(localStorage.getItem("pinFound"));
      let pinImgClicked = JSON.parse(localStorage.getItem("pinImgClicked"));

      //console.log(pinFound,pinImgClicked);
      if (pinFound && pinImgClicked===false) {
        sketch.image(pin,  15, 200);
      }
      let dollFound = JSON.parse(localStorage.getItem("dollFound"));
      if (dollFound) {
        sketch.image(doll,  28, 210,100,100);
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