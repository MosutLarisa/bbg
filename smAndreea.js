let smAndreea = {
    x: 500,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    
    speedX: 7,
    speedY: 7
};


function checkLimtisSMAndreea() {
    if(smAndreea.x >= tableWidth - smAndreea.ray ||  smAndreea.x <=0 + smAndreea.ray)
     smAndreea.directionX *= -1;

     smAndreea.x += smAndreea.directionX * smAndreea.speedX;   
     
    if(smAndreea.y >= tableHight - smAndreea.ray||  smAndreea.y <=0 + smAndreea.ray)
     smAndreea.directionY *= -1;

     smAndreea.y += smAndreea.directionY * smAndreea.speedY;

}
   function smileyfaceAndreea(x, y){
    // body
    fill("white");
    stroke("blue");
    circle(x, y, smAndreea.ray * 2); 
    
    // eyes
    stroke("purple");
    ellipse(x-10, y-5, 10, 5); 
    ellipse(x+10, y-5, 10, 5); 
    
    // eye pupils
    stroke("black");
    fill("black")
    circle(x-10, y-5, 3); 
    circle(x+10, y-5, 3);
    
    // mouth
    stroke("pink");
    fill("black");
    arc(x, y+10, 20, 7, 0, Math.PI); 
    
    // cheeks
    stroke("red")
    fill("pink");
    circle(x+20, y+5, 7); 
    circle(x-20, y+5, 7);
}



