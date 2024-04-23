var tableData = [];

function generateTable() {
    var rows = document.getElementById("rowsInput").value;
    var cols = document.getElementById("colsInput").value;
    var oldTableData = tableData;
    var table = "<table class='table table-bordered' id='myTable'><tbody>";

    tableData = [];
    for (var i = 0; i < rows; i++) {
        tableData.push([]);
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
            var cellData = "";
            if (i < oldTableData.length && j < oldTableData[i].length) {
                cellData = oldTableData[i][j];
            }
            table += "<td contenteditable='true' oninput='updateData(" + i + ", " + j + ")'>" + cellData + "</td>";
            if (i < oldTableData.length && j < oldTableData[i].length) {
                tableData[i][j] = cellData;
            } else {
                tableData[i].push(cellData);
            }
        }
        table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById("tableContainer").innerHTML = table;
    var cells = document.querySelectorAll("td");
    cells.forEach(function(cell) {
        cell.setAttribute("contenteditable", "true");
    });

    updateCode();
}