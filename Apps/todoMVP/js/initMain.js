import PresenterList from './taskListPresenter.js';
import ViewList from './taskListView.js';

import PresenterEdit from './taskEditPresenter.js';
import ViewEdit from './taskEditView.js';

/*
 * Initialisierung: 
 * - Presenter/View für Main (Startseite) erzeugen
 * - initiale Startansicht zeigen
 */
function init() {
    const viewListPresenter = new PresenterList(new ViewList("#viewList"));
    const viewEditPresenter = new PresenterEdit(new ViewEdit("#viewEdit"));
    viewListPresenter.viewLoaded();

}

document.addEventListener('DOMContentLoaded', init);