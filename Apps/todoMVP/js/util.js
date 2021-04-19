// ES6 Modules are always executed in strict mode, so there is no need for ‘use strict’

// JQuery like Selektoren
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// JQuery like Eventhandler
Node.prototype.on = function (name, fn) {
  this.addEventListener(name, fn);
  return this;
};
NodeList.prototype.on = NodeList.prototype.on = function (name, fn) {
  this.forEach((elem) => elem.on(name, fn));
  return this;
};

// Array-Methoden bereitstellen
NodeList.prototype.__proto__ = Array.prototype;
HTMLCollection.prototype.__proto__ = Array.prototype;

export { $, $$ };
