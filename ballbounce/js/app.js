var x = 0;
var speed = 5;
var y = 0;
var direction = 4;

function setup(){
    createCanvas (800,600);
    stroke(4)

function draw() {
    background(240); 
    Circle (x, 400,300,50);
    x += speed * direction;
    if ((x > width-radius)|| (x < radius))  
}