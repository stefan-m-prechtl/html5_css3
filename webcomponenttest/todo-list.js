const template = document.createElement('template');
template.innerHTML = `
<h1>Meine Aufgaben</h1>
<input type="text" placeholder="Neue Aufgabe...."></input>
<button>&#10003;</button>
<ul id="todos"></ul>
`;



class TodoList extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(template.content.cloneNode(true));

        this.$todoList = this.root.querySelector('ul');
        this.$input = this.root.querySelector('input');

        this.$submitButton = this.root.querySelector('button');
        this.$submitButton.addEventListener('click', this.addTodo.bind(this));
    }

    addTodo() {
        this.todoList.push({ text: this.$input.value, checked: false });
        this.renderTodoList();
        this.$input.value = '';
    }

    removeTodo(e) {
        this.todos.splice(e.detail, 1);
        this.renderTodoList();
    }

    renderTodoList() {
        this.$todoList.innerHTML = '';

        this.todoList.forEach((todo, index) => {
            let $todoItem = document.createElement('todo-item');
            $todoItem.setAttribute('text', todo.text);

            if (todo.checked) {
                $todoItem.setAttribute('checked', '')
            }

            $todoItem.setAttribute('index', index);

            $todoItem.addEventListener('onRemove', this.removeTodo.bind(this));

            this.$todoList.appendChild($todoItem);
        });
    }


    set todos(value) {
        this.todoList = value;
        this.renderTodoList();
    }

    get todos() {
        return this.todoList;
    }

}
customElements.define('todo-list', TodoList);

document.querySelector('todo-list').todos = [
    { text: "Make a to-do list", checked: false },
    { text: "Finish blog post", checked: true }
];