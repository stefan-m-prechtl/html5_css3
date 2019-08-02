// für Import: in console "polymer serve" ausführen!
import { LitElement, html } from 'lit-element';

class HelloWorld extends LitElement {

    static get properties() {
        return {
            user: { type: String }
        };
    }

    constructor() {
        super();
        this.user = "Etienne";
    }

    render() {
        return html `
            <h1>Hello LitElement-World</h1>
            <div><slot></slot></div>
            <p>Hello <em>${this.user}</em> from the component HelloWorld</p>`;
    }
}

customElements.define('hello-world', HelloWorld);