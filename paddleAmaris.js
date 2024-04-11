let pdAmaris = {
    y: 460,
    color: "#DFB022" , 
    width: 70 ,
    hight: 10
}

function createPaddleAmaris(){
    fill(pdAmaris.color)
    rect(mouseX-pdAmaris.width/2, pdAmaris.y, pdAmaris.width, pdAmaris.hight)
}