var nums = [200, 100, 105, 110]; //arrays 

function setup () {
    createCanvas (400, 400);

}

function draw() {
    background (0);

for (var i = 0; i < 4; i++) { //loops 
    ellipse (i * 100 + 20, 300, nums[i], nums[i]); //adding 20 and multiply 100 to changes there locations 
    noFill();
    stroke(400);
    }
}