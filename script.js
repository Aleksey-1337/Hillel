$(document).ready(function () {
  const $form = $('#todo-form');
  const $input = $('#todo-input');
  const $list = $('#todo-list');

  function render() {
    $list.empty();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach((todo, index) => {
      const $item = $('<li>').addClass('list-group-item d-flex justify-content-between align-items-center');
      
      const $text = $('<span>').text(todo.text).css('cursor', 'pointer');
      $text.on('click', function() {
        $('#modal-body-text').text(todo.text);
        const modal = new bootstrap.Modal($('#taskModal'));
        modal.show();
      });

      const $deleteBtn = $('<button>').addClass('btn btn-danger btn-sm').text('Видалити');
      $deleteBtn.on('click', function() {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        render();
      });

      $item.append($text).append($deleteBtn);
      $list.append($item);
    });
  }

  $form.on('submit', function (e) {
    e.preventDefault();
    const value = $input.val().trim();
    if (!value) return;

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text: value });
    localStorage.setItem('todos', JSON.stringify(todos));
    $input.val('');
    render();
  });

  render();
});
