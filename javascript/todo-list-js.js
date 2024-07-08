// Load todos from localStorage on page load
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
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
        deleteTodo(${i});
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

    // Save the updated todoList to localStorage
    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';

    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);

  // Save the updated todoList to localStorage
  localStorage.setItem('todoList', JSON.stringify(todoList));

  renderTodoList();
}

// Add event listener for the 'keydown' event on the name input field
document.querySelector('.js-name-input').addEventListener('keydown', function(event) {
  // Check if the pressed key is the Enter key
  if (event.key === 'Enter') {
    addTodo();
  }
});
