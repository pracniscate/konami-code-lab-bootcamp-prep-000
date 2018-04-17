const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  // add event listener
  document.body.addEventListener('keydown', function(e)) {
    const key = parseInt(e.detail || e.which);
    
// check if key value = code at the specified index; increase it if true
    if (key === code[index]) {
      index++;
      
// if index reaches length of code, alert Egg Discoverer; then, reset
    }
    
  }
  
}