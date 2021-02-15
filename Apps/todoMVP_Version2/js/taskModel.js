import Task from "./Task.js";

export default class Model {
  constructor() {
    this.reset();
  }

  reset() {
    this.listTasks = new Set()
    this.currentTask = undefined
  }

  /**
   * 
   * @param {number} id 
   */
  toggleTask(id) {

    // Status in Task-Objekt "toggeln"
    let task = [...this.listTasks].find((t) => t.id === parseInt(id));
    task.toggleState();
  }

}