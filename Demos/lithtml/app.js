"use strict";

// Import lit-html
//import {html, render} from 'https://unpkg.com/lit-html?module';
//import { html, render } from './node_modules/lit-html/lit-html.js';
import { html, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';

class Task {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }
}


let todos = [];
let counter = 0;

const btnClearCaption = 'Clear';

const handlerBtnClear = {
    handleEvent(e) {
        todos = [];
        counter = 0;
        render(contentTemplate(todos), document.querySelector('#todocontent'));
    }
}

const handlerBtnLoad = {
    handleEvent(e) {
        todos = loadData(5);
        render(contentTemplate(todos), document.querySelector('#todocontent'));
    }
}

const handlerBtnAdd = {
    handleEvent(e) {
        let task = new Task(++counter, `Aufgabe ${counter}`);
        todos.push(task);
        render(contentTemplate(todos), document.querySelector('#todocontent'));
    }
}

const handlerBtnReverse = {
    handleEvent(e) {
        todos = todos.reverse();
        render(contentTemplate(todos), document.querySelector('#todocontent'));
    }
}

let buttonTemplate = html `
  <button @click=${handlerBtnClear}>${btnClearCaption}</button>
  <button @click=${handlerBtnLoad}>Load</button>
  <button @click=${handlerBtnAdd}>Add</button>
  <button @click=${handlerBtnReverse}>Reverse</button>
  `;

let contentTemplate = (items) => html `
  ${items.map((item) => html`<li>${item.content}</li>`)}
`;

let contentTemplate2 = (items) => html `
  ${repeat(items, (item) => item.id, (item,index) => html`
    <li>${item.content}</li>
  `)}
`;

let completeTemplate = (items) => html `
  ${buttonTemplate}
  <ul id='todocontent'>${contentTemplate(items)}</ul>  
  `;

function loadData(quantity) {
    counter = 0;
    let result = [];
    for (let index = 0; index < quantity; index++) {
        result.push(new Task(++counter, `Aufgabe ${counter}`));
    }
    return result;
}

function init() {
    todos = loadData(1000);
    render(completeTemplate(todos), document.querySelector('#todoliste'));

}

init();