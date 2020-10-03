var x = 50; 
var y = 50;
var d = 0;

function setup () {
    createCanvas (600, 600);
}
function draw () {
    background(60);
    fill (0);
    
if (distance(mouseX, mouseY, x, y)<7) {
        fill(230, 16, 16);
}
circle(x, y, 60, 60);
color(13,13,13);

if (mouseX > x){
    x = x + 3;
}
if (mouseX < x){
    x = x - 3;
}
if (mouseY > y){
    y = y+ 3;
}
if (mouseY < y ){
    y = y - 3;
}
}

function distance(targetx, targety, ballx, bally){
    let xdifferent = targetx - ballx;
    let ydifferent = targety - bally;
    return Math.sqrt((xdifferent*xdifferent) + (ydifferent*ydifferent))
}