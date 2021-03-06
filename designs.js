// Select color input
const inputColor = document.querySelector('#colorPicker');

// Select size input
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');

// Selecting the canvas grid
const pixelCanvasGrid = document.querySelector('#pixelCanvas');

// A function that will handle the grid making
function makeGrid() {
    // Resets inputs after each time submit button is clicked
    pixelCanvasGrid.innerHTML = '';
    // Loop through the input value for height and create equivalent rows
    for (var h = 1; h <= gridHeight.value; h++) {
        let tableRow = document.createElement('tr');
        pixelCanvasGrid.appendChild(tableRow);
        // then make cells for each row
        for (var c = 1; c <= gridWidth.value; c++) {
            let cell = document.createElement('td');
            tableRow.appendChild(cell);
            //onclick, paint selected row by looping over 'td' to get the exact clicked 
            const cellToPaint = document.querySelectorAll('td');
            for (i = 0; i < cellToPaint.length; i++) {
                cellToPaint[i].addEventListener('click', function (event) {
                    event.target.style.backgroundColor = inputColor.value;
                });
            };
        };
    };
};


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (evt) {
    //This will prevent the form from reloading every time the page is refreshed.
    evt.preventDefault();
    // calling makeGrid()
    makeGrid();
});
