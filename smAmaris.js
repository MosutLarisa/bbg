let smAmaris = {
    x: 300,
    y: 300,
    ray: 25,
    directionX : 1,
    directionY : 1,
    speedX: 6,
    speedY: 6
};

function checkLimitsSMAmaris(){
    if (smAmaris.x >= tableWidth- smAmaris.ray || smAmaris.x <=0 + smAmaris.ray)
        smAmaris.directionX *= -1;
        smAmaris.x += smAmaris.directionX * smAmaris.speedX;


     if (smAmaris.y >= tableHight- smAmaris.ray || smAmaris.y <=0 + smAmaris.ray)
        smAmaris.directionY *= -1;
        smAmaris.y += smAmaris.directionY * smAmaris.speedY;
}

function smilyFaceAmaris(x,y){
  //body
  fill("white");
  stroke("black");
  circle(x, y, smAmaris.ray*2);

  //eyes
 // circle( 390, 295, 5);
  //circle( 410, 295, 5);
    stroke("green");
    ellipse(x-10, y-5, 10, 5);
    ellipse(x+10, y-5, 10, 5);
//eye pupils
    stroke("black");
    fill("black");
    circle( x+10, y-5, 3);
    circle( x-10, y-5, 3);
//mounth
    stroke("red");
    fill("black");
    arc(x, y+10, 20, 5, 0, Math.PI);
}