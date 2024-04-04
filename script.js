let tableWidth = 700;
let tableHight = 500;

function setup() {
    createCanvas(tableWidth, tableHight);
}

function draw() {
    background("#009688");

    checkLimtisSMAndreea();
    checkLimitsSMAmaris();
    checkLimitsSMLari();

    smilyFaceAmaris(smAmaris.x , smAmaris.y);
    smileyfaceAndreea(smAndreea.x, smAndreea.y);
    smilyFaceLari(smLari.x , smLari.y);
    createPaddleAndreea();

    createPaddleLari();

}
  
