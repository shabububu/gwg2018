function colorPixel(event) {
    $(this).css('backgroundColor', $('#colorPicker').val());
};

function makeGrid(event) {
    const grid = $('#pixelCanvas');
    const gridHeight = $('#inputHeight').prop('value');
    const gridWidth = $('#inputWeight').prop('value');

    event.preventDefault();
    grid.empty();
    for (let i = 0; i < gridHeight; i++) {
        let row = $('<tr></tr>');
        for (let cols = 0; cols < gridWidth; cols++) {
            row.append($('<td></td>'));
        }
        grid.append(row);
    }
};

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);

// Allow user to click a cell in the grid to fill that cell with the chosen color.
$('#pixelCanvas').on('click', 'td', colorPixel);
