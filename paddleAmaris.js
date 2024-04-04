let pdAmaris = {
    y: 200,
    color: "#E91E63" , 
    width: 70 ,
    hight: 10
}

function createPaddleAmaris(){
    fill(pdAmaris.color)
    rect(mouseX, pdAmaris.y, pdAmaris.width, pdAmaris.hight)
}