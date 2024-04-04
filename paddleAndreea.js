let pdAndreea = {
    y:200,
    color:"#E91E63",
    width:70,
    heigth:10
}

function createPaddleAndreea() {
    fill(pdAndreea.color)
    rect(mouseX, pdAndreea.y, pdAndreea.width, pdAndreea.heigth)
}