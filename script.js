function setup() {
    createCanvas(700, 500);
}

function draw() {
  background("brown");
  smilyFaceAmaris()
}
function smilyFaceAmaris(){
  //body
  fill("white");
  stroke("black");
  circle(300, 300, 50);

  //eyes
 // circle( 390, 295, 5);
  //circle( 410, 295, 5);
    stroke("green");
    ellipse(290, 295, 10, 5);
    ellipse(310, 295, 10, 5);
//eye pupils
    stroke("black");
    fill("black");
    circle( 310, 295, 3);
    circle( 290, 295, 3);
//mounth
    stroke("red");
    fill("black");
    arc(300, 310, 20, 5, 0, Math.PI);
}
    background("gray");
    smilyFaceLari();
}

function smilyFaceLari(){
        //body
        fill("white");
        stroke("black");
        circle(400, 300, 50);
        
        //eyes
        //circle(410, 295, 5);
        stroke("blue");
        ellipse(390, 295, 10, 5);
        ellipse(410, 295, 10, 5);
        //eye pupils
        stroke("black");
        fill("black")
        circle(390, 295, 3);
        circle(410, 295, 3);
    
        //mouth
        stroke("red");
        fill("black");
        arc(400, 310, 20, 7, 0, Math.PI);
    
        //cheeks
        stroke("pink")
        fill("pink");
        circle(420, 305, 7);
        circle(380, 305, 7);
    
    
}



