let smLari = {
    x: 400,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    speedX: 5,
    speedY: 5
};

function checkLimitsSMLari() {
    if(smLari.x >= tableWidth - smLari.ray || smLari.x <=0 + smLari.ray) {
        smLari.directionX *= -1;}

    smLari.x += smLari.directionX * smLari.speedX;    
    
    if(smLari.y >= tableHight - smLari.ray || smLari.y <=0 + smLari.ray) {
        smLari.directionY *= -1;}

    smLari.y += smLari.directionY * smLari.speedY;    
    
}
   
function smilyFaceLari(x,y){
        //body
        fill("white");
        stroke("black");
        circle(x, y, smLari.ray * 2);
        
        //eyes
        //circle(410, 295, 5);
        stroke("blue");
        ellipse(x-10, y-5, 10, 5);
        ellipse(x+10, y-5, 10, 5);
        //eye pupils
        stroke("black");
        fill("black")
        circle(x-10, y-5, 3);
        circle(x+10, y-5, 3);
    
        //mouth
        stroke("red");
        fill("black");
        arc(x, y+10 , 20, 7, 0, Math.PI);
    
        //cheeks
        stroke("pink")
        fill("pink");
        circle(x+20, y+5, 7);
        circle(x-20,y+5, 7);
    
    
}
