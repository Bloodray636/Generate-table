document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('borderColor').addEventListener("input", function() {
        var borderColor = this.value;
        document.querySelectorAll('#myTable td').forEach(cell => cell.style.borderColor = borderColor);
        document.getElementById('myTable').style.borderColor = borderColor;
        updateCode();
    });
});