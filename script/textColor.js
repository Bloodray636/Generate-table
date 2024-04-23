document.addEventListener("DOMContentLoaded", function() {
    var textColorInput = document.getElementById('textColor');
    textColorInput.addEventListener("input", function() {
        var textColor = this.value;
        var cells = document.querySelectorAll('#myTable td');
        cells.forEach(function(cell) {
            cell.style.color = textColor;
        });
        updateCode(); // Вызов функции для обновления CSS кода
    });
});