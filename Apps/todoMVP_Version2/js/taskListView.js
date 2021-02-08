import { $$ } from "./util.js";

export default class ViewList {
  /**
   *
   * @param {String} idRootElement
   */
  constructor(idRootElement) {
    this.rootElement = document.querySelector(idRootElement);
    this.tasks = new Set();

    this.initEventhandler();
  }

  /**
   *
   * @param {PresenterList} presenter
   */
  setPresenter(presenter) {
    this.presenter = presenter;
  }

  // "Root"-Element des Views
  $(element) {
    return this.rootElement.querySelector(element);
  }

  initEventhandler() {
    // Gui-Elemente aus DOM holen (über Rootelement des Views!)
    const btnRefresh = this.$("#btnRefresh");
    const btnClear = this.$("#btnClear");

    // Event-Listener registrieren
    btnRefresh.on("click", () => {
      this.tasks = this.presenter.loadTasks();
      this.showTasks(this.tasks);
    });

    btnClear.on("click", () => {
      this.tasks.clear();
      this.clearTasks();
    });
  }

  clearTasks() {
    // Ersten Tabellen-Body aus DOM holen und leeren
    let tablebody = this.$("table").tBodies[0];
    tablebody.innerHTML = "";
  }

  /**
   *
   * @param {Set} tasks
   */
  showTasks(tasks) {
    // Ersten Tabellen-Body aus DOM holen und leeren
    let tablebody = this.$("table").tBodies[0];
    tablebody.innerHTML = "";

    let rows = "";

    // Jede Task als Tabellenzeile anfügen
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
        this.toggleTask(event.target);
      });

      description.textContent = task.description;
      priority.textContent = task.priority;

      tablebody.appendChild(tr);
    });
  }

  /**
   *
   * @param {HTMLElement} inputElem
   */
  toggleTask(inputElem) {
    // HTML-Anzeige anpassen
    let description = inputElem.parentNode.nextElementSibling;
    if (inputElem.checked) {
      description.classList.add("done");
    } else {
      description.classList.remove("done");
    }

    // Status in Task-Objekt "toggeln"
    let id = inputElem.getAttribute("data-task-id");
    let task = [...this.tasks].find((t) => t.id === parseInt(id));
    task.toggleState();
  }
}
