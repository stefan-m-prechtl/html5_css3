import { $, $$ } from './util.js';
import { initNavigation, initRouting, selectPage } from './navigation.js'
import { initOverview } from './overview.js'
import { initGalery } from './galery.js'
import { Storage } from './storage.js'


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

  // temp. während Entwicklung 
  window.addEventListener('resize', reportWindowSize);

  Storage.add('data', 'Daten aus Storage');

  initNavigation();
  initRouting();

  initOverview();
  initGalery(10);

  // Startseite aktivieren
  selectPage(window.location.search);


}


// temp. während Entwicklung
function gcd(a, b) {
  return (b == 0) ? a : gcd(b, a % b);
}

function reportWindowSize() {
  let elem = $('#sizeinfo')
  let w = window.innerWidth;
  let h = window.innerHeight;

  let txt = '';

  let r = gcd(w, h);
  let a = (w / r) + ":" + (h / r);

  let wAsEM = w / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

  if (window.matchMedia("(orientation: portrait)").matches) {
    txt = 'aspect: ' + a + ', width (em)=' + wAsEM + ', height (px)=' + h + ', portrait';
  }

  if (window.matchMedia("(orientation: landscape)").matches) {
    txt = 'aspect: ' + a + ', width (em)=' + wAsEM + ', height (px)=' + h + ', landscape';
  }
  elem.innerHTML = txt;
}







