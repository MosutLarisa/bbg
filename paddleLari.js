let pdLari = {
    y: 480,
    color: 'blue',
    width: 70,
    heigth: 10
}

function createPaddleLari() {
    fill(pdLari.color)
    rect(mouseX-pdLari.width/2, pdLari.y, pdLari.width, pdLari.heigth)
}