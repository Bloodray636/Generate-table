function updateData(row, col) {
    tableData[row][col] = document.getElementById("myTable").rows[row].cells[col].innerText;
    updateCode();
}