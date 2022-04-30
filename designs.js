// Select color input
const inputColor = document.querySelector('#colorPicker').value;

// Select size input
const gridHeight = document.querySelector('#inputHeight').value;
const gridWidth = document.querySelector('#inputWidth').value;

// Selecting the canvas grid
const pixelCanvasGrid = document.querySelector('#pixelCanvas');

// Create event listener functions that will be parsed as arguements
function paintCell(event){
    event.target.style.backGroundColor = inputColor;
}

// A function that will handle the grid making
function makeGrid() {
    // Resets inputs after each time submit button is clicked
    pixelCanvasGrid.innerHTML = '';
    // Loop through the input value for height and create equivalent rows
    
}



// When size is submitted by the user, call makeGrid()
