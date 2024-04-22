function updateCode() {
    var tableElement = document.getElementById("myTable");
    if (!tableElement) {
        console.error("Ошибка: Таблица не найдена.");
        return;
    }

    var numRows = tableElement.rows.length;
    if (numRows === 0) {
        console.error("Ошибка: В таблице отсутствуют строки.");
        return;
    }

    var tableHtml = "<table class='table table-bordered'>";
    for (var i = 0; i < numRows; i++) {
        tableHtml += "<tr>";
        var numCells = tableElement.rows[i].cells.length;
        for (var j = 0; j < numCells; j++) {
            var cell = tableElement.rows[i].cells[j];
            var cellValue = cell.textContent;
            var rowSpan = cell.rowSpan || 1;
            var colSpan = cell.colSpan || 1;
            tableHtml += "<td" + (rowSpan > 1 ? " rowspan='" + rowSpan + "'" : "") +
                (colSpan > 1 ? " colspan='" + colSpan + "'" : "") + ">" + cellValue + "</td>";
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";

    tableHtml = formatHtml(tableHtml);

    var codeContainer = document.getElementById("codeContainer");
    if (codeContainer) {
        codeContainer.value = tableHtml;
    } else {
        console.error("Ошибка: Контейнер для кода не найден.");
    }
}