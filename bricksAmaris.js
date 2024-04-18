let bricksAmaris=[];

const marginAmaris = 10;
const distanceBetweenBricksAmaris=10 ;

const bricksRowsAmaris = 3;
const rowBricksNumberAmaris = 7;

const bricksWidthAmaris =Math.floor(
    (tableWidth- 
        marginAmaris*2 - 
        (rowBricksNumberAmaris-1)
        *distanceBetweenBricksAmaris)/rowBricksNumberAmaris);

function initBricksAmaris(){
    let x= marginAmaris;
    for(let i=0; i < bricksRowsAmaris * rowBricksNumberAmaris; i++){
        const row = Math.floor(i/rowBricksNumberAmaris)+1 ;
        
        x= x+ bricksWidthAmaris+ distanceBetweenBricksAmaris;
        if(i % rowBricksNumberAmaris==0) 
            x=marginAmaris;

        bricksAmaris.push({
            hit: false,
            x,
            y: row * 35,
            color: "#D8155F", 
            width: bricksWidthAmaris,
            height: 10,
            row
        })
    }
}

function createBricksAmaris(params){

    bricksAmaris.forEach(brick => {
        fill(brick.color)
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}