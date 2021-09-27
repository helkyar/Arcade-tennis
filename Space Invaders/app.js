document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const squares = document.querySelector('#result');

  let width = 15;
  let currentShooterIndex = 202;
  let currentInvaderIndex = 0;
  let alienInvaderDown = [];
  let result = 0;
  let direction = 0;
  let invaderId = 0;

  //  Define alien invaders
  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];

  // Draw alien invaders
  alienInvaders.forEach((invader) =>
    squares[currentInvaderIndex + invader].classList.add('invader')
  );

  // Draw the shooter
  squares[currentShooterIndex].classList.add('shooter');

  //   Move the shooter
  function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    if (e.keyCode == 37 && currentShooterIndex % width !== 0) {
      currentShooterIndex -= 1;
    } else if (e.keyCode == 39 && currentShooterIndex % width < width - 1) {
      currentShooterIndex += 1;
    }
    squares[currentShooterIndex].classList.add('shooter');
  }
  document.addEventListener('keydown', moveShooter);
});
