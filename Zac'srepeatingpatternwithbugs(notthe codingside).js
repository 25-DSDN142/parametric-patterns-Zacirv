//your parameter variables go here!


let leafX = 100;
let leafY = 100;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(100,100,100); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
ellipse(leafX,leafY,50,50,100,100)


}

function Leaf1(){
 //planets

}