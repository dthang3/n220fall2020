// Question 2 Animated object HW
var myCircle = {
    x: 10, 
    y: 100,
    r: 20,
};
function setup () {
    createCanvas(400,400);
}
function draw(){
    background(0);
    fill(255, 153);
    circle(myCircle.x, myCircle.y, myCircle.r);

    myCircle.x+=2;
}



