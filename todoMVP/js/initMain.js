import PresenterList from './tasklistPresenter.js';
import ViewList from './tasklistView.js';

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