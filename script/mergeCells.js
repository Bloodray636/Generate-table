var tableData = [];

document.addEventListener("DOMContentLoaded", function() {
    var selectedCells = [],
        isSelecting = false;

    function toggleCellSelection(cell) {
        var index = selectedCells.indexOf(cell);
        if (index === -1) {
            selectedCells.push(cell);
            cell.classList.add("selected");
        } else {
            selectedCells.splice(index, 1);
            cell.classList.remove("selected");
        }
    }

    function mergeSelectedCells() {
        if (selectedCells.length > 1) {
            var table = document.getElementById("myTable");
            var [minRow, maxRow, minCol, maxCol] = selectedCells.reduce(function(acc, cell) {
                var row = cell.parentNode.rowIndex,
                    col = cell.cellIndex;
                return [Math.min(acc[0], row), Math.max(acc[1], row), Math.min(acc[2], col), Math.max(acc[3], col)];
            }, [Infinity, -Infinity, Infinity, -Infinity]);

            if (minRow === maxRow) {
                var mergedCell = table.rows[minRow].cells[minCol];
                mergedCell.colSpan = maxCol - minCol + 1;
                for (var j = minCol + 1; j <= maxCol; j++) {
                    var cellToRemove = table.rows[minRow].cells[minCol + 1];
                    if (cellToRemove) {
                        cellToRemove.parentNode.removeChild(cellToRemove);
                    }
                }
            } else if (minCol === maxCol) {
                var mergedCell = table.rows[minRow].cells[minCol];
                mergedCell.rowSpan = maxRow - minRow + 1;
                for (var i = minRow + 1; i <= maxRow; i++) {
                    var cellToRemove = table.rows[minRow + 1].cells[minCol];
                    if (cellToRemove) {
                        cellToRemove.parentNode.removeChild(cellToRemove);
                    }
                }
            } else {
                var mergedCell = table.rows[minRow].cells[minCol];
                mergedCell.rowSpan = maxRow - minRow + 1;
                mergedCell.colSpan = maxCol - minCol + 1;
                for (var i = minRow; i <= maxRow; i++) {
                    for (var j = minCol + 1; j <= maxCol; j++) {
                        var cellToRemove = table.rows[i].cells[minCol + 1];
                        if (cellToRemove) {
                            cellToRemove.parentNode.removeChild(cellToRemove);
                        }
                    }
                }
            }

            selectedCells = [];
            updateCode();
        } else {
            console.error("Ошибка: Должно быть выбрано не менее двух ячеек для их объединения.");
        }
    }
    
    document.getElementById("tableContainer").addEventListener("mousedown", function(event) {
        if (isSelecting && event.target.tagName === "TD") {
            toggleCellSelection(event.target);
        }
    });

    document.getElementById("flexSwitchCheckDefault").addEventListener("change", function() {
        isSelecting = !isSelecting;
    });

    var mergeButton = document.getElementById("mergeButton");
    if (mergeButton) {
        mergeButton.addEventListener("click", mergeSelectedCells);
    }
});