
let bricksLari = []

const bricksRowsLari = 1;
const brickClosLari = 1;
const rowBricksNumberLari = 4;

function initBriksLari() {
    for(let i = 0; i < bricksRowsLari * rowBricksNumberLari ; i++) {
        bricksLari.push({
            hit: false,
            x: i*70,
            y:15,
            color: "#0000ff",
            width: 50,
            height: 10,
        })
    }
}

function createBricksLari(params) {

    bricksLari.forEach(brick => {
        fill(brick.color)
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}