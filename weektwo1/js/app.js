var x = 0;
var y = 0;

function setup() {
    createCanvas(800,600);
    strokeWeight(4);
}
function draw(){
    background (240);
    circle(x,30,30,50);//x te um lo a si len +3 a run thei lo
    x = x + 3;
    
    if (x > width){ //if statement +3 a feh len, -3 kha kir nak si
        x = - 3;
    }
}