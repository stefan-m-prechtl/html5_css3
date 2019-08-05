"use strict";

/*
 * Initialisierung: 
 * - Presenter/View für Main (Startseite) erzeugen
 * - initiale Startansicht zeigen
 */
function init() {
    const mainListPresenter = new PresenterList(new ViewList("#viewList"));
    mainListPresenter.viewLoaded();
}

document.addEventListener('DOMContentLoaded', init);