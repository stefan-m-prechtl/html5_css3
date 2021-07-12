import { $, $$ } from './util.js';
import { Storage } from './storage.js'

let pictureList = [];

export function initGalery(imgID) {

    // Bilddaten aus Registry holen
    pictureList = Storage.valueList();

    let buttonNext = $('#slideShowNext')
    let buttonPrevious = $('#slideShowPrevious')

    buttonNext.on('click', () => {
        let figureElem = $('#slideShowFigure');
        let nextImageId = parseInt(figureElem.getAttribute('data-img-id')) + 1;
        if (nextImageId < Storage.size()) {
            showPicture(nextImageId);
        }
    });

    buttonPrevious.on('click', () => {
        let figureElem = $('#slideShowFigure');
        let previousImageId = parseInt(figureElem.getAttribute('data-img-id')) - 1;
        if (previousImageId > 0) {
            showPicture(previousImageId);
        }
    });

    showPicture(imgID);
}

function showPicture(imgID) {
    let figureElem = $('#slideShowFigure');
    figureElem.setAttribute('data-img-id', imgID);
    let img = figureElem.lastElementChild;

    let top = figureElem.getBoundingClientRect().top;
    let imgHeigth = window.innerHeight - top - 70;
    console.log('img Höhe: ' + imgHeigth);
    img.style['max-height'] = imgHeigth + 'px'
    img.style['width'] = 'auto';


    let picture = pictureList[imgID];

    img.alt = picture.title;
    img.src = `pic/${picture.file}`;

    let titleElem = $('#slideShowFigcaptionText');
    titleElem.innerHTML = picture.title;

    let descElement = $('#galery-description');
    descElement.innerHTML = picture.desc;

}