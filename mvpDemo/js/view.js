import { html, render } from '../node_modules/lit-html/lit-html.js';
import { $ } from "./vanilla.js";;

export default class View {

    constructor(idRootElement) {
        this.rootElement = $(idRootElement);
        this.initEventhandler();
    }

    initEventhandler() {
        const btnLoad = $("#btnLoad");


        btnLoad.on("click", () => this.presenter.load());
    }

    setPresenter(presenter) {
        this.presenter = presenter;
    }

    showIssues(issues) {
            let myTemplate = (issues) => html `${issues.map((issue) => html`<li>${issue}</li>`)}`;
        render(myTemplate(issues), $('#content'));

        issues.forEach(element => {
            console.log(element);
        });
    }




}