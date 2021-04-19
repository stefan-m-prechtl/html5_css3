import PresenterList from './taskListPresenter.js';

/**
 * View-Klasse für "Liste"
 */
export default class ViewList {
  /**
   *Konstruktor
   * @param {string} idRootElement Selektor für DOM-Element, das für den View als Root-Element verwendet wird
   */
  constructor(idRootElement) {
    this.rootElement = document.querySelector(idRootElement);
    this.initEventhandler();
  }

  /**
   * Zugehörigen Presenter mit diesem View "verknüpfen"
   * @param {PresenterList} presenter
   */
  setPresenter(presenter) {
    this.presenter = presenter;
  }

  /**
     * DOM-Elememt im "View-Teilbaum" (ab View-Root) selektieren
     * @param {string} selector Selektor für DOM-Selektion
     * @returns {HTMLElement} Selektiertes HTML-Element
     */
  $(selector) {
    return this.rootElement.querySelector(selector);
  }

  /**
   * Alle Events für diesen Views definieren
   */
  initEventhandler() {
    // Gui-Elemente aus DOM holen (über Rootelement des Views!)
    const btnRefresh = this.$("#btnRefresh");
    const btnClear = this.$("#btnClear");
    const lnkAllTasks = this.$("#lnkAll")
    const lnkUndoneTasks = this.$("#lnkUndone")
    const lnkDoneTasks = this.$("#lnkDone")


    // Event-Listener registrieren
    btnRefresh.on("click", () => {
      this.presenter.loadTasks();
    });

    btnClear.on("click", () => {
      this.presenter.clearTasks();
    });

    lnkAllTasks.on("click", () => {
      this.presenter.showAllTasks();
    })

    lnkUndoneTasks.on("click", () => {
      this.presenter.showUndoneTasks();
    })

    lnkDoneTasks.on("click", () => {
      this.presenter.showDoneTasks();
    })
  }

  /**
   * Anzeige aller Tasks (inkl. Zähler) zurücksetzen 
   */
  clearTasks() {
    // Zähler rücksetzen
    this.setCounter(0)
    // Ersten Tabellen-Body aus DOM holen und leeren
    let tablebody = this.$("table").tBodies[0];
    tablebody.innerHTML = "";

  }

  /**
   * Zähler "Anzahl" mit übergebenen Wert anzeigen
   * @param {number} value 
   */
  setCounter(value) {
    // Zähler aktualisieren
    let counter = this.$("#counter")
    counter.innerHTML = value
  }

  /**
   * Jede Task aus dem übergebenen Array darstellen
   * @param {Array} tasks
   */
  showTasks(tasks) {

    // Alle Daten rücksetzen
    this.clearTasks()

    // Zähler aktualisieren
    this.setCounter(tasks.length)

    // Jede Task als Tabellenzeile anfügen
    let rows = "";
    let tablebody = this.$("table").tBodies[0];
    tasks.forEach((task) => {
      let template = this.$("#templateTableRow");

      let tr = document.importNode(template.content, true);
      let cells = tr.querySelectorAll("td");

      let state = cells[0].firstChild;
      let description = cells[1];
      let priority = cells[2];

      state.setAttribute("data-task-id", task.id);
      if (task.done) {
        state.setAttribute("checked", "");
        description.classList.add("done");
      }
      state.on("click", (event) => {
        // TaskId aus Attribut holen
        let elem = event.target
        let id = elem.getAttribute("data-task-id");
        this.presenter.toggleTask(id);
      });

      description.textContent = task.description;
      priority.textContent = task.priority;

      tablebody.appendChild(tr);
    });
  }

  /**
   * Anzeige für Task mit ID=id aktualisieren
   * @param {Number} id 
   */
  updateTask(id) {

    let selektor = `[data-task-id="${id}"]`
    let inputElem = this.$(selektor)

    // HTML-Anzeige anpassen
    let description = inputElem.parentNode.nextElementSibling;
    if (inputElem.checked) {
      description.classList.add("done");
    } else {
      description.classList.remove("done");
    }
  }

}
