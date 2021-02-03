const template = document.createElement('template');
template.innerHTML = `
<style>
    .completed {
        text-decoration: line-through;
    }

</style>

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
        this.$removeButton.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
        });

        this.$checkbox.addEventListener('click', (e) => {
            this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
        });
    }

    connectedCallback() {
        if (!this.hasAttribute('text')) {
            this.setAttribute('text', 'placeholder');
        }
        this.renderTodoItem();
    }

    renderTodoItem() {
        if (this.hasAttribute('checked')) {
            this.$item.classList.add('completed');
            this.$checkbox.setAttribute('checked', '');
        } else {
            this.$item.classList.remove('completed');
            this.$checkbox.removeAttribute('checked');
        }

        this.$text.innerHTML = this.text;
    }

    static get observedAttributes() {
        return ['text', 'checked', 'index'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'text':
                this.text = newValue;
                break;
            case 'checked':
                this.checked = this.hasAttribute('checked');
                break;
            case 'index':
                this._index = parseInt(newValue);
                break;
        }
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    set checked(val) {
        if (val) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }
    }

    set index(val) {
        this.setAttribute('index', val);
    }

    get index() {
        return this._index;
    }



}

customElements.define('todo-item', TodoItem)