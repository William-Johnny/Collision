let heroSpeed = 8;
let myHeroRight = [];
let myHeroLeft = [];
let myHeroUp = [];
let myHeroDown = [];
let currentIndexHero = 0;
let movementCounterHero = 0;
let currentHeroImage = 0;

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
let collision

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

let button;
let play=false;

let slider;
let bg2;

canMove=0;
canMove2=0;
canMove3=0;
canMove4=0;
canMove5=0;
canMove6=0;

let w = 90;
let h = 99;

let res = "";

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

// Location and size of key img when in use
let x = 1200;
let y = 600;
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
let wonBool = false;

let health = 100;

let canDisplayDialogue = true;
let canDisplayPcDialogue = true;
let canDisplayPcDialogueLRDoor = true;
let canDisplayP = false;
let canDisplayPforLRDoor = false;

let progress = 0;

let dollTaken = false;

let canPlaySound = true;
let canPlayVentSound = true;
let canPlayStepsSound = true;

let video;

let runAnim = true;

let canvasHeight = 0;
let canvasWidth = 0;
let canvasResised = false;
let canvasResised2 = false;
let canvasResised3 = false;
let screenResised = false;
let sliderDrawn = false;

let testMenu = false;
let element1 = "";
let element2 = "";
let sliderId = 0;

let bathroomLight=[];
let bathroomLightNoFog=[];
let candles = [];
let candlesView1 = [];
let runningCat=[];
let propAnimation=[];
let mirrorFogLight=[];
let mirrorNoFogLight=[];
let smokeAnimation=[];
let currentImg = 0;
let movementCounter=0;
let currentIndex=0;

let ventAnimationBool=true;
let doorVideoBool = false;
let openingVideoBool = false;
let bathMapLoaded = false;
let bathMapLoadedAfterProp = false;
let towelMapLoaded = false;
let propTurning = false;

let movementCounterOfOneTimeAnimation = 0;
let currentIndexOfOneTimeAnimation = 0;
let currentImgOfOneTimeAnimation = 0;
let animationEnded = false; 
let playFightVideo=true;
let fightVideoEnded=false;
let fightVideoPlaying=false;

let explosionvideoEnded = false;
let passwordFound = false;

let volume = 0.5;

let salon;
let scaledImg;
let imgWidth, imgHeight;

let testBool = false;
let resizeAuthorised = true;


