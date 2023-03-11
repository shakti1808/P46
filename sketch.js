var bg,bg2,form,system,code,security;
var ghost, grandpa
var score=0;

function preload() {
  bg = loadImage("background.jpg");
  bg2 = loadImage("treasure.jpg")
  ghost = loadImage("grandpaGhostImg.png")
}

function setup() {
  createCanvas(1100,800);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  


  text("Time: " + setTimeout(myFunction, 90000) , 550, 50)

  text("Your grandpa died a few week, but a ", 60, 60)
  text("few days ago his ghost appear in your ", 60, 80)
  text("night and led you to a forgetten door", 60, 100) 
  text(" in the basement of the old house ", 60, 120)
  text("she inherited for her grandpa. Now,", 60, 140)
  text(" your grandpa is tell you the riddle ", 60, 160)
  text("he was not able to solve. You have", 60, 180)
  text("to solve the six riddle to open the", 60, 200)
  text("treasure, however you only have", 60, 220)
  text("one and half minutes or 90000", 60, 240)
  text("milliseconds to solve the riddles.", 60, 260)

  if(score === 6) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("GRANDPA: We did it! I am so proud of you!",120, 200);
  }
  grandpa = createSprite(120,430,15,15);
  grandpa.addImage("grandpa", ghost)
  
  drawSprites()
}


  function myFunction() {
  alert('Timeover');
  }