let x =200;

function setup () {
    createCanvas(400, 300);
}
function draw () {
    background (120);
    circle(mouseX, 150, 50);
    
    //if mouseX is less than 200, the color will be red or else it will be blue 
    if (mouseX < 200) {
    fill (235, 64, 52);
    } else if (mouseX > 200) {
        fill (49, 140, 231);
    }
}