function setup() {
    createCanvas(800, 600);
}



function draw() {
    background("gray");
    smileyfaceAndreea();
}


    function smileyfaceAndreea(){
    //body
    fill("black");
    stroke("blue");
    circle(400, 400, 50);
    
    //eyes
    
    stroke("purple");
    ellipse(390, 295, 10, 5);
    ellipse(410, 295, 10, 5);
    //eye pupils
    stroke("black");
    fill("black")
    circle(390, 295, 3);
    circle(410, 295, 3);

    //mouth
    stroke("pink");
    fill("black");
    arc(400, 310, 20, 7, 0, Math.PI);

    //cheeks
    stroke("red")
    fill("pink");
    circle(420, 305, 7);
    circle(380, 305, 7);
    }


