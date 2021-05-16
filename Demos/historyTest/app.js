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

const originHref = window.location.origin + window.location.pathname;

/*
 * Initialisierung:
 */
function init() {

  window.addEventListener('popstate', (event) => {
    let pageName = window.location.search.split('=').pop()
    showDiv(pageName);
  });

  initNavigation();

  let search = window.location.search;
  if (!search) {
    history.replaceState(
      {},
      'Start',
      originHref + '?page=start'
    )
  }
  else {
    let pageName = window.location.search.split('=').pop()
    showDiv(pageName);
  }

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

  let pageName = e.target.getAttribute('href');
  history.pushState(
    {},
    pageName,
    originHref + '?page=' + pageName
  )
  showDiv(pageName);
  return e.preventDefault();
}

function showDiv(pathName) {

  let divStart = $('#start')
  let divOverview = $('#overview')
  let divDetails = $('#details')


  divStart.classList.add('hideDiv');
  divOverview.classList.add('hideDiv');
  divDetails.classList.add('hideDiv');

  if (pathName === "start") {
    divStart.classList.remove('hideDiv');
  }

  if (pathName === "overview") {
    divOverview.classList.remove('hideDiv');
  }

  if (pathName === "details") {
    divDetails.classList.remove('hideDiv');
  }

}
