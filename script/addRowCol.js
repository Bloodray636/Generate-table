function addRowOrColumn(type) {
    const table = document.getElementById("myTable");
    if (!table) {
        console.error("Ошибка: Таблица не найдена.");
        return;
    }
    const numRows = table.rows.length;
    const numCols = numRows > 0 ? table.rows[0].cells.length : 0;
    if (type === "row") {
        const newRow = table.insertRow();
        for (let i = 0; i < numCols; i++) {
            const newCell = newRow.insertCell();
            newCell.contentEditable = true;
        }
    } else if (type === "column") {
        for (let i = 0; i < numRows; i++) {
            const newCell = table.rows[i].insertCell();
            newCell.contentEditable = true;
        }
    }
    updateCode();
}

document.getElementById("addRowButton").addEventListener("click", () => addRowOrColumn("row"));
document.getElementById("addColumnButton").addEventListener("click", () => addRowOrColumn("column"));