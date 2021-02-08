export default class ViewEdit {

    constructor(idRootElement) {
        this.rootElement = document.querySelector(idRootElement);
        this.initEventhandler();
    }

    initEventhandler() {
        const btnSubmit = this.$("#submit");

        btnSubmit.on('click', () => {
            const description = this.$('descTask');
            const priority = this.$('prioTask');
            this.presenter.addTask(description, priority);
        });
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    // "Root"-Element des Views
    $(element) {
        return this.rootElement.querySelector(element);
    }

}