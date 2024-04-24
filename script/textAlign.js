document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('input[name="flexRadioDefault"]').forEach(function(radioButton) {
        radioButton.addEventListener("change", function() {
            var alignment = this.value;
            document.querySelectorAll('td').forEach(function(cell) {
                cell.style.textAlign = alignment;
            });
            updateCode();
        });
    });
});