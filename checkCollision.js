function checkCollision(gameBoard,tileSize) {
  for (let y = 0; y < gameBoard.length; y++) {
    const currentLine = gameBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue===1) {
        if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
          return  true
        } 
      }
      
      if (currentFrontWorld===1) {
        if (currentTileValue===3 || currentTileValue===4 || currentTileValue===5 || currentTileValue===6 || currentTileValue===7 || currentTileValue===8) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            return  true
          }else if (rectIsInRect(heroX+20,heroY+20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize) || rectIsInRect(heroX-20,heroY-20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;
          }
        }
      }

      if (currentFrontWorld===50) {
        //localStorage.setItem("worldSave", JSON.stringify(3));
        if (currentTileValue===13) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;
          } 
        }
        if (currentTileValue===14 || currentTileValue===60) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            return  true
          }else if (rectIsInRect(heroX+20,heroY+20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize) || rectIsInRect(heroX-20,heroY-20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;
          } 
        }
      }

      let passFound = JSON.parse(localStorage.getItem("passwordFound"));
      if (currentFrontWorld===9) {
        if (currentTileValue===12) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            return  true
          }else if (rectIsInRect(heroX+20,heroY+20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize) || rectIsInRect(heroX-20,heroY-20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;

            if (passFound===true) {
              localStorage.setItem("frontSave", JSON.stringify(20));
              localStorage.setItem("collisionSave", JSON.stringify(world4Collision));

              currentFrontWorld=20;
              collision=world4Collision;
            }
            
          } 
        }else if (currentTileValue===25 || currentTileValue===26 || currentTileValue===27 ) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            return  true
          }else if (rectIsInRect(heroX+20,heroY+20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize) || rectIsInRect(heroX-20,heroY-20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;
          } 
        }
      }

      if (currentFrontWorld===20) {
        if (currentTileValue===15 || currentTileValue===28) {
          if (rectIsInRect(heroX,heroY,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            return  true
          }else if (rectIsInRect(heroX+20,heroY+20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize) || rectIsInRect(heroX-20,heroY-20,heroWidth,heroHeight,tileSize*x+1,tileSize*y+1,tileSize,tileSize)) {
            txt = true;
            tile=currentTileValue;
          } 
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
      //print("Par la gauche et le centre");
      return true;
    }
    if (pointIsInRect(xP+wP, yP,xR,yR,wR,hR)){
      //print("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xP+wP, yP + hP,xR,yR,wR,hR)){
      //print("Par la gauche et le haut");
      return true;
    }
    
    
  }

  // Arrivée par la droite
  if (xP < xR + wR){
    if (pointIsInRect(xP, yP + hP/2,xR,yR,wR,hR)){
      //print("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xP, yP + hP,xR,yR,wR,hR)){
      //print("Par la droite et le haut");
      return true;
    }
    if (pointIsInRect(xP, yP,xR,yR,wR,hR)){
      //print("Par la droite et le bas");
      return true;
    }
    
  }

   // Arrivée par le bas
   if (yP < yR + hR){

    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      //print("Par la bas et le centre : Effet tête du personnage qui passe sur la maison");
      return true;
    }

    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      //print("Par la bas et la gauche");
      return true;
    }
    if (pointIsInRect(xP + wP/2, yP+hP/2, xR,yR,wR,hR)){
      //print("Par le bas et la droite");
      return true;
    }
   }

   // Arrivée par le haut
   if (yP + hP > yR){
    if (pointIsInRect(xP + wP / 2, yP+hP,xR,yR,wR,hR)){
      //print("Par le haut et le centre");
      return true;
    }
    
    if (pointIsInRect(xP, yP+hP, xR,yR,wR,hR)){
      //print("Par le haut et la gauche");
      return true;
    }
    if (pointIsInRect(xP + wP, yP+hP,xR,yR,wR,hR)){
      //print("Par le bas et la droite");
      return true;
    }
   }

};

//,xImaginaryPoint,yImaginaryPoint