//my final project for SCTM2005 where I explore what image maps are.
// https://www.w3schools.com/html/html_images_imagemap.asp 
//final notes at bottom


//https://www.youtube.com/watch?v=ALdjoYz7ha0     This was for finding the mouse corods
// let output = document.querySelector('#output');
// document.addEventListener('click', (e) =>{
//   output.innerText = `X: ${e.pageX} - Y: ${e.pageY}`; });


                              //modal stuff from   https://www.youtube.com/watch?v=XH5OW46yO8I
const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const close= document.getElementById('close');

open.addEventListener('click', () =>{
  modal_container.classList.add('show');
});
close.addEventListener('click', () =>{
  modal_container.classList.remove('show');
});
// alert("my piE!!");


let swanSwan =false;
let piePie = false;
let ducksDucks = false;

function pieFunction(){
if(piePie =true){
  
  document.getElementById("changeTextPie").style.textDecoration = "line-through";
}
allClicked();
}
function swanFunction(){
 if(swanSwan =true){
  document.getElementById("changeTextSwan").style.textDecoration = "line-through";
 }
    allClicked();
}
function ducksFunction(){
  if(ducksDucks =true){
    
    document.getElementById("changeTextDucks").style.textDecoration = "line-through";
  }
  allClicked();
}
function allClicked(){
  if(swanSwan && piePie && ducksDucks){
    modal_container.classList.add('show');
  }
}
//FINAL NOTES:

//my favourite part of the code is this last one right above. Its my favourite
//because it was the last part I needed to complete for this project. Also, I did spend the most 
//time on it after giving up on it. With this block of code I was able to show the popup message 
//after all objects were clicked **in a random order**. Before this, the message would only appear 
//when the very **last* object on the list was clicked. I hoped that the user would find the objects
//in order they appear on the list, but no, my one playtester found the last item first.

//a second runner up for fav part of code was the mouse coordinates. I was surprised it worked and 
//that it didn't take a lot of time to do. I will be sure to copy this code everywhere I use image maps.  