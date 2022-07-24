


var colorPicker;
var sizeSlider;
var eraser;
var drawCheckbox;
var bgColor = 'white';


function setup (){
    createCanvas(1400,890);
    background(bgColor);
    colorPicker = createColorPicker('black');
    sizeSlider = createSlider(1, 100, 2);
   
    
    eraser = createCheckbox('Erase', false);
    drawCheckbox= createCheckbox('Draw', true);
    
    sizeSlider.position(0,50);
    colorPicker.position(0, 70);
    eraser.position(0,120);
    drawCheckbox.position(0,100);
}

function clearBackground(){
    background(bgColor);
    clearButton.mousePressed(clearBackground);
} 
function draw(){
if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
}

strokeWeight(sizeSlider.value());

  //erase when 'e' is pressed    
if ((keyIsPressed == true) && (key == 'e')) {
    eraser.checked(true) && drawCheckbox.checked(false) && stroke(bgColor);
}

//draw when 'r' is pressed
if ((keyIsPressed == true) && (key == 'r')) {
    eraser.checked(false) && drawCheckbox.checked(true) && stroke(colorPicker.color());
}

}
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }








