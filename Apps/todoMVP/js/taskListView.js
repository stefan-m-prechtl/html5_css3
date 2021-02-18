import { $$ } from "./util.js";

export default class ViewList {
  constructor(idRootElement) {
    this.rootElement = document.querySelector(idRootElement);
    this.initEventhandler();
  }

  initEventhandler() {
    const btnRefresh = this.$("#btnRefresh");
    const btnClear = this.$("#btnClear");

    const lnkAll = this.$("#lnkAll");
    const lnkUndone = this.$("#lnkUndone");
    const lnkDone = this.$("#lnkDone");

    btnRefresh.on("click", () => this.presenter.refreshList());
    btnClear.on("click", () => this.presenter.clearList());

    lnkAll.on("click", (e) => {
      this.presenter.showAllList();
      e.preventDefault();
    });

    lnkUndone.on("click", (e) => {
      this.presenter.showUndoneList();
      e.preventDefault();
    });

    lnkDone.on("click", (e) => {
      this.presenter.showDoneList();
      e.preventDefault();
    });
  }

  setPresenter(presenter) {
    this.presenter = presenter;
  }

  loaded() {
    this.presenter.refreshList();
  }

  // Wert für Zeilenzähler (=Counter) in Tabellenfuss setzen
  setCounter(count) {
    let element = this.$("#counter");
    let content = `Anzahl: ${count}`;
    element.innerHTML = content;
  }

  // Alle Daten-Zeilen (=Zeilen mit Tasks) in Tabelle(nbody) löschen, Counter rücksetzen
  clearTable() {
    // Lösche alle Zeilen aus dem Tabellen-Body
    this.$("table").tBodies[0].innerHTML = "";
    // Setze Zähler zurück
    this.setCounter(0);
  }

  showTasks(tasks) {
    let body = this.$("table").tBodies[0];
    body.innerHTML = "";

    let rows = "";

    // Jede Task als Tabellenzeile anfügen
    tasks.forEach((t) => {
      let template = this.$("#templateTableRow").innerHTML.trim();
      let checked = "";
      if (t.done) {
        checked = "checked";
      }
      let id = t.id;
      let title = t.description;
      let priority = t.priority;
      template = eval("`" + template + "`");

      rows += template;
    });
    body.innerHTML = rows;

    // Eventhandler für alle Checkboxen
    $$("[data-task-id]").addEventListener("click", (e) =>
      this.presenter.toggleState(e.target.getAttribute("data-task-id"))
    );

    // Setze Zähler neu
    this.setCounter(tasks.size);
  }

  // "Root"-Element des Views
  $(element) {
    return this.rootElement.querySelector(element);
  }
}
