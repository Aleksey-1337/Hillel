document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.js--form');
  const input = document.querySelector('.js--form__input');
  const todosWrapper = document.querySelector('.js--todos-wrapper');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderTodos() {
    todosWrapper.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      if (todo.completed) li.classList.add('todo-item--checked');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => toggleComplete(index));

      const span = document.createElement('span');
      span.className = 'todo-item__description';
      span.textContent = todo.text;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'todo-item__delete';
      deleteBtn.textContent = 'Видалити';
      deleteBtn.addEventListener('click', () => deleteTodo(index));

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      todosWrapper.appendChild(li);
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

  form.addEventListener('submit', e => {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
      addTodo(value);
      input.value = '';
    }
  });

  renderTodos();
});
