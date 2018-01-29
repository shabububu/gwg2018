// Select color input
function pixelColor() {
    //return '#0f0';
    return $('#colorPicker').val();
};

// Select size input
function gridHeight() {
    return $('#inputHeight').prop('value');
};

function gridWidth() {
    // TODO: This inputWeight should probably be inputWidth, instead of inputWeight
    return $('#inputWeight').prop('value');
};

function clearGrid(grid) {
    grid.empty();
};

function colorPixel(event) {
    $(this).css('backgroundColor', pixelColor());
};

function addGridRow(numCols, grid) {
    var row = $('<tr></tr>');
    for (var cols = 0; cols < numCols; cols++) {
        row.append('<td></td>');
    }
    grid.append(row);
};

function makeGrid(event) {
    event.preventDefault();
    var grid = $('#pixelCanvas');
    clearGrid(grid);
    for (var row = 0; row < gridHeight(); row++) {
        addGridRow(gridWidth(), grid);
    }
};

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);

// Allow user to click a cell in the grid to fill that cell with the chosen color.
$('#pixelCanvas').on('click', 'td', colorPixel);
