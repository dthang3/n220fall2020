function setup(){
    createCanvas (480, 120);
    strokeWeight (3);
}
function draw (){
    background(204);
    for (var i = 30; i < width; i += 79) {
        rect (i, 60, i + 80, 70);
    }
}