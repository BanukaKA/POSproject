// format credit card number as user types
// doesn't handle every fringe case, just normal typing
card_num.addEventListener('keyup',function (e) {
    console.log(e.keyCode);
    if (e.keyCode !== 8) {
      // not backspace
      if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
        this.value = this.value += ' ';
      }
    }
  });
  
  // card rotation
  // again, not cross-browser, this is just for proof of concept
  var xRange = -10;
  var xMiddle = 0;
  var yRange = 10;
  var yMiddle = 20;
  document.body.addEventListener('mousemove', function (e) {
    var yPerc = e.clientX / window.innerWidth;
    var xPerc = e.clientY / window.innerHeight;
    card.style.transform = 'rotateY(' + (yMiddle + (yPerc * yRange - (yRange / 2))) + 'deg) rotateX(' + (xMiddle + (xPerc * xRange - (xRange / 2))) + 'deg)';
  });
  
  // add .touched class to inputs
  var inputEls = document.querySelectorAll('input');
  for (var i = 0, len = inputEls.length; i < len; i++) {
    inputEls[i].addEventListener('blur', function (e) {
      this.classList.add('touched');
    });
  }

  var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
  