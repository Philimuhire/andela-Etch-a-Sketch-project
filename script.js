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

function changeColorOnHover(square) {
  let hoverCount = 0; // Counter to track the number of interactions

  square.addEventListener('mouseenter', function () {
    // Check the color mode and update the square's background color accordingly
    switch (colorMode) {
      case 'black':
        square.style.backgroundColor = 'black';
        break;
      case 'white':
        square.style.backgroundColor = 'white';
        break;
      case 'rainbow':
        // Generate random RGB values
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        // Calculate the darkening factor
        const darkenFactor = hoverCount * 0.1;

        // Apply the darkening effect
        const darkenedRed = Math.floor(red * (1 - darkenFactor));
        const darkenedGreen = Math.floor(green * (1 - darkenFactor));
        const darkenedBlue = Math.floor(blue * (1 - darkenFactor));

        // Update the square's background color with the random RGB values
        square.style.backgroundColor = `rgb(${darkenedRed}, ${darkenedGreen}, ${darkenedBlue})`;

        hoverCount++; // Increment the interaction counter
        break;
    }
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

const blackButton = document.getElementById('blackButton');
const whiteButton = document.getElementById('whiteButton');
const rainbowButton = document.getElementById('rainbowButton');
let colorMode = 'black';

// Event listener for the black button
blackButton.addEventListener('click', function () {
  colorMode = 'black';
});

// Event listener for the white button
whiteButton.addEventListener('click', function () {
  colorMode = 'white';
});

// Event listener for the rainbow button
rainbowButton.addEventListener('click', function () {
  colorMode = 'rainbow';
});

// Generate the initial grid
createGrid(16);
