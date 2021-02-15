import { $$ } from "./util.js";
import Task from "./Task.js";

export default class ViewList {
  /**
   *
   * @param {String} idRootElement
   */
  constructor(idRootElement) {
    this.rootElement = document.querySelector(idRootElement);
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
