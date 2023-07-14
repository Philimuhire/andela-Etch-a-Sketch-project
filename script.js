// Function to create the grid
function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the container before generating the grid
  
    // Calculate the width and height of each square
    const squareSize = 960 / size;
  
    // Loop to generate the grid
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.style.width = squareSize + 'px';
      square.style.height = squareSize + 'px';
      square.classList.add('square'); // Add the .square class
      container.appendChild(square);
    }
  }
  
  // Initial grid size
  let gridSize = 16;
  
  // Generate the initial grid
  createGrid(gridSize);
  