const dino = document.getElementById('dinosaur');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
let score = 0;

document.addEventListener('keydown', jump);

function jump(event) {
  if (event.keyCode === 32) {
    if (!dino.classList.contains('jump')) {
      dino.classList.add('jump');
      setTimeout(() => {
        dino.classList.remove('jump');
      }, 300);
    }
  }
}

function gameOver() {
  alert('¡Game Over! Puntuación: ' + score);
  location.reload();
}

setInterval(() => {
  const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue('top'));
  const cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 100) {
    gameOver();
  }

  if (cactusLeft < -20) {
    cactus.style.left = '100%';
    score++;
    scoreDisplay.innerText = score;
  }
}, 10);
