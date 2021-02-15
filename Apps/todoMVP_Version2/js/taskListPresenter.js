import Task from "./Task.js";
import Model from "./taskModel.js";

export default class PresenterList {
  constructor(view) {
    this.view = view;
    this.view.setPresenter(this);
    this.model = new Model();

  }

  // *****************************************************************
  // Event-Handler
  // *****************************************************************

  // *****************************************************************
  // GUI-unabhängige Methoden: Logik
  // *****************************************************************
  loadTasks() {
    let result = new Set();

    result.add(Task.create("JS Buch lesen", "normal"));
    result.add(Task.create("Backup erstellen", "hoch"));
    let task = Task.create("Französich lernen", "hoch");
    task.done = true;

    result.add(task);

    for (var i = 0, max = 10; i < max; i++) {
      result.add(Task.create("Task" + i, "normal"));
    }

    // Modell & View aktualisieren
    this.model.listTasks = result;
    this.view.showTasks(result)
  }

  clearTasks() {
    // Modell & View aktualisieren
    this.model.reset()
    this.view.clearTasks();
  }

  toggleTask(id) {
    this.model.toggleTask(id);
    this.view.updateTask(id);
  }

  showAllTasks() {
    let tasks = this.model.listTasks;
    this.view.showTasks(tasks)
  }

  showUndoneTasks() {
    let allTaskArray = [...this.model.listTasks];
    let undoneTaskArray = allTaskArray.filter((t) => t.done === false);
    this.view.showTasks(undoneTaskArray);

  }

  showDoneTasks() {
    let allTaskArray = [...this.model.listTasks];
    let doneTaskArray = allTaskArray.filter((t) => t.done === true);
    this.view.showTasks(doneTaskArray);
  }
}
