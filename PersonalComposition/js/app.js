function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(220);
      fill(191, 185, 13);
      circle(100,100,100);  
      rect(20,20,40,40);
      quad(200,400,400,200,400,500,100,600);
      triangle(700,100,500,300,700,300);
      line(0,500,800,500);
      arc(400,100,100,80,90,true);
  }