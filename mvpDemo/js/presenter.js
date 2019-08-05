import Model from "./model.js";

export default class Presenter {
    constructor(view) {
        this.view = view;
        this.view.setPresenter(this);
        this.model = new Model();
    }

    // Event-Handler
    viewLoaded() {
        this.view.showIssues([]);
    }

    load() {
        let issues = this.loadIssues();
        this.view.showIssues(issues);
    }

    // GUI-less Logik
    loadIssues() {
        return ["Task 1", "Task 2"];
    }

}