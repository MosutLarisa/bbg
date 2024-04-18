let pdLari = {
    x: tableWidth/2,
    y: 430,
    color: 'blue',
    width: 70,
    heigth: 20
}

function createPaddleLari() {
    fill(pdLari.color)
    pdLari.x = mouseX - pdLari.width/2
    rect(pdLari.x , pdLari.y, pdLari.width, pdLari.heigth)
}