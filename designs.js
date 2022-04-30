// Select color input
const inputColor = document.querySelector('#colorPicker').value;

// Select size input
const gridHeight = document.querySelector('#inputHeight').value;
const gridWidth = document.querySelector('#inputWidth').value;
const sizePicker = document.querySelector('#sizePicker');

// Selecting the canvas grid
const pixelCanvasGrid = document.querySelector('#pixelCanvas');

// Create event listener function that will be parsed as arguements
// function paintCell(event) {
//     event.target.style.backGroundColor = inputColor;
//     return event;
// }

// A function that will handle the grid making
function makeGrid() {
    // Resets inputs after each time submit button is clicked
    pixelCanvasGrid.innerHTML = '';
    // Loop through the input value for height and create equivalent rows
    for (var h = 1; h <= gridHeight.length; h++) {
        let tableRow = document.createElement('tr');
        pixelCanvasGrid.appendChild(tableRow);
        // then make cells for each row
        for (var c = 1; c <= gridWidth.length; c++) {
            let cell = document.createElement('td');
            tableRow.appendChild(cell);
            /*
            onclick, paint selected row by looping over 'td' 
            to get the exact clicked 
            */
            cellToPaint = document.querySelectorAll('td');
            for (var i = 0; i <= cellToPaint.length; i++) {
                cellToPaint[i].addEventListener('click', function (event) {
                    event.target.style.backGroundColor = inputColor;
                });
            };
        };
    };
};


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (evt) {
    //This will prevent the form from reloading every time the page is refreshed.
    evt.preventDefault();
    makeGrid();
});
