import Task from "./taskListModel.js";

export default class PresenterList {
  constructor(view) {
    this.view = view;
    this.view.setPresenter(this);
    
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

    return result;
  }
}
