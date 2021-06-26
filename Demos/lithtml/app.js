import { html, render } from './node_modules/lit-html/lit-html.js';

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM geladen');

    const product = "lit-html";
    const content = html`<p>Dies ist eine Demo für ${product}</p>`;
    const elem = document.querySelector('p');
    render(content, elem);
}