//Css drop animation

document.addEventListener('DOMContentLoaded', () => {
  // ======================== BOARD VARIABLES ========================================
  const rowInput = document.querySelector('.row');
  const colInput = document.querySelector('.col');
  const btn = document.querySelector('.btn');
  const reset = document.querySelector('.reset');

  reset.onclick = () => {
    location.reload();
  };

  // ======================== CREATE THE BOARD ========================================
  btn.addEventListener('click', () => {
    let row = parseInt(rowInput.value) || 7;
    let col = parseInt(colInput.value) || 6;

    const wraper = document.querySelector('.wraper');
    const grid = document.querySelector('.grid');

    wraper.style.cssText = `height: ${2 * (col + 1)}rem; 
                            margin-left: ${(2 * row) / -2}rem`;
    grid.style.cssText = `height: ${2 * col}rem; 
                          width: ${2 * row}rem; 
                          margin-left: ${(2 * row) / -2}rem`;

    let cell = '<div></div>'.repeat(row * col);
    let cellBottom = '<div class="taken bottom"></div>'.repeat(row);
    let cellDrop = '<section><div class="select"></div></section>'.repeat(row);

    grid.innerHTML = cell + cellBottom;
    wraper.innerHTML = cellDrop;

    // ====================== GAME VARIABLES ============================================
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const currentPlayer = document.querySelector('#player');
    const selector = document.querySelectorAll('section');

    // =========================== GAME =================================================

    for (let i = 0; i < selector.length; i++) {
      selector[i].addEventListener('click', () => {
        // Selectors have index equal to first row
        const z = i;

        while (true) {
          if (!squares[i].classList.contains('taken')) {
            if (squares[i + row].classList.contains('taken')) {
              squares[i].classList.add('taken');
              wraper.classList.toggle('uno');

              if (currentPlayer.innerHTML == 1) {
                squares[i].classList.add('one');
                currentPlayer.innerHTML = 2;
                checkBoard(i, 'one');
              } else if (currentPlayer.innerHTML == 2) {
                squares[i].classList.add('two');
                currentPlayer.innerHTML = 1;
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

    function checkBoard(i, player) {
      checkerAbstractor(i, player, 1); //left-right
      checkerAbstractor(i, player, row); //up-down
      checkerAbstractor(i, player, (row + 1) * -1); //d-left
      checkerAbstractor(i, player, row - 1); //d-right
    }

    function checkerAbstractor(i, player, op) {
      let win = 0;
      let contains = () => squares[i] && squares[i].classList.contains(player);

      while (true) {
        if (contains() && (!((i + 1) % row == 0) || op == row)) i += op;
        else {
          win++;
          i += op * -2;
          break;
        }
      }

      while (true) {
        if (contains() && (!(i % row == 0) || op == row)) {
          win++;
          i += op * -1;
        } else break;
      }

      //Winning condition met
      if (win === 4) {
        result.innerHTML = `Player ${player} wins!`;
        wraper.classList.add('hidden');
        btn.disabled = true;

        //Board cels disabled
        for (let i = 0; i < squares.length; i++) {
          if (!squares[i].classList.contains('taken')) {
            squares[i].classList.add('taken');
            squares[i].classList.add('cero');
          }
        }
      }
    }
  });
});
