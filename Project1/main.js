window.onresize = screen; // When the window is resized
window.onload = screen; // When the window is loaded

function screen(){
  myWidth = window.innerWidth; // get the width of the window and set it to myWidth
  document.getElementById('size').innerHTML = `Width : ${myWidth}px`;
}
