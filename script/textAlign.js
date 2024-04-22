document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('input[name="flexRadioDefault"]').forEach(function(radioButton) {
        radioButton.addEventListener("change", function() {
            document.querySelectorAll('td').forEach(function(cell) {
                cell.style.textAlign = this.value;
            }, this);
        });
    });
});