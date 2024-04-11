let smLari = {
    x: 400,
    y: 300,
    ray: 25,
    directionX: 1,
    directionY: 1,
    speedX: 3,
    speedY: 3
};

function checkLimitsSMLari() {
    if (smLari.x >= tableWidth - smLari.ray || smLari.x <= 0 + smLari.ray) {
        smLari.directionX *= -1;
    }

    smLari.x += smLari.directionX * smLari.speedX;

    if (smLari.y <= 0 + smLari.ray) {
        smLari.directionY *= -1;
    }

    if (smLari.y >= pdLari.y - smLari.ray &&
        smLari.y <= pdLari.y + pdLari.heigth &&
        smLari.x >= pdLari.x - smLari.ray &&
        smLari.x <= pdLari.x + pdLari.width + smLari.ray) {
        smLari.directionY *= -1;
    }
    smLari.y += smLari.directionY * smLari.speedY;
}

function smilyFaceLari(x, y) {
    //body
    fill("lightblue");
    stroke("black");
    circle(x, y, smLari.ray * 2);

    //eyes
    //circle(410, 295, 5);
    stroke("blue");
    ellipse(x - (smLari.ray * 2) / 5, y - (smLari.ray * 2) / 10, (smLari.ray * 2) / 5, (smLari.ray * 2) / 10);
    ellipse(x + (smLari.ray * 2) / 5, y - (smLari.ray * 2) / 10, (smLari.ray * 2) / 5, (smLari.ray * 2) / 10);
    //eye pupils
    stroke("black");
    fill("black")
    circle(x - (smLari.ray * 2) / 5, y - (smLari.ray * 2) / 10, (smLari.ray * 2) / 16);
    circle(x + (smLari.ray * 2) / 5, y - (smLari.ray * 2) / 10, (smLari.ray * 2) / 16);

    //mouth
    stroke("red");
    fill("black");
    arc(x, y + (smLari.ray * 2) / 5, (smLari.ray * 2) / 2.5, (smLari.ray * 2) / 7, (smLari.ray * 2) * 0, Math.PI);

    //cheeks
    stroke("pink")
    fill("pink");
    circle(x + (smLari.ray * 2) / 2.5, y + (smLari.ray * 2) / 10, (smLari.ray * 2) / 7);
    circle(x - (smLari.ray * 2) / 2.5, y + (smLari.ray * 2) / 10, (smLari.ray * 2) / 7);


}
