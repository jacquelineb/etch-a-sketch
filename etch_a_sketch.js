(function() {
  'use strict';

  setupButtons();
  createSquareGrid();

  function setupButtons() {
      const clearBtn = document.querySelector('#clear');
      clearBtn.addEventListener('click', clearGrid);
      const resizeBtn = document.querySelector('#resize');
      resizeBtn.addEventListener('click', resizeGrid);
  }

  function clearGrid() {
    const rowItems = document.querySelectorAll('.row-item');
    rowItems.forEach((rowItem) => rowItem.style['opacity'] = 0);
  }

  function resizeGrid() {
    deleteCurrentGrid();
    createSquareGrid(getGridSize());
  }

  function deleteCurrentGrid() {
    const container = document.querySelector('#container');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function createSquareGrid(gridSize=16) {
    const container = document.querySelector('#container');
    for (let i = 0; i < gridSize; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < gridSize; j++) {
        const rowItem = document.createElement('div');
        rowItem.classList.add('row-item');
        rowItem.addEventListener('mouseover', function() {
          if (Number(this.style['opacity']) !== 1)  {
            this.style['opacity'] = `${Number(this.style['opacity']) + 0.1}`;
          }
        });
        row.appendChild(rowItem);
      }
      container.appendChild(row);
    }
  }

  function getGridSize() {
    let gridSize;
    do {
      gridSize = Number(prompt('Enter a grid size between 1 and 100 (inclusive).'));
    } while (!Number.isInteger(gridSize) || gridSize < 1 || gridSize > 100);

    return gridSize;
  }
})();