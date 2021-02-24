'use strict';

createSquareGrid();

function createSquareGrid(gridSize=16) {
  const container = document.querySelector('#container');

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < gridSize; j++) {
      const rowItem = document.createElement('div');
      rowItem.classList.add('row-item');
      rowItem.addEventListener('mouseover', function() {
        this.classList.add('colored');
      });
      row.appendChild(rowItem);
    }
    container.appendChild(row);
  }
}

function deleteGrid() {
  const container = document.querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
  const rowItems = document.querySelectorAll('.row-item');
  rowItems.forEach((rowItem) => {
    rowItem.classList.remove('colored');
  });

  let gridSize;
  do {
    gridSize = Number(prompt('Enter a grid size between 1 and 100 (inclusive).'));
  } while (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100);
  deleteGrid();
  createSquareGrid(gridSize);
});
