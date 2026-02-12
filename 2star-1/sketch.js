/** @type {Data[]} */
const columns = [];
const NUM_SHAPES = 5;
let ascending = true;

function setup() {
    createCanvas(500, 200);
    randomShapes();
}

function draw() {
    background(255);
    for (let i = 0; i < columns.length; i++) {
        const x = width / NUM_SHAPES * i;
        const y = height - columns[i].height;
        columns[i].draw(x, y);
    }
}


/**
 * Populates the array with random Data objects
 */
function randomShapes() {
    for (let i = 0; i < NUM_SHAPES; i++) {
        const dataWidth = floor(random(1, 5.1)) * 20;
        const dataHeight = floor(random(1, 10.1)) * 20;
        const dataColour = color(random(255), random(255), random(255));
        columns[i] = new Data(dataWidth, dataHeight, dataColour);
    }
}

/**
 * Represents a piece of data e.g. a column in a bar chart.
 */
class Data {
    width;
    height;
    colour;

    /**
     * Creates a new Data object.
     * @param {number} w The width
     * @param {number} h The height
     * @param {Color} col The fill colour
     */
    constructor(w, h, col) {
        this.width = w;
        this.height = h;
        this.colour = col;
    }

    /**
     * Draws the data at the specified coordinates.
     * @param {number} x The x coordinate in CORNER mode
     * @param {number} y The y coordinate in CORNER mode
     */
    draw(x, y) {
        rectMode(CORNER);
        fill(this.colour);
        rect(x, y, this.width, this.height);
    }
}