document.addEventListener('DOMContentLoaded', playNoise);


function playNoise() {
  var audio = new Audio('pigs.wav');
  audio.play();
  audio.loop = true;
}