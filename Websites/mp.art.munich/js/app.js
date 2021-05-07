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

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener("DOMContentLoaded", init);

/*
 * Initialisierung:
  */
function init() {

    startSlideShow(1);

    // Slideshow
    let btnPrevious = $('#slideShowPrevious');
    let btnNext = $('#slideShowNext');

    let currentSlide = 100;

    btnPrevious.on("click", () => {
        currentSlide += 1;
        showSlide(currentSlide);
    });

    btnNext.on("click", () => {
        currentSlide -= 1;
        showSlide(currentSlide);
    });


    // Übersicht


    let sectionPicture = $('.site-content-pictures');

    for (let index = 1; index < 200; index++) {

        let figureElem = document.createElement('figure');
        let imgElem = document.createElement('img');
        let figcaptionElem = document.createElement('figcaption');

        imgElem.alt = 'bild' + String(index);
        imgElem.loading = 'lazy';
        imgElem.src = 'pic/image' + String(index) + '.jpg'

        figcaptionElem.textContent = 'Bild' + String(index);

        figureElem.appendChild(imgElem);
        figureElem.appendChild(figcaptionElem);
        figureElem.classList.add('use4slideshow');

        sectionPicture.appendChild(figureElem);
    }

    let bntOneColum = $('#oneColumn');
    let bntTwoColum = $('#twoColumn');
    let bntThreeColum = $('#threeColumn');


    bntOneColum.on("click", () => {
        sectionPicture.style['grid-template-columns'] = "repeat(1,auto)";
    });

    bntTwoColum.on("click", () => {
        sectionPicture.style['grid-template-columns'] = "repeat(2,auto)";
    });

    bntThreeColum.on("click", () => {
        sectionPicture.style['grid-template-columns'] = "repeat(3,auto)";
    });

}

function showSlide(index) {
    let imgSlideshow = $('#slideShowImage');
    imgSlideshow.src = 'pic/image' + index + '.jpg';
}

function startSlideShow(index) {
    showSlide(index);
    let newIndex = index + 1;
    if (newIndex < 50) {
        setTimeout(startSlideShow, 500, newIndex);
    }
}

