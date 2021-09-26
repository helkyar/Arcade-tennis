document.addEventListener('DOMcontentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('span');
  const btnStart = document.querySelector('.start');

  const width = 10;
  let index = 0;
  let appleIndex = 0;
  let currentSnake = [2, 1, 0];
  let direction = 1;
  let score = 0;
  let speed = 1;
  let intervalTime = 0;

  // Start/Restart
  function startGame() {
    currentSnake.forEach((i) => squares[i].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearinterval(intervalTime);
    score = 0;

    // Random apple
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnale = [2, 1, 0];
    index = 0;
    currentSnake.forEach((i) => squares[i].classList.add('snake'));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  //   Snake behaviour
  function moveOutcomes() {
    // Hit self and borders
    // Eating apple
  }

  //   Keyboard binding
  document.addEventListener('keyup', control);

  function control(e) {
    squares[index].classList.remove('snake');

    if (e.keyCode === 37) {
      direction - 1;
    } else if (e.keyCode === 38) {
      direction = -width;
    } else if (e.keyCode === 39) {
      direction = 1;
    } else if (e.keyCode === 40) {
      direction = +width;
    }
  }
});
