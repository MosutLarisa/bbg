let smLariX = 400;
let smLariY = 300;

let directionLariX= 1;

function checkLimitsSMLari() {
    if(smLariX >= tableWidth) 
        directionLariX *= -1;

    smLariX += directionLariX;
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