"use strict";

// Selektion jQuery-like
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Eventhandling jQuery-like
Node.prototype.on = function (name, fn)
{
    this.addEventListener(name, fn);
    return this;
}

// Eigenschaften von Array (z.B. forEach) an NodeList "vererben"
NodeList.prototype.__proto__ = Array.prototype;


