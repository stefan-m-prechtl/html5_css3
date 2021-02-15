import PresenterList from "./taskListPresenter.js";
import ViewList from "./taskListView.js";

import PresenterEdit from "./taskEditPresenter.js";
import ViewEdit from "./taskEditView.js";
import Model from "./taskModel.js";

/*
 * Initialisierung:
 * - Presenter/View für Main (Startseite) erzeugen
 * - initiale Startansicht zeigen
 */
function init() {
  const model = new Model();
  const viewListPresenter = new PresenterList(new ViewList("#viewList"), model);
  const viewEditPresenter = new PresenterEdit(new ViewEdit("#viewEdit"), model);
}

document.addEventListener("DOMContentLoaded", init);
