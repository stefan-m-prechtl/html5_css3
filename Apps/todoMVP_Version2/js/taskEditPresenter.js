import Task from './Task.js';
import Model from './taskModel.js';
import ViewEdit from './taskEditView.js'

/**
 * Presenter-Klasse "Edit"
 * 
 */
export default class PresenterEdit {
    /**
     * Konstruktor
     * @param {ViewEdit} view 
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
    // 

    /**
     * Handler für Click-Event "Übernehmen"
     * @param {string} description 
     * @param {string} priority 
     */
    addTask(description, priority) {
        let task = new Task(description.trim(), priority);
        this.model.addTask(task);

        // Event für List-Presenter auslösen
        let taskAddedEvent = new CustomEvent("taskAdded");
        document.dispatchEvent(taskAddedEvent);
    }

}