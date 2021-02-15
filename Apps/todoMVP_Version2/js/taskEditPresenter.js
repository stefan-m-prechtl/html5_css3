import Task from './Task.js';

export default class PresenterEdit {
    constructor(view, model) {
        this.view = view;
        this.view.setPresenter(this);
        this.model = model;

    }

    // *****************************************************************
    // Event-Handler
    // *****************************************************************
    // 

    // Eventhandler für Click "Übernehmen"
    addTask(description, priority) {
        let task = new Task(description, priority);
        this.model.addTask(task);

    }

}