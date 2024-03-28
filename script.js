let tableWidth = 700;
let tableHight = 500;

let smAmarisX =300;
let smAmarisY =300;

let directionX= 1;
let directionXAmaris=1;

let smLariX = 400;
let smLariY = 300;

function setup() {
    createCanvas(tableWidth, tableHight);
}



function draw() {
    background("gray");

    checkLimitsSMAmaris();
    checkLimitsSMLari();
    
    smileyfaceAndreea(500, 300);
    smilyFaceAmaris(smAmarisX , smAmarisY);
    smilyFaceLari(smLariX , smLariY);

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



function checkLimitsSMAmaris(){
    if (smAmarisX >= 700)
        directionXAmaris *= -1;
    smAmarisX += directionXAmaris;     
}

function smilyFaceAmaris(x,y){
  //body
  fill("white");
  stroke("black");
  circle(x, y, 50);

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

function checkLimitsSMLari() {
    if(smLariX >= tableWidth) 
        directionX *= -1;

    smLariX += directionX;
}
   
function smilyFaceLari(x,y){
        //body
        fill("white");
        stroke("black");
        circle(x, y, 50);
        
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



