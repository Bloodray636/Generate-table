(() => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const rowsInput = form.querySelector('#rowsInput');
            const colsInput = form.querySelector('#colsInput');
            const rows = parseInt(rowsInput.value);
            const cols = parseInt(colsInput.value);
            let isValid = true;
            [rowsInput, colsInput].forEach(input => {
                const value = parseInt(input.value);
                if (value <= 0 || value > 100) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            if (!isValid) {
                form.classList.add('was-validated');
                return;
            }
            form.classList.remove('was-validated');
            generateTable(rows, cols);
        });
    });
})();