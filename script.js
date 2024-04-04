let tableWidth = 700;
let tableHight = 500;

function setup() {
    createCanvas(tableWidth, tableHight);
}

function draw() {
    background("gray");

    checkLimtisSMAndreea();
    checkLimitsSMAmaris();
    checkLimitsSMLari();

    smileyfaceAndreea(smAndreeaX, smAndreeaY);
    smilyFaceAmaris(smAmarisX , smAmarisY);
    smilyFaceLari(smLari.x , smLari.y);

}
