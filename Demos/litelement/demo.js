import { html } from './node_modules/lit-html/lit-html.js'
import { LitElement } from './node_modules/lit-element/lit-element.js'

class HelloWorld extends LitElement {
  static get properties() {
    return {
      user: { type: String },
    }
  }

  constructor() {
    super()
    this.user = 'Etienne'
  }

  render() {
    return html`
      <h1>Hello LitElement-World</h1>
      <div><slot></slot></div>
      <p>
        Hello
        <em>${this.user}</em>
        from the component HelloWorld
      </p>
    `
  }
}

customElements.define('hello-world', HelloWorld)
