$(document).ready(function () {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderTodos() {
    const wrapper = $('.js--todos-wrapper');
    wrapper.empty();

    todos.forEach((todo, index) => {
      const li = $('<li></li>').addClass('list-group-item todo-item');
      if (todo.completed) li.addClass('todo-complete');

      const checkbox = $('<input type="checkbox">')
        .prop('checked', todo.completed)
        .on('change', () => toggleComplete(index));

      const span = $('<span></span>')
        .addClass('todo-text')
        .text(todo.text)
        .on('click', () => showModal(todo.text));

      const delBtn = $('<button></button>')
        .addClass('btn btn-danger btn-sm ms-2')
        .text('Видалити')
        .on('click', () => deleteTodo(index));

      li.append(checkbox, span, delBtn);
      wrapper.append(li);
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

  function showModal(text) {
    $('#modalBody').text(text);
    const modal = new bootstrap.Modal(document.getElementById('todoModal'));
    modal.show();
  }

  $('.js--form').on('submit', function (e) {
    e.preventDefault();
    const input = $('.js--form__input');
    const value = input.val().trim();
    if (value) {
      addTodo(value);
      input.val('');
    }
  });

  renderTodos();
});
