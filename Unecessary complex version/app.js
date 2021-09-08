// =========================== VARIABLES ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayPlayer = document.querySelector('#player');
  const selector = document.querySelectorAll('.selector');
  let currentPlayer = 1;
  let row = row.val || 7;
  let col = row.val || 6;

  // ======================== CREATE THE BOARD ========================================
  // ========================== CREATION END ==========================================

  function checkBoard(i, player) {
    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;
    const t = i;

    if (i < row * 3) up++;
    if (i >= squares.length - row * 3) down++;
    if (i % row <= 3) left++;
    if (i % row >= row - 3) right++;

    let win = 0;
    i = t;
    if (right === 0) {
      for (let j = 0; j < 3; j++) {
        i++;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'r', win);
      }
    }

    win = 0;
    i = t;
    if (left === 0) {
      for (let j = 0; j < 3; j++) {
        i--;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'l', win);
      }
    }

    win = 0;
    i = t;
    if (down === 0) {
      for (let j = 0; j < 3; j++) {
        i += row;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'd', win);
      }
    }

    win = 0;
    i = t;
    if (up === 0) {
      for (let j = 0; j < 3; j++) {
        i -= row;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'u', win);
      }
    }

    win = 0;
    i = t;
    if (right === 0 && down === 0) {
      for (let j = 0; j < 3; j++) {
        i += row + 1;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'r&d', win);
      }
    }

    win = 0;
    i = t;
    if (left === 0 && up === 0) {
      for (let j = 0; j < 3; j++) {
        i -= row + 1;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'l&u', win);
      }
    }

    win = 0;
    i = t;
    if (left === 0 && down === 0) {
      for (let j = 0; j < 3; j++) {
        i += row - 1;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'l&d', win);
      }
    }

    win = 0;
    i = t;
    if (right === 0 && up === 0) {
      for (let j = 0; j < 3; j++) {
        i -= row - 1;
        if (squares[i].classList.contains(player)) win++;
        if (win === 3) result.innerHTML = `Player ${player} wins!`;

        console.log(i, player, 'r&u', win);
      }
    }
  }

  for (let i = 0; i < selector.length; i++) {
    selector[i].addEventListener('click', () => {
      // Selectors have index equal to first row
      const z = i;
      while (true) {
        if (!squares[i].classList.contains('taken')) {
          if (squares[i + row].classList.contains('taken')) {
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
          i += row; //next cell in the column
        } else {
          break;
        }
      }
    });
  }
});
