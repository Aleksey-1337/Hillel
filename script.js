const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    const textNode = document.createTextNode(taskText);
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('deleteBtn');

    li.appendChild(textNode);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    event.target.parentElement.remove();
  }
});
