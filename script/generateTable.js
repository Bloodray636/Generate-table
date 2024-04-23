var tableData = [];

function generateTable() {
    var rows = parseInt(document.getElementById("rowsInput").value);
    var cols = parseInt(document.getElementById("colsInput").value);
    var oldTableData = tableData;
    var table = "<table class='table table-bordered' id='myTable'><tbody>";

    tableData = [];
    for (var i = 0; i < rows; i++) {
        tableData.push([]);
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
            var cellData = (i < oldTableData.length && j < oldTableData[i].length) ? oldTableData[i][j] : "";
            table += `<td contenteditable='true' oninput='updateData(${i}, ${j})'>${cellData}</td>`;
            (i < oldTableData.length && j < oldTableData[i].length) ? tableData[i][j] = cellData : tableData[i].push(cellData);
        }
        table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById("tableContainer").innerHTML = table;
    document.querySelectorAll("td").forEach(cell => cell.setAttribute("contenteditable", "true"));

    updateCode();
}