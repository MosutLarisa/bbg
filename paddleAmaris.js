let pdAmaris = {
    x:tableWidth/2,
    y: 460,
    color: "#DFB022" , 
    width: 100 ,
    heigth: 20
}

function createPaddleAmaris(){
    fill(pdAmaris.color)
    pdAmaris.x= mouseX - pdAmaris.width/2;
    rect(pdAmaris.x, pdAmaris.y, pdAmaris.width, pdAmaris.heigth)
}