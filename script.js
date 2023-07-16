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

    // Add hover effect to each grid square
    changeColorOnHover(square);
  }
}
  
  // Initial grid size
  let gridSize = 16;
  
  // Generate the initial grid
  createGrid(gridSize);
  
  // Function to change the color of a grid square on hover
function changeColorOnHover(square) {
  square.addEventListener('mouseenter', function () {
    square.style.backgroundColor = getRandomColor();
  });
}

// Helper function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add hover effect to each grid square
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  changeColorOnHover(square);
});

// Function to prompt the user for grid size and generate a new grid
function resetGrid() {
  let newSize = prompt('Enter the number of squares per side (max: 100):');
  newSize = parseInt(newSize);

  // Validate user input
  if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
    alert('Invalid input! Please enter a number between 1 and 100.');
    return;
  }

  // Remove the existing grid
  const container = document.getElementById('container');
  container.innerHTML = '';

  // Generate the new grid
  createGrid(newSize);
}

// Add click event listener to the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid);
