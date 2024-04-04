let smAndreea = {
    x: 500,
    y: 300,
    direction: 1
};

let smAndreeaX = 500;
let smAndreeaY = 300;


let directionXAndreea = 1;

function checkLimtisSMAndreea() {
    if(smAndreea.x >= tableWidth)
     smAndreea.direction *= -1;

     smAndreea.x += smAndreea.directionX;
}
   function smileyfaceAndreea(x, y){
    // body
    fill("white");
    stroke("blue");
    circle(x, y, 50); 
    
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



