import Task from "./Task.js";

/**
 * Modellklasse vom MVP-Pattern
 */
export default class Model {
  /**
   * Konstruktor
   */
  constructor() {
    this.reset();
  }

  /**
   * Modell in Initialzustand zurücksetzen
   */
  reset() {
    this.listTasks = []
    this.currentTask = undefined
  }

  /**
   * Task mit der ID=id "umschalten" (Status umschalten)
   * @param {number} id 
   */
  toggleTask(id) {

    // Status in Task-Objekt "toggeln"
    let task = this.listTasks.find((t) => t.id === parseInt(id));
    task.toggleState();
  }

  /**
   * Task dem Modell hinzufügen
   * @param {Task} task 
   */
  addTask(task) {
    this.listTasks.push(task);
  }

}