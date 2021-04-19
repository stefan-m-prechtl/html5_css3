import PresenterList from "./taskListPresenter.js";
import ViewList from "./taskListView.js";

import PresenterEdit from "./taskEditPresenter.js";
import ViewEdit from "./taskEditView.js";
import Model from "./taskModel.js";

// Event-Listener: Event feuert, wenn DOM-Baum vollständig geladen ist
document.addEventListener("DOMContentLoaded", init);

/*
 * Initialisierung:
 * - Model (gemeinsam für beide Views erzeugen)
 * - Alle Presenter/Views für Main (Startseite) erzeugen
 * - Übergeordnete Events regisitieren
  */
function init() {
  const model = new Model();
  const viewListPresenter = new PresenterList(new ViewList("#viewList"), model);
  const viewEditPresenter = new PresenterEdit(new ViewEdit("#viewEdit"), model);

  // Übergeordnete Events zum Austausch für beide Presenter
  document.addEventListener("taskAdded", () => {
    viewListPresenter.showAllTasks();
  })

}

