import Task from "./Task.js";
import Model from "./taskModel.js";
import ViewList from './taskListView.js'

export default class PresenterList {
  /**
   * Konstruktor
   * @param {ViewList} view 
   * @param {Model} model 
   */
  constructor(view, model) {
    this.view = view;
    this.view.setPresenter(this);
    this.model = model;

  }

  // *****************************************************************
  // Event-Handler
  // *****************************************************************

  // *****************************************************************
  // GUI-unabhängige Methoden: Logik
  // *****************************************************************

  /**
   * Alle Tasks laden und anzeigen
   */
  loadTasks() {
    let result = []

    result.push(Task.create("JS Buch lesen", "normal"));
    result.push(Task.create("Backup erstellen", "hoch"));
    let task = Task.create("Französich lernen", "hoch");
    task.done = true;

    result.push(task);

    for (var i = 0, max = 10; i < max; i++) {
      result.push(Task.create("Task" + i, "normal"));
    }

    // Modell & View aktualisieren
    this.model.listTasks = result;
    this.view.showTasks(result)
  }

  /**
   * Alle Tasks entfernen
   */
  clearTasks() {

    this.model.reset()
    this.view.clearTasks();
  }

  /**
   * Status der Task wechseln
   * @param {number} id ID der Task
   */
  toggleTask(id) {
    this.model.toggleTask(id);
    this.view.updateTask(id);
  }

  /**
   * Alle Tasks (ohne Filter) anzeigen
   */
  showAllTasks() {
    let tasks = this.model.listTasks;
    this.view.showTasks(tasks)
  }

  /**
   * Alle offenen Tasks anzeigen
   */
  showUndoneTasks() {
    let undoneTaskArray = this.model.listTasks.filter((t) => t.done === false);
    this.view.showTasks(undoneTaskArray);
  }

  /**
   * Alle erledigten Tasks anzeigen
   */
  showDoneTasks() {
    let doneTaskArray = this.model.listTasks.filter((t) => t.done === true);
    this.view.showTasks(doneTaskArray);
  }
}
