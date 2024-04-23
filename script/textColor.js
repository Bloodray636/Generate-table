document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('textColor').addEventListener("input", function() {
        document.querySelectorAll('#myTable td').forEach(cell => cell.style.color = this.value);
        updateCode();
    });
});