function updateCode() {
    // Получаем значение цвета границ таблицы из соответствующего инпута
    var borderColor = document.getElementById('borderColor').value;
    // Получаем значение цвета текста из соответствующего инпута
    var textColor = document.getElementById('textColor').value;

    // Генерируем CSS код для таблицы с учетом выбранных цветов
    var code = "";
    code += "<style>\n";
    code += "table {\n caption-side: bottom;\n vertical-align: top;\n margin-bottom: 1rem;\n border-collapse: collapse;\n width: 100%;\n border-color: " + borderColor + ";\n }\n";
    code += "td {\n border: 1px solid " + borderColor + ";\n padding: 8px;\n color: " + textColor + ";\n }\n"; // Добавляем цвет текста
    code += "</style>";

    // Выводим сгенерированный CSS код в textarea с id "codeStyleContainer"
    document.getElementById("codeStyleContainer").value = code;
    
    // Получаем элемент таблицы по id
    var tableElement = document.getElementById("myTable");

    // Проверяем, существует ли таблица
    if (!tableElement) {
        console.error("Ошибка: Таблица не найдена.");
        return;
    }

    // Получаем количество строк в таблице
    var numRows = tableElement.rows.length;

    // Проверяем, что в таблице есть строки
    if (numRows === 0) {
        console.error("Ошибка: В таблице отсутствуют строки.");
        return;
    }

    // Генерируем HTML код таблицы
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

    // Форматируем HTML код таблицы
    tableHtml = formatHtml(tableHtml);

    // Получаем элемент textarea для вывода HTML кода таблицы
    var codeContainer = document.getElementById("codeContainer");

    // Проверяем, существует ли элемент textarea
    if (codeContainer) {
        // Выводим HTML код таблицы в textarea
        codeContainer.value = tableHtml;
    } else {
        console.error("Ошибка: Контейнер для кода не найден.");
    }
}