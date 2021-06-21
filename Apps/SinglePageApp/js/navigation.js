import { $, $$ } from './util.js';

// "Basis"-URL (d.h. ohne queryString mit Seitenangabe) für Routing speichern
const originHref = window.location.origin + window.location.pathname;

export function initNavigation() {
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

export function initRouting() {

    // Event wird ausgelöst durch Browser "Eine Seite zurück"/"Eine Seite vor"
    window.addEventListener('popstate', (event) => {
        let pageName = window.location.search.split('=').pop()
        showPage(pageName);
    });
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