// JQuery like Selektoren
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// JQuery like Eventhandler
Node.prototype.on = function (name, fn) {
  this.addEventListener(name, fn)
  return this
}
NodeList.prototype.on = NodeList.prototype.on = function (name, fn) {
  this.forEach((elem) => elem.on(name, fn))
  return this
}

// Array-Methoden bereitstellen
NodeList.prototype.__proto__ = Array.prototype
HTMLCollection.prototype.__proto__ = Array.prototype

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener('DOMContentLoaded', init)

window.addEventListener('onpageshow', (event) => {
  console.log(event);
  console.log('onpageshow');

});

/*
 * Initialisierung:
 */
function init() {

  const state = { 'pageName': 'start' }
  history.replaceState(
    state,
    'Start',
    '/start'
  )
  window.addEventListener('popstate', (event) => {
    showDiv(event.state.pageName);

  });

  initNavigation();

}

function initNavigation() {
  let link2Start = $('#navstart')
  let link2Overview = $('#navoverview')
  let link2Details = $('#navdetails')

  link2Start.on("click", (e) => {
    handleNavClick(e);
  });

  link2Overview.on("click", (e) => {
    handleNavClick(e);
  });

  link2Details.on("click", (e) => {
    handleNavClick(e);
  });

}

function handleNavClick(e) {
  let pageName = e.target.getAttribute('href').split('/').pop();
  const state = { 'pageName': pageName }
  history.pushState(
    state,
    pageName,
    e.target.href
  )

  showDiv(pageName);
  return e.preventDefault();
}

function showDiv(pageName) {

  let divStart = $('#start')
  let divOverview = $('#overview')
  let divDetails = $('#details')


  divStart.classList.add('hideDiv');
  divOverview.classList.add('hideDiv');
  divDetails.classList.add('hideDiv');

  if (pageName === "start") {
    divStart.classList.remove('hideDiv');
  }

  if (pageName === "overview") {
    divOverview.classList.remove('hideDiv');
  }

  if (pageName === "details") {
    divDetails.classList.remove('hideDiv');
  }

}
