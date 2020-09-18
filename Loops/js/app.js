function setup () {
    createCanvas (1350, 120);   
}
function draw () {
    background(500);
    var y = 60;
    //25 black circles
    for (var x = 50; x < 1300; x += 50) {
        fill(0);
        circle (x, y, 50);
        //devided by 3 and draw a purple circle
        if (x / 3 == 0) {
            fill(136, 3, 252);
            circle(x, y, 50);
        }
        // devided by 5 and draw green square
        if (x / 5 == 0) {
            fill(106, 191, 99);
            square(x + 50, y + 50, 55);
        }
        //Devided by 3 and 5, blue square
        if (x / 3 == 0 && x / 5 == 0) {
            fill(72, 95, 168);
            square (x, y, 55);
        }
    }    
}