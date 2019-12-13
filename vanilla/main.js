// ES6 Modules are always executed in strict mode, so there is no need for ‘use strict’ .

// Import der Helper-Funktionen
import { $, $$ } from "./vanilla.js";


const init = () => {
    $('#search').on('click', () => {
        $('#progress').value += 1;
        alert($('#project').value);
    });
};


// Initialiserung der Applikation
init();