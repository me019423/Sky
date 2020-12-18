function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

}

function draw() {

  //background with transparancy
  background(0,0,35,25); 
  
  //blinking stars
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)
}
  textStyle (BOLD);
textFont = 'georgia';
textSize(60);
text('HAPPY HOLIDAYS!', 480, 280);
  fill('dark');
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);


}

