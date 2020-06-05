var piggy = document.querySelector('.piggy');

piggy.addEventListener('click', displayPrompt);

function displayPrompt() {
  let answer = prompt('Would you like to play with pig girl? Type yes or leave.');

  if (answer !== null) {
    answer = answer.toLowerCase();
  } else if (answer === null) {
    window.location.reload(true);
  }

  if (answer === 'yes') {
    window.location.href = 'play.html';
  } else if (answer !== 'yes') {
    window.location.reload(true);
  }
}