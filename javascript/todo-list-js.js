const todoList = [{
  name: 'make money',
  dueDate: '2024-07-05'
}, {
  name: 'buy a car',
  dueDate: '2024-07-05'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-item">${name}</div>
      <div class="todo-item">${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name !== '') {
    todoList.push({
      name,
      dueDate
    });

    inputElement.value = '';

    renderTodoList();
  }
}

// Add event listener for the 'keydown' event on the name input field
document.querySelector('.js-name-input').addEventListener('keydown', function(event) {
  // Check if the pressed key is the Enter key
  if (event.key === 'Enter') {
    addTodo();
  }
});
