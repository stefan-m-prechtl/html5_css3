// Import lit-html
//import {html, render} from 'https://unpkg.com/lit-html?module';
//import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from 'lit-html';

/*
// Define a template
let myTemplate = (data) => html`
  <h1>${data.title}</h1>
  <p>${data.content}</p>`;


// Render the template to the document
const result = myTemplate({title: 'lit-hml', content: 'Hello from lit-html'});
render(result, document.body);
*/

const todos = [];
todos.push('Einkaufen');
todos.push('Aufräumen');
todos.push('Gießen');

let myTemplate = (items) => html `
  ${items.map((item) => html`<li>${item}</li>`)}
`;


render(myTemplate(todos), document.querySelector('#todoliste'));