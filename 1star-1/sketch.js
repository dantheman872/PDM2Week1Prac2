var input;
var button;
const usernames = new Set();

function setup() {

  createCanvas(480, 120);
  input = createInput();
  input.position(50, 140);
  button = createButton("Submit");
  button.position(200, 140);
  button.mousePressed(drawName);
  background(220);
}

function drawName() {

    background(220);
    textSize(15);
    if(input.value() === ""){
        
        text("Please enter a username", 20, 90)
    } else if(!usernames.has(input.value())){
    
        usernames.add(input.value());
        console.log(usernames);
        text("Username added: " + input.value(), 20, 90);
    } else {

        text("Username already exists", 20, 90);     
    }
}