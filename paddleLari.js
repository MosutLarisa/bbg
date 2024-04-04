let pdLari = {
    y: 200,
    color: 'blue',
    width: 70,
    heigth: 10
}

function createPaddleLari() {
    fill(pdLari.color)
    rect(mouseX, pdLari.y, pdLari.width, pdLari.heigth)
}