function setFullSreen(){
    var elem = document.getElementsByTagName("body")[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
}

document.getElementsByTagName("body")[0].addEventListener("mouseup", ()=>{
  let mouseLifted = JSON.parse(localStorage.getItem("mouseLifted"));
  if (resizeAuthorised) {
    if (typeof mouseLifted !== 'boolean') {
      if (screenResised===false) {
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
        screenResised=true;
        localStorage.setItem("mouseLifted", JSON.stringify(true));
      }
    }else{
      if (screenResised===false) {
        setFullSreen();
        if (canvasResised2===false) {
          setTimeout(() => {
            d1.resize(canvasWidth,0);
            d2.resize(canvasWidth,0);
            d3.resize(canvasWidth,0);
            canvasHeight = windowHeight;
            canvasWidth = windowWidth;
            resizeCanvas(canvasWidth-160, canvasHeight);
            canvas.position(160,0);
            canvasResised2=true;
          }, 500);
        }
        screenResised=true;
      }
    }
    resizeAuthorised=false;
    
  }
});



// // this class describes the properties of a single particle.
// class Particle {
//   // setting the co-ordinates, radius and the
//   // speed of a particle in both the co-ordinates axes.
//     constructor(){
//       this.x = random(0,width);
//       this.y = random(0,height);
//       this.r = random(1,8);
//       this.xSpeed = random(-2,2);
//       this.ySpeed = random(-1,1.5);
//     }
  
//   // creation of a particle.
//     createParticle() {
//       noStroke();
//       fill('rgba(200,169,169,0.5)');
//       circle(this.x,this.y,this.r);
//     }
  
//   // setting the particle in motion.
//     moveParticle() {
//       if(this.x < 0 || this.x > width)
//         this.xSpeed*=-1;
//       if(this.y < 0 || this.y > height)
//         this.ySpeed*=-1;
//       this.x+=this.xSpeed;
//       this.y+=this.ySpeed;
//     }
  
//   // this function creates the connections(lines)
//   // between particles which are less than a certain distance apart
//     joinParticles(particles) {
//       particles.forEach(element =>{
//         let dis = dist(this.x,this.y,element.x,element.y);
//         if(dis<85) {
//           //stroke('rgba(255,255,255,0.04)');
//           line(this.x,this.y,element.x,element.y);
//         }
//       });
//     }
// }
  
//   // an array to add multiple particles
//   let particles = [];
  

function preload(){
  house  = loadImage("assets/Cinematique/debut\ et\ fin/debut/maison@4x.png");
  img2 = loadImage('assets/Subject.png');
  img3 = loadImage('assets/openBook.png');
  img4 = loadImage('assets/key.png');
  //biblio = loadImage("assets/Tuiles/Meuble/Chambre/biblio/point & click/biblio.png");
  inventory = loadImage('assets/Tuiles/Inventaire/1.png');
  menu = loadImage('assets/Tuiles/Menu.png');
  song = loadSound('assets/Bruit-musique/The Spooky House of Shady Lane.m4a');
  ventSound = loadSound('assets/Bruit-musique/ventilation\ sdb.mp3');
  steps = loadSound("assets/Bruit-musique/bruit pas.mp3");
  fontRegular = loadFont('assets/Typographie/Nevermore Nom Jeu.otf');
  fontPlay = loadFont('assets/Typographie/HeavenGate Bouton_Menu.otf');
  // bathroom1 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut1.png');
  // bathroom2 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut2.png');
  bg2 = loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/Cuisine.png');
  digicode = loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/Digicode.png ');
  letter = loadImage('assets/Lettre.png ');
  fog = loadImage('assets/fog.png');
  towel = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/1.png');
  towel2 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/2.png');
  towel3 = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/3.png');
  
  pin = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Epingle.png')
  // salon = loadImage('assets/salon haut.jpg');
  salon = loadImage('assets/salon haut2.png');
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

  cupboard2_1 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautG/1.png "); 
  cupboard2_2 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautG/2.png  "); 
  cupboard2_3 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautG/3.png "); 

  cupboard3_1 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardBasG/1.png "); 
  cupboard3_2 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardBasG/2.png  "); 

  cupboard4_1 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautD/1.png "); 
  cupboard4_2 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautD/2.png  "); 
  cupboard4_3 = loadImage("assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/PlacardHautD/3.png "); 
  
  roomWithDoll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/mur\ 1@4x.png"); 
  noDoll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/noDoll @4x.png"); 
  doll = loadImage("assets/Tuiles/Meuble/Salon/Mur/Point\ \&\ click/doll.png");
  d1 = loadImage("assets/Dialogue/Chambre1.png"); 
  d2 = loadImage("assets/Dialogue/Chambre2.png");
  d3 = loadImage("assets/Dialogue/forgot.png");
  loadingScreen1 = loadImage("assets/Tuiles/1.png"); 
  ambiance = loadSound('assets/Bruit-musique/Come-Play-with-Me.mp3');
  room = loadImage("assets/Tuiles/Meuble/Chambre/Vue\ de\ haut/Vue\ de\ haut.png ");
  biblio = loadImage("assets/Tuiles/Meuble/Chambre/Vue point and click/Vue biblio.png ");

  ventTest = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/ventTest.gif');
  vent = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Aeration/1.png");
}

function setup() {
  setFullSreen()
  canvasHeight = windowHeight;
  canvasWidth = windowWidth;
  canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.position(0,0);

  if (windowWidth===2560 && windowHeight===1600) {
    collision=world1Collision13inch;
  }else{
    collision=world1Collision;
  };

  myHeroUp.push(loadImage('assets/Tuiles/Personnages/Boy/0_U.png'));
  myHeroUp.push(loadImage('assets/Tuiles/Personnages/Boy/1_U.png')); 

  myHeroDown.push(loadImage('assets/Tuiles/Personnages/Boy/0_D.png'));
  myHeroDown.push(loadImage('assets/Tuiles/Personnages/Boy/1_D.png')); 

  myHeroLeft.push(loadImage('assets/Tuiles/Personnages/Boy/0_L.png'));
  myHeroLeft.push(loadImage('assets/Tuiles/Personnages/Boy/1_L.png')); 

  myHeroRight.push(loadImage('assets/Tuiles/Personnages/Boy/0_R.png'));
  myHeroRight.push(loadImage('assets/Tuiles/Personnages/Boy/1_R.png')); 

  hero0 = loadImage('assets/Tuiles/Personnages/Boy/Vue dessus.png');
  hero1 = loadImage('assets/Tuiles/Personnages/Boy/g.png');
  hero2 = loadImage('assets/Tuiles/Personnages/Boy/d.png');
  hero3 = loadImage('assets/Tuiles/Personnages/Boy/b.png');

  heroWithDoll = loadImage('assets/Tuiles/Personnages/Boy/HeroWithDoll.png');
  hero5 = loadImage('assets/Tuiles/Personnages/Boy/dollg.png');
  hero6 = loadImage('assets/Tuiles/Personnages/Boy/dolld.png');
  hero7 = loadImage('assets/Tuiles/Personnages/Boy/dollb.png');
  currentHeroImage=hero0;

  img2.resize(200,0);
  img3.resize(400,0);
  img4.resize(150,0);
  roue.resize(200,0);
  d1.resize(canvasWidth,0);
  d2.resize(canvasWidth,0);
  d3.resize(canvasWidth,0);

  bathroomLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut1.png'));
  bathroomLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut2.png')); 

  bathroomLightNoFog.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut-.png'));
  bathroomLightNoFog.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut+.png')); 

  candles.push(loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/bougies/1.png'));
  candles.push(loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/bougies/2.png'));
  candles.push(loadImage('assets/Tuiles/Meuble/Cuisine/Vu\ de\ haut/bougies/3.png'));

  candlesView1.push(loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/1.png'));
  candlesView1.push(loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/2.png'));
  candlesView1.push(loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/3.png'));
  candlesView1.push(loadImage('assets/Tuiles/Meuble/Cuisine/Point\ and\ click/nb/Vue\ 1/4.png'));
  

  mirrorFogLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Avec\ buee/Lavabo/Lavabo-.png'));
  mirrorFogLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Avec\ buee/Lavabo/LavaboPlus.png')); 

  mirrorNoFogLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Sans\ buee/Lavabo/Lavabo-.png'));
  mirrorNoFogLight.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Sans\ buee/Lavabo/LavaboPlus.png')); 

  runningCat.push(loadImage('assets/Tuiles/Personnages/Chat/Animation/Chat\ qui\ court1.png'));
  runningCat.push(loadImage('assets/Tuiles/Personnages/Chat/Animation/Chat\ qui\ court2.png')); 

  propAnimation.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation1.png'));
  propAnimation.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation2.png')); 
  propAnimation.push(loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation3.png')); 

  smokeAnimation.push(loadImage('assets/smoke/1.png'));
  smokeAnimation.push(loadImage('assets/smoke/2.png'));
  smokeAnimation.push(loadImage('assets/smoke/3.png'));
  smokeAnimation.push(loadImage('assets/smoke/4.png'));
  smokeAnimation.push(loadImage('assets/smoke/5.png'));
  smokeAnimation.push(loadImage('assets/smoke/6.png'));
  smokeAnimation.push(loadImage('assets/smoke/7.png'));

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

  ventVideo = createVideo('assets/Cinematique/conduit/Video/short conduit.mov');

  fightVideo = createVideo('assets/Cinematique/Bagarre/cine\ bagarre.mp4');

  doorVideo = createVideo('assets/Cinematique/Porte\ salon/short\ porte\ coffre.mov');

  endCredits = createVideo('assets/Fin du jeu.mp4');

  openingVideo = createVideo('assets/Cinematique/debut\ et\ fin/debut/cine\ debut.mp4');

  explosionVideo = createVideo('assets/Cinematique/debut\ et\ fin/maison\ detruite/maison.mp4');

  liftVideo = createVideo('assets/Cinematique/Monte-plat/short monte plat.mov');

  doorToBathroom = createVideo('assets/Cinematique/door\ room/doorToBathroom.mp4');

  openingVideo.elt.addEventListener('ended', videoEnded);
  liftVideo.elt.addEventListener('ended', liftVideoEnded);
  doorToBathroom.elt.addEventListener('ended', doorRoomVideoEnded);
  //explosionVideo.elt.addEventListener('ended', explosionvideoEnded);
  
  // Hide the video element
  video.hide();
  ventVideo.hide();
  fightVideo.hide();
  doorVideo.hide();
  endCredits.hide();
  openingVideo.hide();
  explosionVideo.hide();
  liftVideo.hide();
  doorToBathroom.hide();

  // for(let i = 0;i<width/10;i++){
  //   particles.push(new Particle());
  // }

  // pixelDensity(1);
  // frameRate(30);

  // // Scale the image to fit the canvas
  // imgWidth = canvasWidth;
  // imgHeight = canvasHeight;
  // scaledImg = createImage(imgWidth, imgHeight);
  // salon.loadPixels();
  // scaledImg.loadPixels();
  // salon.resize(imgWidth, imgHeight);

  // // Copy the pixels from the original image to the scaled image
  // for (let x = 0; x < imgWidth; x++) {
  //   for (let y = 0; y < imgHeight; y++) {
  //     let loc = (x + y * imgWidth) * 4;
  //     scaledImg.pixels[loc] = salon.pixels[loc];
  //     scaledImg.pixels[loc + 1] = salon.pixels[loc + 1];
  //     scaledImg.pixels[loc + 2] = salon.pixels[loc + 2];
  //     scaledImg.pixels[loc + 3] = salon.pixels[loc + 3];
  //   }
  // }
  // scaledImg.updatePixels();
}

function keyPressed() { 
  if (currentFrontWorld===13) {
    if (key === 'p') { 
      bathMapLoadedAfterProp=true;
    } 
  }
};

function keyReleased() {
  steps.stop();
  canPlayStepsSound=true;
}
/////////////////////////////////////////////////////   MOVEMENTS
const checkKeys = (currentMap)=>{
  if (babaDisplayed===false) {
    if (currentFrontWorld===1 || currentFrontWorld>8 && currentFrontWorld!=10) {
      if (keyIsDown(LEFT_ARROW)) {
        //stepsplaySound()
        movementCounterHero += 1;
        
        heroX -= heroSpeed;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroX += heroSpeed;
          currentHeroImage = hero1;
        }else{
          if (movementCounterHero >= 50 / heroSpeed){
            currentIndexHero += 1;
            if (currentIndexHero === myHeroLeft.length){
                currentIndexHero = 0;
            }
            currentHeroImage = myHeroLeft[currentIndexHero];
            movementCounterHero = 0;
          }
        }
        canDisplayDialogue=false;

        
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        //stepsplaySound()
        movementCounterHero += 1;
        
        heroX += heroSpeed;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroX -= heroSpeed;
          currentHeroImage = hero2;
        }else{
          if (movementCounterHero >= 50 / heroSpeed){
            currentIndexHero += 1;
            if (currentIndexHero === myHeroRight.length){
                currentIndexHero = 0;
            }
            currentHeroImage = myHeroRight[currentIndexHero];
            movementCounterHero = 0;
          }
        }
        canDisplayDialogue=false;

        
      }
      
      if (keyIsDown(UP_ARROW)) {
        //stepsplaySound()
        movementCounterHero += 1;
        heroY -= heroSpeed;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroY += heroSpeed;
          currentHeroImage = hero0;
        }else{
          if (movementCounterHero >= 50 / heroSpeed){
            currentIndexHero += 1;
            if (currentIndexHero === myHeroUp.length){
                currentIndexHero = 0;
            }
            currentHeroImage = myHeroUp[currentIndexHero];
            movementCounterHero = 0;
          }
        }
        canDisplayDialogue=false;

        
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        //stepsplaySound()
        movementCounterHero += 1;
        heroY += heroSpeed;
        if (checkCollision(collision,world1CollisionTileSize)) {
          heroY -= heroSpeed;
          currentHeroImage = hero3;
        }else{
          if (movementCounterHero >= 50 / heroSpeed){
            currentIndexHero += 1;
            if (currentIndexHero === myHeroDown.length){
                currentIndexHero = 0;
            }
            currentHeroImage = myHeroDown[currentIndexHero];
            movementCounterHero = 0;
          }
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
  setTimeout(() => {
    song.play();
  }, 500);
  
  button.remove();
  play=true;
}

function ambianceplaySound(){
  if (canPlaySound) {
    ambiance.play();
    canPlaySound=false; 
  }
}

function ventplaySound() {
  if (canPlayVentSound) {
    ventSound.play();
    canPlayVentSound=false; 
  }
}

function stepsplaySound() {
  if (canPlayStepsSound) {
    steps.play();
    canPlayStepsSound=false; 
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
            if (pointIsInObjective((j * w + j * 40) + 565, (i * h + i * 40) + 370, mouseX, mouseY, w, h)) {
                if (i === 3 && j === 0) {
                    res += "*";
                } else if (i === 3 && j === 1) {
                    res += "0";
                } else if (i === 3 && j === 2) {
                    res += "#";
                } else {
                    res += (i * 3) + j + 1;
                }
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
  text("GAME OVER",windowWidth/2-160,windowHeight/2);
  // button = createButton('Try Again ?');
  // button.center();
  // button.mousePressed(location.reload);
  // button.style('font-family', 'American Typewriter');
  gameOverBool=true;
  //localStorage.setItem("save", JSON.stringify(3));
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
  text("YOU WON",windowWidth/2-160,height/2);
  gameOverBool=true;
  wonBool=true;
  
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

function animation(animationArray, fps) {
  movementCounter += 1;
  if (movementCounter >= fps) {
    currentIndex += 1;
    if (currentIndex === animationArray.length) {
      currentIndex = 0;
    }
    currentImg = animationArray[currentIndex];
    //console.log(currentImg);
    movementCounter = 0;
    //console.log(currentBathroomImg);
  }
}

function oneTimeAnimation(animationArray, fps) {
  
  if (animationEnded) {
    return; // Exit the function if the animation has ended
  }

  movementCounterOfOneTimeAnimation += 1;
  if (movementCounterOfOneTimeAnimation >= fps) {
    currentIndexOfOneTimeAnimation += 1;
    if (currentIndexOfOneTimeAnimation === animationArray.length) {
      animationEnded = true; // Set the flag to true when the animation reaches the end
    } else {
      currentImgOfOneTimeAnimation = animationArray[currentIndexOfOneTimeAnimation];
    }
    movementCounterOfOneTimeAnimation = 0;
  }
}

function resetOneTimeAnimation() {
  currentIndexOfOneTimeAnimation = 0;
  movementCounterOfOneTimeAnimation = 0;
  animationEnded = false;
  currentImgOfOneTimeAnimation = undefined;
}

function videoEnded() {
  console.log("The video has finished playing.");
  localStorage.setItem("save", JSON.stringify(2));
      
  localStorage.setItem("collisionSave", JSON.stringify(world1Collision));
  inventoryCanvas();
}

function liftVideoEnded() {
  localStorage.setItem("frontSave", JSON.stringify(20));
  localStorage.setItem("collisionSave", JSON.stringify(world4Collision));

  currentFrontWorld=20;
  collision=world4Collision;
}

function doorRoomVideoEnded() {
  localStorage.setItem("frontSave", JSON.stringify(50));
  localStorage.setItem("collisionSave", JSON.stringify(world2Collision));

  currentFrontWorld=50;
  collision=world2Collision;
}



// function explosionvideoEnded() {
//   endCredits.play();
//   image(endCredits, -80, 0, canvasWidth, canvasHeight);
// }




let dollFound = JSON.parse(localStorage.getItem("dollFound"));
// Appelé en continue après le setup
function draw() {
  ambiance.setVolume(volume);
  imageMode(CORNER);
  //console.log(currentFrontWorld,currentWorld);
  checkCollision(collision,world1CollisionTileSize)

  if (wonBool) {
    setTimeout(() => {
      explosionVideo.play();
      image(explosionVideo, -80, 0, canvasWidth, canvasHeight);
    }, 5000);
    setTimeout(() => {
      explosionvideoEnded=true;
    }, 13000);
    if (explosionvideoEnded) {
      endCredits.play();
      image(endCredits, -80, 0, canvasWidth, canvasHeight);
    }
  }

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
  }else if (currentFrontWorld===20) {
    canMove5++;
    if (canMove5<=1) {
      heroX=2*world1TileSize;
      heroY=4*world1TileSize-60;
    }
  }else if (currentFrontWorld===50) {
    console.log("test");
    canMove6++;
    if (canMove6<=1) {
      heroX=9*world1TileSize;
      heroY=6*world1TileSize;
    }
  }
  
  //console.log(currentFrontWorld); 
  let save = JSON.parse(localStorage.getItem("save"));
  if (save===2) {
    ambianceplaySound();
    canvasWidth = windowWidth-160;
    if (canvasResised===false) {
      resizeCanvas(canvasWidth, windowHeight);
      canvasResised=true;
    }
    canvas.position(160,0);
  }
  
  if (gameOverBool===false) {
    if (currentFrontWorld===1 && save===2) {
      localStorage.setItem("frontSave", JSON.stringify(1));
      background(room);
      // for(let i = 0;i<particles.length;i++) {
      //   particles[i].createParticle();
      //   particles[i].moveParticle();
      //   particles[i].joinParticles(particles.slice(i));
      // }
    }

    if (currentFrontWorld===50) {
      if (bathMapLoaded===false) {
        currentImg=loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut1.png');
        bathMapLoaded=true;
      }

      if (bathMapLoadedAfterProp) {
        //console.log(currentImg);
        if (currentImg!==undefined) {
          animation(bathroomLightNoFog,15);
          if (currentImg.width!==128) {
            background(currentImg);
          }else{
            currentImg=loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Vue\ de\ haut/bathroom/Vue\ de\ haut-.png');
            background(currentImg);
          }
        } 
      }else{
        animation(bathroomLight,15);
        background(currentImg);
      }
      
      
    }

    if (currentFrontWorld===5 && bool) {
      imageMode(CORNER);
      background(biblio);
    }
  
    if (currentFrontWorld===20) {
      background(salon)
      // image(scaledImg, 0, 0);
      // loadPixels();
      // scaledImg.loadPixels();
      // for (let x = 0; x < imgWidth; x++) {
      //   for (let y = 0; y < imgHeight; y++) {
      //     let loc = (x + y * imgWidth) * 4;
      //     let r, g, b;
      //     r = scaledImg.pixels[loc];
      //     g = scaledImg.pixels[loc + 1];
      //     b = scaledImg.pixels[loc + 2];

      //     let maxdist = 200;
      //     let d = dist(x, y, heroX+75, heroY+75);
      //     let adjustbrightness = (255 * (maxdist - d)) / maxdist;
      //     r += adjustbrightness;
      //     g += adjustbrightness;
      //     b += adjustbrightness;
      //     r = constrain(r, 0, 190);
      //     g = constrain(g, 0, 255);
      //     b = constrain(b, 0, 255);

      //     let pixloc = (y * width + x) * 4;
      //     pixels[pixloc] = r;
      //     pixels[pixloc + 1] = r;
      //     pixels[pixloc + 2] = r;
      //     pixels[pixloc + 3] = 255;
      //   }
      // }
      // updatePixels();
    }
  
    if (currentFrontWorld===21) {
      background(entrance);
    }
  
    if (currentFrontWorld===12) {
      background(digicode);
    }
    
    if (currentFrontWorld===25 && bool) {
      background(mainKitchenFurniture);
      animation(candlesView1,10);
      if (currentImg!==0) {
        background(currentImg);
      }
      
    }
    if (currentFrontWorld===27) {
      background(secondaryKitchenFurniture);
    }
    if (currentFrontWorld===26) {
      background(kitchenWall);
    }
    
    if (currentFrontWorld===13 && bool) {
      background(towel);
    }
    //console.log(dollFound);
    if (currentFrontWorld===28 && bool && dollFound!==true) {
      background(roomWithDoll);
    }else if(currentFrontWorld===28 && bool && dollFound===true){
      background(noDoll);
    }
    
    let pinFound = JSON.parse(localStorage.getItem("pinFound"));
    fogImg = JSON.parse(localStorage.getItem("fogImg"));
    if (currentFrontWorld===14 && bool && typeof fogImg !== 'boolean') {
      animation(mirrorFogLight,15);
      background(currentImg);
    }else if (currentFrontWorld===14 && bool && pinFound!==true && typeof fogImg === 'boolean') {
      animation(mirrorNoFogLight,15);
      background(currentImg);
      image(pin,windowWidth/2+250,windowHeight/2+25,100,100);
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
    }
  
    if (currentFrontWorld===9) {
      background(bg2);
      animation(candles,10);
      if (currentImg!==0) {
        image(currentImg,0,0,canvasWidth,canvasHeight);
      }
    }
  }
  
  ///////////////////////////////////////////////////// OPENING
  if (save<1 && play) {
    setTimeout(() => {
      video.play();
      image(video, 0, 0, canvasWidth, canvasHeight);
      setTimeout(() => {
        localStorage.setItem("save", JSON.stringify(1));
      }, 10000);
    }, 500);
  }

  if (save===1) {
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

    animation(runningCat,13);
    //console.log(currentImg);
    if (currentImg!==0) {
      image(currentImg,canvasWidth/2+100,canvasHeight/2,200,100)
    }
    

    if (progress < 100) {
      progress += 0.1;
    }else{
      // openingVideoBool = true
      // console.log(progress);
      openingVideo.play();
      image(openingVideo,0,0,canvasWidth,canvasHeight)
      // setTimeout(() => {
        
      // }, 25000);
      
    }

  }
  ////////////////////////////////////////////////////////// 

  ////////////////////////////////////////////////////////// DRAW HERO & BOSS FIGHT
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
        if (playFightVideo) {
          fightVideoPlaying = true;
          fightVideo.play();
          image(fightVideo, 0, 0, canvasWidth, canvasHeight);
          setTimeout(() => {
            playFightVideo=false;
            fightVideoPlaying=false;
            fightVideoEnded=true;
          }, 20000);
        }
        

        if (fightVideoEnded) {
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
        }
        

        if (babaDisplayed && roundRandomNbforbaba===0) {
          if (currentHeroImage!==hero6) {
            
            animationEnded=false;

            if (health>50) {
              i+=5;
            }else if(health<=50){
              i+=10;
            }else if (health<=25) {
              i+=15;
            }
            
            babaX=9*world1TileSize-i;
            babaY=3*world1TileSize+20;
            
            image(baba, babaX, babaY, babaWidth, babaHeight);

            oneTimeAnimation(smokeAnimation,5)
            //console.log(currentImgOfOneTimeAnimation);
            if (currentImgOfOneTimeAnimation!==0 && currentImgOfOneTimeAnimation!==undefined) {
              image(currentImgOfOneTimeAnimation,babaX, babaY, babaWidth, babaHeight)
            }

            if (babaX<=heroX) {
              babaX=0;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random(1,2);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
                resetOneTimeAnimation();
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random(1, 2);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
            resetOneTimeAnimation();
          }
          
        }else if (babaDisplayed && roundRandomNbforbaba===1) {
          if (currentHeroImage!==hero7) {
            if (health>50) {
              i+=5;
            }else if(health<=50){
              i+=10;
            }else if (health<=25) {
              i+=15;
            }
            babaX=5*world1TileSize+20;
            babaY=6*world1TileSize-i;

            image(baba2, babaX, babaY, babaWidth, babaHeight);

            oneTimeAnimation(smokeAnimation,5)
            //console.log(currentImgOfOneTimeAnimation);
            if (currentImgOfOneTimeAnimation!==0 && currentImgOfOneTimeAnimation!==undefined) {
              image(currentImgOfOneTimeAnimation,babaX, babaY, babaWidth, babaHeight)
            }
            if (babaY<=heroY) {
              babaY=6*world1TileSize;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random([0, 2]);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
                resetOneTimeAnimation();
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random([0, 2]);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
            resetOneTimeAnimation();
          }
        }else if (babaDisplayed && roundRandomNbforbaba===2){
          if (currentHeroImage!==hero5) {
            if (health>50) {
              i+=5;
            }else if(health<=50){
              i+=10;
            }else if (health<=25) {
              i+=15;
            }
            babaX=1*world1TileSize+i;
            babaY=3*world1TileSize+20;
            
            image(baba1,babaX ,babaY , babaWidth, babaHeight);
            
            oneTimeAnimation(smokeAnimation,5)
            //console.log(currentImgOfOneTimeAnimation);
            if (currentImgOfOneTimeAnimation!==0 && currentImgOfOneTimeAnimation!==undefined) {
              image(currentImgOfOneTimeAnimation,babaX, babaY, babaWidth, babaHeight)
            }
            if (babaX>=heroX) {
              babaX=1*world1TileSize;
              nbOfcollisionWithBaba++
              if (nbOfcollisionWithBaba===3) {
                gameOver();
              }else{
                randomNbforbaba = random(0, 1);
                roundRandomNbforbaba = round(randomNbforbaba);
                i=0;
                resetOneTimeAnimation();
              }
            }
          }else{
            decreaseHealth(1);
            randomNbforbaba = random(0, 1);
            roundRandomNbforbaba = round(randomNbforbaba);
            i=0;
            resetOneTimeAnimation();
          }
          
        }
      }

      // if (currentFrontWorld<12 && currentFrontWorld!==9) {
      //   drawFront(worlds[currentFrontWorld],
      //   tileDictionnaries[currentFrontWorld],
      //   worldsTileSizes[currentFrontWorld]);
      // }
      
      
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
          setTimeout(() => {
            background(towel3);
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
          propTurning = true;
        }
      }
    }
    if (propTurning) {
      ventplaySound();
      if (towelMapLoaded===false) {
        currentImg = loadImage("assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 1/Tuiles/Ventilation1.png");
        towelMapLoaded=true;
      }
      
      animation(propAnimation,5)
      image(currentImg,canvasWidth/2+320,-32,240,240);
    }
  }else if (currentFrontWorld===14) {
    if (mouseIsPressed === true) {
      if (pointIsInObjective(windowWidth/2+250,windowHeight/2+25,mouseX,mouseY, 100,100)) {
        localStorage.setItem("pinFound", JSON.stringify(true));
        bool=false;
        animation(mirrorNoFogLight,15);
        background(currentImg);
      }
    }
  }else if (currentFrontWorld===15) {
    canDisplayPcDialogue=true;
    let dollFound = JSON.parse(localStorage.getItem("dollFound"));
    if (dollFound) {
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
              doorVideoBool = true;
              setTimeout(() => {
                localStorage.setItem("frontSave", JSON.stringify(21));
                localStorage.setItem("collisionSave", JSON.stringify(world5Collision));

                currentFrontWorld=21;
                collision=world5Collision;
              }, 4000);
              
            }
          }
        }
      }
    }
    if (doorVideoBool) {
      doorVideo.play();
      image(doorVideo, 0, 0, canvasWidth, canvasHeight);
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

      if (pointIsInObjective(canvasWidth/2-500, 0, mouseX,mouseY, 200, 260)) {
        bool=false;
        background(cupboard2_1);
          setTimeout(() => {
            background(cupboard2_2);
          }, 100);
          setTimeout(() => {
            background(cupboard2_3);
          }, 200);
      }

      if (pointIsInObjective(canvasWidth/2+250, 0, mouseX,mouseY, 200, 260)) {
        bool=false;
        background(cupboard4_1);
          setTimeout(() => {
            background(cupboard4_2);
          }, 100);
          setTimeout(() => {
            background(cupboard4_3);
          }, 200);
      }

      if (pointIsInObjective(200, canvasHeight/2+50, mouseX,mouseY, 200, 260)) {
        bool=false;
        background(cupboard3_1);
          setTimeout(() => {
            background(cupboard3_2);
          }, 100);
          setTimeout(() => {
            background(cupboard3_3);
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
          testBool = true;
        }
      }
    }
    
  }else if (currentFrontWorld===60) {
    if (bool) {
      background(vent);
    }
    if (pinClicked && ventAnimationBool) {
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
          ventSound.stop();
          bool=false;
          //image(ventTest, 0, 0, canvasWidth, canvasHeight);
          ventVideo.play();
          image(ventVideo, 0, 0, canvasWidth, canvasHeight);
          setTimeout(() => {
            console.log("c");
            localStorage.setItem("frontSave", JSON.stringify(9));
            localStorage.setItem("collisionSave", JSON.stringify(world3Collision));
            
            currentFrontWorld=9;
            collision=world3Collision;
            localStorage.setItem("pinFound", JSON.stringify(false));
            bool = true;
          }, 10000);
          //runAnim=false;
        }
      }
    }
  }

  if (res==="7452") {
    passwordFound=true;
    //localStorage.setItem("passwordFound", JSON.stringify(true));
    //fill('green');
    liftVideo.play();
    image(liftVideo,0,0,canvasWidth,canvasHeight);
  }else if (res.length>4) {
    res="";
    fill('red');
  }
  let digicodeNumbers = addLetterSpacing(res, 15, '\u2007');
  if (currentFrontWorld===12 && !passwordFound) {
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
  }

  if (testMenu) {
    image(menu,0,0,canvasWidth,canvasHeight+50);
    if (sliderDrawn===false) {
      let slider1;
      let slider2;
      //console.log("slider");
      slider1 = createSlider(-100, 100, 0);
      slider1.position(canvasWidth/2, canvasHeight/2+50);
      slider1.size(200);
      slider1.id("slider1");
      element1 = document.getElementById("slider1");
      
      slider2 = createSlider(0, 10, 5);
      slider2.position(canvasWidth/2, 250);
      slider2.size(200);
      slider2.id("slider2");
      element2 = document.getElementById("slider2");
      sliderDrawn=true;
    }
    let brightness = slider1.value;
    adjustBrightness(parseInt(brightness));
    localStorage.setItem("brightness", JSON.stringify(brightness));
    volume = parseInt(slider2.value);
    //localStorage.setItem("volume", JSON.stringify(volume));
  }

  let brightness = JSON.parse(localStorage.getItem("brightness"));
  if (brightness !== null) {
    adjustBrightness(parseInt(brightness));
  }

  if (currentFrontWorld===15 && redLight) {
    let dollFound = JSON.parse(localStorage.getItem("dollFound"));
    if (canDisplayPcDialogueLRDoor && typeof dollFound !== 'boolean'){
      image(d3,-40,canvasHeight-120);
      setTimeout(() => {
        canDisplayPcDialogueLRDoor=false
      }, 2000);
    }
  }
  
  if (!fightVideoPlaying) {
    checkKeys(currentWorld);
  }

  if (testBool) {
    doorToBathroom.play();
    image(doorToBathroom,0,0,canvasWidth,canvasHeight);
  }
  
  //fill("red");
  //rect(world1TileSize*2+1,world1TileSize*1+1,100,100)
}

let inventoryCanvas = () => {
  let s2 = function( sketch ) {

    sketch.preload = function(){
      theKey = loadImage('assets/key.png');
      pin = loadImage('assets/Tuiles/Meuble/Salle\ de\ bain/Point\ and\ click/Vue\ 2/Epingle.png')
    }
  
    sketch.setup = function() {
      let canvas2 = sketch.createCanvas(160, windowHeight);
      canvas2.id('inventory');
      canvas2.position(0,0);
    }

    let pointIsInObjective = function(Nb1,Nb2,x,y,w,h){
      if ((x>Nb1) && (x<Nb1+w)){
         if ((y>Nb2) && (y<Nb2+h)){
             return true;
         }    
       }
        return false;
     
    };

    sketch.mouseClicked=function() {
      console.log("ok");
      if (!testMenu) {
        if(pointIsInObjective(10, 100,sketch.mouseX,sketch.mouseY, 130,50)){
          console.log("ok");
          testMenu = true;
        }
        
      }else if (testMenu) {
        console.log("test");
        if(pointIsInObjective(canvasWidth/2-250, canvasHeight-200,  mouseX,mouseY, 500,200)){
          element1.remove();
          element2.remove();
          testMenu = false;
          sliderDrawn=false;
        }
      }
    }

    document.getElementsByTagName("body")[0].addEventListener("mouseup", ()=>{
      setFullSreen();
      if (canvasResised3===false) {
        setTimeout(() => {
          canvasHeight = windowHeight;
          sketch.resizeCanvas(160, canvasHeight);
          canvasResised3=true;
        }, 500);
      }
      screenResised=true;
    });
    
    localStorage.setItem("keyImgClicked", JSON.stringify(false));
    localStorage.setItem("pinImgClicked", JSON.stringify(false));
    localStorage.setItem("keyFound", JSON.stringify(false));
    sketch.draw = function() {
      sketch.background(54,50,45);
      sketch.imageMode(CORNER);
      sketch.image(inventory, 0, 0);

      if (sketch.mouseIsPressed===true && currentFrontWorld===7) {
        //console.log(sketch.mouseX,sketch.mouseY);
        if (pointIsInObjective(30, 470,sketch.mouseX,sketch.mouseY,100,40)) {
          localStorage.setItem("keyImgClicked", JSON.stringify(true));
        }
        
      }
      
      if (sketch.mouseIsPressed===true && currentFrontWorld===60) {
        if (pointIsInObjective(30, 470,sketch.mouseX,sketch.mouseY,100,40)) {
          localStorage.setItem("pinImgClicked", JSON.stringify(true));
        }
      }
      
      let keyFound = JSON.parse(localStorage.getItem("keyFound"));
      let keyImgClicked = JSON.parse(localStorage.getItem("keyImgClicked"));
      if (keyFound && keyImgClicked===false) {
        sketch.image(theKey,  30, 470,100,40);
      }
      let pinFound = JSON.parse(localStorage.getItem("pinFound"));
      let pinImgClicked = JSON.parse(localStorage.getItem("pinImgClicked"));

      //console.log(pinFound,pinImgClicked);
      if (pinFound && pinImgClicked===false) {
        sketch.image(pin,  15, 420);
      }
      let dollFound = JSON.parse(localStorage.getItem("dollFound"));
      if (dollFound) {
        sketch.image(doll,  28, 440,100,100);
      }

      if (gameOverBool) {
        sketch.fill(0);
        sketch.rect(0,0,160,windowHeight)
      };
      
      //sketch.rect(565,370,90,99);
    }
  };
  
  new p5(s2);

};

let save = JSON.parse(localStorage.getItem("save")); 

if (save>=1) {
  inventoryCanvas();
}
