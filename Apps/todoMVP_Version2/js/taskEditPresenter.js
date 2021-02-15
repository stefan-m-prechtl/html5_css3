import Task from './Task.js';

export default class PresenterEdit {
    constructor(view) {
        this.view = view;
        this.view.setPresenter(this);
        this.task = Task.create('Neu', 'normal');
    }

    // *****************************************************************
    // Event-Handler
    // *****************************************************************
    // 

    // Eventhandler für Click "Übernehmen"
    addTask(description, priority) {
        this.task = Task.create(description, priority);
    }

}