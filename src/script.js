import $ from "jquery";

$(document).ready(function () {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        $todosWrapper.empty();
        todos.forEach((todo, index) => {
            const $li = $('<li>').addClass('todo-item list-group-item');
            if (todo.completed) $li.addClass('todo-item--checked');

            const $checkbox = $('<input>').attr('type', 'checkbox').prop('checked', todo.completed);
            $checkbox.on('change', () => toggleComplete(index));

            const $span = $('<span>').addClass('todo-item__description').text(todo.text);

            const $deleteBtn = $('<button>').addClass('btn btn-danger btn-sm').text('Видалити');
            $deleteBtn.on('click', () => deleteTodo(index));

            $li.append($checkbox, $span, $deleteBtn);

            $li.on('click', function (e) {
                if (!$(e.target).is('input, button')) {
                    $('#modalText').text(todo.text);
                    $('#todoModal').modal('show');
                }
            });

            $todosWrapper.append($li);
        });
    }

    function addTodo(text) {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }

    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    }

    $form.on('submit', (e) => {
        e.preventDefault();
        const value = $input.val().trim();
        if (value) {
            addTodo(value);
            $input.val('');
        }
    });

    renderTodos();
});
