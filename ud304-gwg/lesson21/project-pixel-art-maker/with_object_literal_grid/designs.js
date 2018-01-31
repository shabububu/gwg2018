var grid = {
    height: function () { return $('#inputHeight').val() },
    width: function() { return $('#inputWeight').val() },
    pixelColor: function() { return $('#colorPicker').val() },
    clear: function() { $('#pixelCanvas').empty() },
    colorGrid: function(event) { $(this).css('backgroundColor', grid.pixelColor()) },
    makeGrid: function(event) {
        event.preventDefault();
        var canvas = $('#pixelCanvas');
        grid.clear();
        for (var rowNum = 0; rowNum < grid.height(); rowNum++) {
            var row = $('<tr></tr>');
            for (var colNum = 0; colNum < grid.width(); colNum++) {
                row.append('<td></td>');
            };
            canvas.append(row);
        }        
    }    
};

// When size is submitted by the user, call grid.makeGrid
$('#sizePicker').submit(grid.makeGrid);

// Allow user to click a cell in the grid to fill that cell with the chosen color.
$('#pixelCanvas').on('click', 'td', grid.colorGrid);
