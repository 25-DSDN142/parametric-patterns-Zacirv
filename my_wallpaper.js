//your parameter variables go here!

//calls the leafX and leafY- they are set to random down further for a leafy pile effect 
let leafX;
let leafY;

//this lets the random location of the leaves to be adjusted 
let x1 = 0;
let x2 = 200;
let y1 = 0;
let y2 = 200;

//ajust the amount of leaves
let numLeaves = 100; 

//rotation adjustment 
let leafDirections1 = 10;
let leafDirections2 = 360;

//ajust the size for each leaf type 
let b1size= 1;
let b2size= 1;
let b3size= 1;
let m1size= 1;
let m2size= 1;
let m3size= 1;
let o1size= 1;
let o2size= 1;
let o3size= 1;

// optional branches which cross the squares for a more controlled 'tiling' effect - 1= no branch 0=branch
let showBranch = 1;

function setup_wallpaper(pWallpaper) {
  translate(leafX,leafY);
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
  
}

function wallpaper_background() {
  background(13, 46, 7); //dark background colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //after asking chat gpt, i learnted the my code wasnt working as i had to have the random variables after the setup wallpaper function as that initiates the random to work :/
  for (let i = 0; i < numLeaves; i++) { //looping so each of the leaves will have a different rotation and location
    let leafX = random(x1, x2);      
    let leafY = random(y1,y2);    // random positions within the grid square
    let rotation = random(leafDirections1,leafDirections2);      // rotates the leaves to the vales that i can adjust with the parameters  
    let leafType = floor(random(9));    // 0 to 8 so 9 different numbers that can be picked which can correspond to each of my leaves - randomly selected
    
    //this selectes and randomised the leaf types using a switch statement - it sets the rotation and location of the leaves based upon the ablove randomised variables
    push();
    translate(leafX, leafY);
    rotate(rotation);
    switch (leafType) {
      case 0:
        basicLeaf1(0, 0);
        break;
      case 1:
        basicLeaf2(0, 0);
        break;
      case 2:
        basicLeaf3(0, 0);
        break;
      case 3:
        maple1(0, 0);
        break;
      case 4:
        maple2(0, 0);
        break;
      case 5:
        maple3(0, 0);
        break;
      case 6:
        oak1(0, 0);
        break;
      case 7:
        oak2(0, 0);
        break;
      case 8:
        oak3(0, 0);
        break;
    }

    pop();
  }

if (showBranch < 1){
  branch();
}
}


