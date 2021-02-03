/*
* Modul für HTML-Tabellen
*/

// Tabelle dynamisch erzeugen
export function initTable(columns) {
    let table = document.createElement('table');
    let tableHeader = document.createElement('thead');
    let headerRow = document.createElement('tr');

    let htmlColumns = []
    columns.forEach(column => {
        let htlmColumn = document.createElement('th');
        htlmColumn.appendChild(document.createTextNode(column));
        htmlColumns.push(htlmColumn);
    });
    let tableBody = document.createElement('tbody');
    htmlColumns.forEach(htlmColumn => {
        headerRow.appendChild(htlmColumn)
    });

    tableHeader.appendChild(headerRow)
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.className = 'table jsondata';

    return table
}

// Tabellenzeile mit Inhalt erzeugen
export function createRow(values) {
    let row = document.createElement('tr');
    values.forEach(value => {
        let column =  document.createElement('td');
        column.appendChild(document.createTextNode(value));
        row.appendChild(column);
    });

    return row;
}