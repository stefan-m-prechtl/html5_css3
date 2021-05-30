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

// Zufallszahl von/bis
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener('DOMContentLoaded', init);


// "Basis"-URL (d.h. ohne queryString mit Seitenangabe) für Routing speichern
const originHref = window.location.origin + window.location.pathname;

/*
 * Initialisierung der Übersicht: Bilder laden und anzeigen
 */
function init() {

  initRouting();
  initNavigation();
  initOverview();
  //initGalery(randomNumber(1, 199));
  initGalery(2);

  selectPage(window.location.search);

}

function initRouting() {

  // Event wird ausgelöst durch Browser "Eine Seite zurück"/"Eine Seite vor"
  window.addEventListener('popstate', (event) => {
    let pageName = window.location.search.split('=').pop()
    showPage(pageName);
  });
}

function initNavigation() {

  let navigationButton = $('#nav_button');
  navigationButton.on('click', (e) => {
    handleNavButtonClick(e);
  })

  let navigationLinks = $$(".nav_link");
  navigationLinks.forEach(link => {
    link.on("click", (e) => {
      handleNavClick(e);
    });
  });
}

function initOverview() {

  // Übersicht
  let sectionPicture = $('.site-content-pictures')

  for (let index = 1; index < 200; index++) {
    let figureElem = document.createElement('figure')
    let imgElem = document.createElement('img')
    let figcaptionElem = document.createElement('figcaption')

    imgElem.alt = 'bild' + String(index)
    imgElem.loading = 'lazy'
    imgElem.src = 'pic/image' + String(index) + '.jpg'

    figcaptionElem.textContent = 'Bild' + String(index)

    figureElem.appendChild(imgElem)
    figureElem.appendChild(figcaptionElem)
    figureElem.classList.add('use4slideshow')

    sectionPicture.appendChild(figureElem)
  }

  let bntOneColum = $('#oneColumn')
  let bntTwoColum = $('#twoColumn')
  let bntThreeColum = $('#threeColumn')

  bntOneColum.on('click', () => {
    sectionPicture.style['grid-template-columns'] = 'repeat(1,auto)'
  })

  bntTwoColum.on('click', () => {
    sectionPicture.style['grid-template-columns'] = 'repeat(2,auto)'
  })

  bntThreeColum.on('click', () => {
    sectionPicture.style['grid-template-columns'] = 'repeat(3,auto)'
  })

  // Doppelklick auf ein Bild 
  let figureElements = $$('.use4slideshow')
  figureElements.forEach(figureElem => {
    figureElem.on('dblclick', (e) => {
      handleDblClickOnOverviewPic(e);
    })

  });
}

function handleDblClickOnOverviewPic(e) {

  let elem = e.target;
  console.log(elem);
  if (elem === HTMLImageElement) {
    let src = elem.getAttribute('src')
    console.log(src);

  }
}

function initGalery(imgID) {
  let buttonNext = $('#slideShowNext')
  let buttonPrevious = $('#slideShowPrevious')

  buttonNext.on('click', () => {
    let figureElem = $('#slideShowFigure');
    let currentImageId = parseInt(figureElem.getAttribute('data-img-id'));
    showPicture(currentImageId + 1);
  });

  buttonPrevious.on('click', () => {
    let figureElem = $('#slideShowFigure');
    let currentImageId = parseInt(figureElem.getAttribute('data-img-id'));
    showPicture(currentImageId - 1);
  });

  showPicture(imgID);
}

function showPicture(imgID) {
  let figureElem = $('#slideShowFigure');
  figureElem.setAttribute('data-img-id', imgID);
  let img = figureElem.firstElementChild;

  let top = figureElem.getBoundingClientRect().top;
  let imgHeigth = window.innerHeight - top - 70;
  console.log('img Höhe: ' + imgHeigth);
  img.style['max-height'] = imgHeigth + 'px'
  img.style['width'] = 'auto';

  img.src = `pic/image${imgID}.jpg`;

}


function selectPage(search) {
  if (!search) {
    history.replaceState(
      {},
      'Start',
      originHref + '?page=start'
    )
  }
  else {
    let pageName = window.location.search.split('=').pop()
    showPage(pageName);
  }
}

function handleNavButtonClick(e) {
  let ulElem = $(".site-nav ul")
  let displayStyle = ulElem.style['display'];
  if (displayStyle === 'block') {
    ulElem.style['display'] = 'none';
    e.target.innerHTML = '&#9776; Menü';
  }
  else {
    ulElem.style['display'] = 'block';
    e.target.innerHTML = '&#x2716; Menü';
  }
}

function handleNavClick(e) {

  let pageName = e.target.getAttribute('href');
  history.pushState(
    {},
    pageName,
    originHref + '?page=' + pageName
  )
  showPage(pageName);
  return e.preventDefault();
}

function showPage(pageName) {

  let virtualPages = $$(".virtualpage");
  virtualPages.forEach(page => page.classList.add('hideDiv'));

  let selector = '[href=\'' + pageName + '\']';
  let navLink = $(selector);
  navLink.focus();

  let currentPage = $('#' + pageName);
  currentPage.classList.remove('hideDiv');
  let currentAside = $('#' + pageName + '-aside');
  currentAside.classList.remove('hideDiv');

}