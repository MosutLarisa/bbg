let smAmaris = {
    x: 300,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    speedX: 2,
    speedY: 2
};

function checkLimitsSMAmaris() {
    if (smAmaris.x >= tableWidth - smAmaris.ray || smAmaris.x <= 0 + smAmaris.ray) {
        smAmaris.directionX *= -1;
    }

    smAmaris.x += smAmaris.directionX * smAmaris.speedX;

    if (smAmaris.y <= 0 + smAmaris.ray) {
        smAmaris.directionY *= -1;
    }

    if (smAmaris.y >= pdAmaris.y - smAmaris.ray &&
        smAmaris.y <= pdAmaris.y + pdAmaris.heigth &&
        smAmaris.x >= pdAmaris.x - smAmaris.ray &&
        smAmaris.x <= pdAmaris.x + pdAmaris.width + smAmaris.ray) {
        smAmaris.directionY *= -1;
    }
    smAmaris.y += smAmaris.directionY * smAmaris.speedY;

}

function smilyFaceAmaris(x, y) {
    //body
    fill("#F5E4B0");
    stroke("black");
    circle(x, y, smAmaris.ray * 2);

    //eyes
    stroke("green");
    ellipse(x - (smAmaris.ray * 2) / 5, y - (smAmaris.ray * 2) / 10, (smAmaris.ray * 2) / 5, (smAmaris.ray * 2) / 10);
    ellipse(x + (smAmaris.ray * 2) / 5, y - (smAmaris.ray * 2) / 10, (smAmaris.ray * 2) / 5, (smAmaris.ray * 2) / 10);
    //eye pupils
    stroke("black");
    fill("black");
    circle(x + (smAmaris.ray * 2) / 5, y - (smAmaris.ray * 2) / 10, (smAmaris.ray * 2) / 16);
    circle(x - (smAmaris.ray * 2) / 5, y - (smAmaris.ray * 2) / 10, (smAmaris.ray * 2) / 16);
    //mounth
    stroke("red");
    fill("black");
    arc(x, y + (smAmaris.ray * 2) / 5, (smAmaris.ray * 2) / 2.5, (smAmaris.ray * 2) / 10, (smAmaris.ray * 2) * 0, Math.PI);
}