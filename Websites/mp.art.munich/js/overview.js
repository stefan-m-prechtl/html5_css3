import { $, $$ } from './util.js';
import { Storage } from './storage.js'

export function initOverview() {

    // Übersicht
    let sectionPicture = $('.site-content-pictures')

    // Bilddaten aus Registry holen
    let pictureList = Storage.valueList();


    for (let picture of pictureList) {
        let figureElem = document.createElement('figure')
        let imgElem = document.createElement('img')
        let figcaptionElem = document.createElement('figcaption')

        imgElem.alt = picture.title;
        imgElem.loading = 'lazy'
        imgElem.src = 'pic/' + picture.file

        figcaptionElem.textContent = picture.title;
        figureElem.classList.add('use4slideshow')

        figureElem.appendChild(imgElem)
        figureElem.appendChild(figcaptionElem)
        sectionPicture.appendChild(figureElem)
    };

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
        figureElem.on('click', (e) => {
            handleClickOnOverviewPic(e);
        })

    });

    // Modaldialog "Close"  
    let close = $('.close');
    close.on('click', () => {
        let modal = $('#modal');
        modal.classList.add('hideDiv');
    })
}

function handleClickOnOverviewPic(e) {
    let elem = e.target;
    if (elem.nodeName === 'IMG') {
        let src = elem.getAttribute('src')
        // Bilder sind im Ordner "pic/"
        let imageKey = src.slice(4);

        let picture = Storage.get(imageKey);
        let description = picture.desc;

        let descElement = $('#overview-description');
        descElement.innerHTML = description;
    }
}

function handleDblClickOnOverviewPic(e) {

    let elem = e.target;
    if (elem.nodeName === 'IMG') {
        let src = elem.getAttribute('src')
        let alt = elem.getAttribute('alt')

        let modalDiv = $('#modal');
        modalDiv.classList.remove('hideDiv');

        let img = $('#modalImage');
        img.src = src;
        let caption = $('#modalFigcaption');
        caption.textContent = alt;

    }
}