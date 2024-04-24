function updateCode() {
    const borderColor = document.getElementById('borderColor').value;
    const textColor = document.getElementById('textColor').value;
    const alignment = document.querySelector('input[name="flexRadioDefault"]:checked').value; // Получаем выбранное выравнивание текста
    const tableElement = document.getElementById("myTable");
    const codeStyleContainer = document.getElementById("codeStyleContainer");
    const codeContainer = document.getElementById("codeContainer");

    if (!tableElement) {
        console.error("Ошибка: Таблица не найдена.");
        return;
    }

    const numRows = tableElement.rows.length;
    if (numRows === 0) {
        console.error("Ошибка: В таблице отсутствуют строки.");
        return;
    }

    const codeStyle = `
        <style>
            table, td {
                border: 1px solid ${borderColor};
                padding: 8px;
                text-align: ${alignment};
            }
            table {
                caption-side: bottom;
                vertical-align: top;
                margin-bottom: 1rem;
                border-collapse: collapse;
                width: 100%;
            }
            td {
                color: ${textColor};
            }
        </style>
    `;
    codeStyleContainer.value = codeStyle;

    const tableHtml = `<table class='table table-bordered'>${[...tableElement.rows].map(row => `<tr>${[...row.cells].map(cell => `<td${cell.rowSpan > 1 ? " rowspan='" + cell.rowSpan + "'" : ""}${cell.colSpan > 1 ? " colspan='" + cell.colSpan + "'" : ""}>${cell.textContent}</td>`).join('')}</tr>`).join('')}</table>`;
    codeContainer ? codeContainer.value = formatHtml(tableHtml) : console.error("Ошибка: Контейнер для кода не найден.");
}