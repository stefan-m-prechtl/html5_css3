const template = document.createElement('template');
template.innerHTML = `
<li class="item">
    <input type="checkbox">
    <label></label>
    <button>&#9747;</button>
</li>
`;

class TodoItem extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));

        this.$item = this.root.querySelector('.item');
        this.$removeButton = this.root.querySelector('button');
        this.$text = this.root.querySelector('label');
        this.$checkbox = this.root.querySelector('input');

        // Eventlistener
    }

    connectedCallback() {
        this.renderTodoItem();
    }

    renderTodoItem() {
        this.$text.innerHTML = this.text;
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.text = newValue;
    }

}

customElements.define('todo-item', TodoItem)