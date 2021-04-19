import PresenterEdit from './taskEditPresenter.js';

/**
 * View-Klasse für "Edit"
 */
export default class ViewEdit {

    /**
     * Konstruktor
     * @param {String} idRootElement Selektor für DOM-Element, das für den View als Root-Element verwendet wird
     */
    constructor(idRootElement) {
        this.rootElement = document.querySelector(idRootElement);
        this.initEventhandler();
    }

    /**
     * Zugehörigen Presenter mit diesem View "verknüpfen"
     * @param {PresenterEdit} presenter 
     */
    setPresenter(presenter) {
        this.presenter = presenter;
    }

    /**
     * DOM-Elememt im "View-Teilbaum" (ab View-Root) selektieren
     * @param {string} selector Selektor für DOM-Selektion
     * @returns {HTMLElement} Selektiertes HTML-Element
     */
    $(selector) {
        return this.rootElement.querySelector(selector);
    }

    /**
     * Alle Events für diesen Views definieren
     */
    initEventhandler() {
        // Gui-Elemente aus DOM holen (über Rootelement des Views!)
        const btnSubmit = this.$("#submit");

        // Event-Listener registrieren
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



}