function basicLeaf1 (leafX,leafY){//basic looking leaf- dark green
push()
translate(leafX,leafY)
scale(b1size);
rotate()
//branch
  fill(117, 86, 42);
  stroke(59, 46, 29);
  rect(0-1.5,0+24,3.5,15);

//leaf
  fill(0,100,0);
  strokeWeight(1);
  stroke(21, 61, 9);
  ellipse(0,0,25,50);

//veins
  stroke(135, 196, 84);
  strokeWeight(1);
  line(0,0-10,0,0+25);
  line(0,0-10,0+5,0-17.5);
  line(0,0-10,0-5,0-17.5);
  line(0,0,0+9,0-6);
  line(0,0+7.5,0-9,0);
  line(0,0+15,0+9,0+12.5);
  line(0,0+20,0-8,0+12.5);
 
  pop()
}
function basicLeaf2 (leafX,leafY){//basic but bluey green
push()
translate(leafX,leafY)
scale(b2size);
//branch
  fill(94, 86, 22);
  stroke(59, 46, 29);
  rect(0-1.5,0+24,3.5,15);

//leaf
  fill(90, 150, 47);
  strokeWeight(1);
  stroke(21, 61, 9);
  ellipse(0,0,25,50);

//veins
  stroke(135, 196, 84);
  strokeWeight(1);
  line(0,0-10,0,0+25);
  line(0,0-10,0+5,0-17.5);
  line(0,0-10,0-5,0-17.5);
  line(0,0,0+9,0-6);
  line(0,0+7.5,0-9,0);
  line(0,0+15,0+9,0+12.5);
  line(0,0+20,0-8,0+12.5);
 
  pop()
}
function basicLeaf3 (leafX,leafY){//basic but yellowy green 
push()
translate(leafX,leafY)
scale(b3size);
//branch
  fill(94, 71, 22);
  stroke(43, 33, 10);
  rect(0-1.5,0+24,3.5,15);

//leaf
  fill(25, 168, 73);
  strokeWeight(1);
  stroke(12, 77, 34);
  ellipse(0,0,25,50);

//veins
  stroke(91, 194, 105);
  strokeWeight(1);
  line(0,0-10,0,0+25);
  line(0,0-10,0+5,0-17.5);
  line(0,0-10,0-5,0-17.5);
  line(0,0,0+9,0-6);
  line(0,0+7.5,0-9,0);
  line(0,0+15,0+9,0+12.5);
  line(0,0+20,0-8,0+12.5);
 
  pop()
}
function maple1 (leafX,leafY){//maple leaf with lively colour
push()
translate(leafX,leafY)
scale(m1size);
//mbranch
  fill(130, 76, 30);
  stroke(87, 48, 15);
  rect(0-1.5,0,3.5,14);

//mleaf
  fill(55, 173, 33);
  strokeWeight(1);
  stroke(21, 84, 10);
  beginShape();
  vertex(0, 0);
  vertex(0-15,0+2);
  vertex(0-13, 0-5);
  vertex(0-33, 0-20);
  vertex(0-28, 0-21);
  vertex(0-32, 0-29);
  vertex(0-23, 0-26);
  vertex(0-21, 0-30);
  vertex(0-9, 0-20);
  vertex(0-14, 0-40); 
  vertex(0-9, 0-35);
  vertex(0, 0-50);
  vertex(0+9, 0-35);
  vertex(0+14, 0-40);
  vertex(0+9, 0-20);
  vertex(0+21, 0-30);
  vertex(0+23, 0-26);
  vertex(0+32, 0-29);
  vertex(0+28, 0-21);
  vertex(0+33, 0-20);
  vertex(0+13, 0-5);
  vertex(0+15,0+2);
  endShape(CLOSE);
//mveins
  stroke(135, 196, 84);
  strokeWeight(1);
  line(0,0,0,0-36);
  line(0,0-6,0-17,0-17);
  line(0,0-6,0+17,0-17);
  line(0-17,0-17,0-20,0-25);
  line(0-17,0-17,0-25,0-18);
  line(0+17,0-17,0+20,0-25);
  line(0+17,0-17,0+25,0-18);
  line(0,0-25,0-8,0-30);
  line(0,0-25,0+8,0-30);
  line(0,0-15,0+5,0-20);
  line(0,0-10,0-3,0-12);
  line(0-9,0-12,0-10,0-17);
  line(0-6,0-10,0-13,0-9);
  line(0+9,0-12,0+13,0-9);
  line(0+6,0-10,0+10,0-17);

pop()
}
function maple2 (leafX,leafY){//yellow/autumn maple leaf
push()
translate(leafX,leafY)
scale(m2size);
//mbranch
  fill(130, 95, 30);
  stroke(74, 54, 16);
  rect(0-1.5,0,3.5,14);

//mleaf
  fill(179, 147, 34);
  strokeWeight(1);
  stroke(102, 84, 17);
  beginShape();
  vertex(0, 0);
  vertex(0-15,0+2);
  vertex(0-13, 0-5);
  vertex(0-33, 0-20);
  vertex(0-28, 0-21);
  vertex(0-32, 0-29);
  vertex(0-23, 0-26);
  vertex(0-21, 0-30);
  vertex(0-9, 0-20);
  vertex(0-14, 0-40); 
  vertex(0-9, 0-35);
  vertex(0, 0-50);
  vertex(0+9, 0-35);
  vertex(0+14, 0-40);
  vertex(0+9, 0-20);
  vertex(0+21, 0-30);
  vertex(0+23, 0-26);
  vertex(0+32, 0-29);
  vertex(0+28, 0-21);
  vertex(0+33, 0-20);
  vertex(0+13, 0-5);
  vertex(0+15,0+2);
  endShape(CLOSE);
//mveins
  stroke(209, 154, 82);
  strokeWeight(1);
  line(0,0,0,0-36);
  line(0,0-6,0-17,0-17);
  line(0,0-6,0+17,0-17);
  line(0-17,0-17,0-20,0-25);
  line(0-17,0-17,0-25,0-18);
  line(0+17,0-17,0+20,0-25);
  line(0+17,0-17,0+25,0-18);
  line(0,0-25,0-8,0-30);
  line(0,0-25,0+8,0-30);
  line(0,0-15,0+5,0-20);
  line(0,0-10,0-3,0-12);
  line(0-9,0-12,0-10,0-17);
  line(0-6,0-10,0-13,0-9);
  line(0+9,0-12,0+13,0-9);
  line(0+6,0-10,0+10,0-17);

pop()
}
function maple3 (leafX,leafY){//red maple leaf
push()
translate(leafX,leafY)
scale(m3size);
//mbranch
  fill(128, 73, 20);
  stroke(102, 59, 17);
  rect(0-1.5,0,3.5,14);

//mleaf
  fill(176, 68, 40);
  strokeWeight(1);
  stroke(89, 31, 16);
  beginShape();
  vertex(0, 0);
  vertex(0-15,0+2);
  vertex(0-13, 0-5);
  vertex(0-33, 0-20);
  vertex(0-28, 0-21);
  vertex(0-32, 0-29);
  vertex(0-23, 0-26);
  vertex(0-21, 0-30);
  vertex(0-9, 0-20);
  vertex(0-14, 0-40); 
  vertex(0-9, 0-35);
  vertex(0, 0-50);
  vertex(0+9, 0-35);
  vertex(0+14, 0-40);
  vertex(0+9, 0-20);
  vertex(0+21, 0-30);
  vertex(0+23, 0-26);
  vertex(0+32, 0-29);
  vertex(0+28, 0-21);
  vertex(0+33, 0-20);
  vertex(0+13, 0-5);
  vertex(0+15,0+2);
  endShape(CLOSE);
//mveins
  stroke(199, 90, 62);
  strokeWeight(1);
  line(0,0,0,0-36);
  line(0,0-6,0-17,0-17);
  line(0,0-6,0+17,0-17);
  line(0-17,0-17,0-20,0-25);
  line(0-17,0-17,0-25,0-18);
  line(0+17,0-17,0+20,0-25);
  line(0+17,0-17,0+25,0-18);
  line(0,0-25,0-8,0-30);
  line(0,0-25,0+8,0-30);
  line(0,0-15,0+5,0-20);
  line(0,0-10,0-3,0-12);
  line(0-9,0-12,0-10,0-17);
  line(0-6,0-10,0-13,0-9);
  line(0+9,0-12,0+13,0-9);
  line(0+6,0-10,0+10,0-17);

pop()
}
function oak1 (leafX,leafY){//dark oak leaf
  push()
  translate(leafX,leafY)
scale(o1size);
//obranch
  fill(133, 117, 82);
  stroke(71, 63, 44);
  rect(0-1.75,0,3.5,15);

//oleaf
  fill(19, 97, 41);
  strokeWeight(1);
  stroke(10, 48, 21);
  beginShape();
  curveVertex(0, 0);
  curveVertex(-5,-2.5);
  curveVertex(-10,-3.5);
  curveVertex(-12.5,-5);
  curveVertex(-12.5,-10);
  curveVertex(-5,-12.5);
  curveVertex(-5,-16);
  curveVertex(-15,-20);
  curveVertex(-15,-26);
  curveVertex(-7,-28);
  curveVertex(-7,-31);
  curveVertex(-13,-34);
  curveVertex(-12,-40);
  curveVertex(-6,-40);
  curveVertex(-4,-48);
  curveVertex(0,-50);
  curveVertex(+4,-48);
  curveVertex(+6,-40);
  curveVertex(+12,-40);
  curveVertex(+13,-34);
  curveVertex(+7,-28);
  curveVertex(+15,-26);
  curveVertex(+15,-20);
  curveVertex(+5,-16);
  curveVertex(+5,-12.5);
  curveVertex(+12.5,-10);
  curveVertex(+12.5,-5);
  curveVertex(+10,-3.5);
  curveVertex(+5,-2.5);
  endShape(CLOSE);

//oveins
  stroke(115, 158, 55);
  strokeWeight(1);
  line(0,0,0,0-40);
  line(0,0-5,0-11,0-8);
  line(0,0-3,0+10,0-8);
  line(0,0-19,0+12,0-23);
  line(0,0-15,0-12,0-23);
  line(0,0-30,0-8.5,0-36);
  line(0,0-32,0+7,0-36);
  line(0,0-40,0+3,0-43);
  line(0+1,0-42,0-2,0-45);

pop()
}
function oak2 (leafX,leafY){//olive oak leaf
  push()
  translate(leafX,leafY)
scale(o2size);
//obranch
  fill(94, 97, 61);
  stroke(57, 59, 39);
  rect(0-1.75,0,3.5,15);

//oleaf
  fill(133, 123, 54);
  strokeWeight(1);
  stroke(77, 71, 33);
  beginShape();
  curveVertex(0, 0);
  curveVertex(-5,-2.5);
  curveVertex(-10,-3.5);
  curveVertex(-12.5,-5);
  curveVertex(-12.5,-10);
  curveVertex(-5,-12.5);
  curveVertex(-5,-16);
  curveVertex(-15,-20);
  curveVertex(-15,-26);
  curveVertex(-7,-28);
  curveVertex(-7,-31);
  curveVertex(-13,-34);
  curveVertex(-12,-40);
  curveVertex(-6,-40);
  curveVertex(-4,-48);
  curveVertex(0,-50);
  curveVertex(+4,-48);
  curveVertex(+6,-40);
  curveVertex(+12,-40);
  curveVertex(+13,-34);
  curveVertex(+7,-28);
  curveVertex(+15,-26);
  curveVertex(+15,-20);
  curveVertex(+5,-16);
  curveVertex(+5,-12.5);
  curveVertex(+12.5,-10);
  curveVertex(+12.5,-5);
  curveVertex(+10,-3.5);
  curveVertex(+5,-2.5);
  endShape(CLOSE);

//oveins
  stroke(117, 102, 63);
  strokeWeight(1);
  line(0,0,0,0-40);
  line(0,0-5,0-11,0-8);
  line(0,0-3,0+10,0-8);
  line(0,0-19,0+12,0-23);
  line(0,0-15,0-12,0-23);
  line(0,0-30,0-8.5,0-36);
  line(0,0-32,0+7,0-36);
  line(0,0-40,0+3,0-43);
  line(0+1,0-42,0-2,0-45);

pop()
}
function oak3 (leafX,leafY){//dry and brown oak leaf
  push()
  translate(leafX,leafY)
scale(o3size);
//obranch
  fill(133, 124, 28);
  stroke(84, 78, 17);
  rect(0-1.75,0,3.5,15);

//oleaf
  fill(122, 168, 29);
  strokeWeight(1);
  stroke(79, 107, 24);
  beginShape();
  curveVertex(0, 0);
  curveVertex(-5,-2.5);
  curveVertex(-10,-3.5);
  curveVertex(-12.5,-5);
  curveVertex(-12.5,-10);
  curveVertex(-5,-12.5);
  curveVertex(-5,-16);
  curveVertex(-15,-20);
  curveVertex(-15,-26);
  curveVertex(-7,-28);
  curveVertex(-7,-31);
  curveVertex(-13,-34);
  curveVertex(-12,-40);
  curveVertex(-6,-40);
  curveVertex(-4,-48);
  curveVertex(0,-50);
  curveVertex(+4,-48);
  curveVertex(+6,-40);
  curveVertex(+12,-40);
  curveVertex(+13,-34);
  curveVertex(+7,-28);
  curveVertex(+15,-26);
  curveVertex(+15,-20);
  curveVertex(+5,-16);
  curveVertex(+5,-12.5);
  curveVertex(+12.5,-10);
  curveVertex(+12.5,-5);
  curveVertex(+10,-3.5);
  curveVertex(+5,-2.5);
  endShape(CLOSE);

//oveins
  stroke(173, 201, 46);
  strokeWeight(1);
  line(0,0,0,0-40);
  line(0,0-5,0-11,0-8);
  line(0,0-3,0+10,0-8);
  line(0,0-19,0+12,0-23);
  line(0,0-15,0-12,0-23);
  line(0,0-30,0-8.5,0-36);
  line(0,0-32,0+7,0-36);
  line(0,0-40,0+3,0-43);
  line(0+1,0-42,0-2,0-45);

pop()
}
function branch() {
fill(107, 65, 27);
//branch1right
  strokeWeight(1);
  stroke(69, 43, 19);
  beginShape();
  vertex(200,80);
  vertex(140, 125);
vertex(150, 140);
vertex(175, 115);
vertex(200,100);

 endShape();
 //branch1left
 beginShape();
  vertex(0, 100);
  vertex(10,110);
  vertex(50,105);
  vertex(52,100);
  vertex(40,100);
  vertex(20,100);
  vertex(8,90);
  vertex(15, 80);
  vertex(30, 75);
  vertex(80, 80);
  vertex(76, 75);
  vertex(30, 70);
  vertex(15, 72);
  vertex(10, 80);
  vertex(12, 60);
  vertex(15, 50);
  vertex(40, 45);
  vertex(35, 40);
  vertex(12, 45);
  vertex(9, 55);
  vertex(6, 70);
  vertex(0, 80);
 endShape();
}
