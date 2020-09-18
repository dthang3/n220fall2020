function setup () {
    createCanvas (1500, 1500);   
}
function draw () {
    var y = 50;
    //25 black circles
    for (var i = 0; i < 25; ++i) {
        var x = i*60;

        if (i % 3 === 0 && i % 5 === 0){
        //devidied by 3 and draw blue circle 
            fill (0, 46, 250);
            square(x,y,60);
        }
        // devided by 5 and draw green square
        else if ( i % 5 === 0) {
            fill (56, 135, 0);
            square (x, y, 50);
        }
        //Devided by 3 and 5, blue square
        else if (i % 3 === 0 ){
            fill (144, 3, 252);
            circle (x+35, y+35, 40);
        }
        //other draw black circle 
        else {
            fill (0)
            circle (x+35, y+35, 40);
        }
    }    
}