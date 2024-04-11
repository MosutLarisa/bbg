let bricksAmaris=[];

const bricksRowsAmaris = 1;
const brickClosAmaris = 1;
const rowBricksNumberAmaris = 4;

function initBricksAmaris(){
    for(let i=0; i < bricksRowsAmaris * rowBricksNumberAmaris; i++){
        bricksAmaris.push({
            hit: false,
            x: i*70,
            y: 50,
            color: "#D8155F", 
            width: 50,
            height: 10,
        })
    }
}

function createBricksAmaris(params){

    bricksAmaris.forEach(brick => {
        fill(brick.color)
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}