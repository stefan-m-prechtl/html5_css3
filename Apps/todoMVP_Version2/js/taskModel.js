import Task from "./Task.js";

export default class Model {
  constructor() {
    this.reset();
  }

  reset() {
    this.listTasks = []
    this.currentTask = undefined
  }

  /**
   * 
   * @param {number} id 
   */
  toggleTask(id) {

    // Status in Task-Objekt "toggeln"
    let task = this.listTask.find((t) => t.id === parseInt(id));
    task.toggleState();
  }

  addTask(task) {
    this.listTasks.push(task);
  }

}