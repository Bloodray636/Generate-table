document.addEventListener("DOMContentLoaded", function() {
    var colorInput = document.getElementById('borderColor');
    colorInput.addEventListener("input", function() {
        var borderColor = this.value;
        var cells = document.querySelectorAll('#myTable td');
        cells.forEach(function(cell) {
            cell.style.borderColor = borderColor;
        });
        var table = document.getElementById('myTable');
        table.style.borderColor = borderColor;
        updateCode();
    });
});