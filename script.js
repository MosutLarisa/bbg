function setup() {
    createCanvas(700, 500);
}



function draw() {
    background("gray");
    smileyfaceAndreea();
    smilyFaceAmaris()
    smilyFaceLari(400, 300);
}


   function smileyfaceAndreea(){
    // body
    fill("white");
    stroke("blue");
    circle(600, 300, 50); // Adjusted x-coordinate to 600
    
    // eyes
    stroke("purple");
    ellipse(590, 295, 10, 5); // Adjusted x-coordinate to 590
    ellipse(610, 295, 10, 5); // Adjusted x-coordinate to 610
    
    // eye pupils
    stroke("black");
    fill("black")
    circle(590, 295, 3); // Adjusted x-coordinate to 590
    circle(610, 295, 3); // Adjusted x-coordinate to 610
    
    // mouth
    stroke("pink");
    fill("black");
    arc(600, 310, 20, 7, 0, Math.PI); // Adjusted x-coordinate to 600
    
    // cheeks
    stroke("red")
    fill("pink");
    circle(620, 305, 7); // Adjusted x-coordinate to 620
    circle(580, 305, 7); // Adjusted x-coordinate to 580
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



