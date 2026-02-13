const mapFill = new Map();
const mapStroke = new Map()
let clickCount = 0;
let x = []
let y = []

function setup(){

    createCanvas(400, 400);    
    mapFill.set(1, 0)
    mapFill.set(3, 51)
    mapFill.set(5, 102)
    mapFill.set(7, 153)
    mapFill.set(11, 204)
    mapFill.set(13, 255)
    mapStroke.set(1, 255)
    mapStroke.set(2, 204)
    mapStroke.set(4, 153)
    mapStroke.set(8, 102)
    mapStroke.set(16, 51)
    mapStroke.set(32, 0)
}

function draw(){

    background(220) 
    strokeWeight(5)
    if(mapFill.has(clickCount)){

        fill(mapFill.get(clickCount))
    }

    if(mapStroke.has(clickCount)){

        stroke(mapStroke.get(clickCount))
    }

    for(let i = 0; i < clickCount; i++){

        circle(x[i], y[i], 80)
    }
}

function mouseClicked(){

    clickCount++

    x.push(random(40, width-40), random(40, height-40), 80)
    y.push(random(40, width-40), random(40, height-40), 80)
}
