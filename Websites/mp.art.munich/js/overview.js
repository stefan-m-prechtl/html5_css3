import { $, $$ } from './util.js';
import { Storage } from './storage.js'

export function initOverview() {

    let data = Storage.get('data');
    console.log(data);

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

        // Modaldialog "Close"  
        let close = $('.close');
        close.on('click', () => {
            let modal = $('#modal');
            modal.classList.add('hideDiv');
        })

    });
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