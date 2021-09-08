// =========================== VARIABLES ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayPlayer = document.querySelector('#player');
  const selector = document.querySelectorAll('.selector');
  let currentPlayer = 1;
  let row = 7;
  let col = 6;

  // ======================== CREATE THE BOARD ========================================
  // ========================== CREATION END ==========================================
  function checkerAbstractor(i, player, operator) {
    let win = 0;
    for (let j = 0; j < 3; j++) {
      i += operator;
      if (squares[i].classList.contains(player)) win++;
      if (win === 3) {
        result.innerHTML = `Player ${player} wins!`;

        for (let i = 0; i < squares.length; i++) {
          if (!squares[i].classList.contains('taken')) {
            squares[i].classList.add('taken');
            squares[i].classList.add('cero');
          }
        }
      }
    }
  }

  function checkBoard(i, player) {
    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;

    if (i < row * 3) up++;
    if (i >= squares.length - row * 3) down++;
    if (i % row <= 3) left++;
    if (i % row >= row - 3) right++;

    if (right === 0) checkerAbstractor(i, player, 1);
    if (left === 0) checkerAbstractor(i, player, -1);
    if (down === 0) checkerAbstractor(i, player, row);
    if (up === 0) checkerAbstractor(i, player, -1 * row);
    if (right === 0 && down === 0) checkerAbstractor(i, player, row + 1);
    if (left === 0 && up === 0) checkerAbstractor(i, player, -1 * (row + 1));
    if (left === 0 && down === 0) checkerAbstractor(i, player, row - 1);
    if (right === 0 && up === 0) checkerAbstractor(i, player, -1 * (row - 1));
  }

  for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', () => {
      // Selectors have index equal to first row
      const z = i;
      while (true) {
        if (!squares[i].classList.contains('taken')) {
          if (squares[i + 7].classList.contains('taken')) {
            squares[i].classList.add('taken');
            if (currentPlayer === 1) {
              squares[i].classList.add('one');
              currentPlayer = 2;
              displayPlayer.innerHTML = 2;
              checkBoard(i, 'one');
            } else if (currentPlayer === 2) {
              squares[i].classList.add('two');
              currentPlayer = 1;
              displayPlayer.innerHTML = 1;
              checkBoard(i, 'two');
            }
            i = z; //reset i
            break;
          }
          i += 7; //next cell in the column
        } else {
          break;
        }
      }
    });
  }
});

// CSS
// ->Animaciones de caída
// ->Hover muestra ficha
// JS
// ->Generación de tablero con columnas y filas a elegir (7x6 por defecto)
// ->Botón de reset
// ->Fin de partida
