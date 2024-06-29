const todoList = ['make dinner', 'wash dishes'];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  // document.querySelector('.todoDisplay').innerHTML = name;
}

renderToDoList();

function renderToDoList() {
  let todoListHTML = '';

  for (var i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  renderToDoList();
}
/*
const todoList2 = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

for (var i = 0; i < todoList2.length; i++) {
  const value = todoList2[i];
  console.log(value);
}
*/
