import Presenter from "./presenter.js";
import View from "./view.js";

function init() {
    console.log('Initalisierung....')
    const presenter = new Presenter(new View("#view"));
    presenter.viewLoaded();
}

document.addEventListener('DOMContentLoaded', init);