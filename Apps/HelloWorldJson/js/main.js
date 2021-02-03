// import in html als Modul, damit automatisch in strict-Modus!
//"use strict";

import { initTable, createRow } from "./controls/tables_json.js"

/* Allgemeine Hilfsmethoden wie bei JQuery */
// Analog zu JQuery
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    let msg = 'Daten aus JSON-Datei';
    init(msg);
});
// Event-Listener: Event feuert, wenn das Web-Dokument inkl. aller ext. Resourcen (JS-, CSS-Dateien) ist
// document.addEventListener('load', init('Daten aus JSON-Datei'))

// Einstiegsfunktion ("Main") - Aufruf druch Event(-Listener)
function init(msg) {
    let headers = document.getElementsByTagName('h1');
    headers[0].innerHTML = msg;
    // Alternative mit querySelector bzw. $
    //let paragraph = document.querySelector('p');
    let paragraph = $('p');
    paragraph.innerHTML = 'Daten werden mit fetch() geholt';

    loadData();
}

// JSON-Daten per fetch() laden und als Tabelle anzeigen
function loadData() {
    fetch('data/article.json')
        .then(function (response) {
            return response.json();
        })
        .then(result  => {
            let table = initTable(['id','desc']);
            let articles = result.articles;
            articles.forEach(article => {
                let row = createRow([article.number, article.description]);
                table.tBodies[0].appendChild(row);
            });
            document.getElementById("jsondata").appendChild(table);
        })
        .catch(error => console.error(error));
}

