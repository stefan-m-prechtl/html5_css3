export default class ViewEdit {

    constructor(idRootElement) {
        this.rootElement = document.querySelector(idRootElement);
        this.initEventhandler();
    }

    initEventhandler() {
        const btnSubmit = this.$("#submit");

        btnSubmit.on('click', (event) => {
            const description = this.$('#descTask').value;
            const priority = this.$('#prioTask').value;

            if (description.trim().length == 0) {
                return undefined;
            }

            event.preventDefault();

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