let bricksLari = []

const marginLari = 10
const distanceBetweenBricksLari = 10;

const bricksRowsLari = 3
const rowBricksNumberLari = 7

const brickWidthLari = Math.floor(
    (tableWidth - 
        marginLari * 2 - 
        (rowBricksNumberLari - 1) * distanceBetweenBricksLari) / rowBricksNumberLari);

function initBriksLari() {
    let x = marginLari;
    for (let i = 0; i < bricksRowsLari * rowBricksNumberLari; i++) {
        const row = Math.floor(i / rowBricksNumberLari) + 1;

        x = x + brickWidthLari + distanceBetweenBricksLari;
        if (i % rowBricksNumberLari == 0) 
            x=marginLari;

        bricksLari.push({
            hit: false,
            x,
            y: row * 35,
            color: "#0000ff",
            width: brickWidthLari,
            height: 20,
            row
        })
    }
}

function createBricksLari(params) {

    bricksLari.forEach(brick => {
        fill(brick.color)
        rect(brick.x, brick.y, brick.width, brick.height)
    })
}