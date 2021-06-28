import { $, $$ } from './util.js';

export function initGalery(imgID) {
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
    let img = figureElem.lastElementChild;

    let top = figureElem.getBoundingClientRect().top;
    let imgHeigth = window.innerHeight - top - 70;
    console.log('img Höhe: ' + imgHeigth);
    img.style['max-height'] = imgHeigth + 'px'
    img.style['width'] = 'auto';

    img.src = `pic/image${imgID}.jpg`;

}