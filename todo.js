const API_URL = 'https://dummyjson.com/todos';

const allList = document.querySelector('#all-list');
const completedList = document.querySelector('#completed-list');
const uncompletedList = document.querySelector('#uncompleted-list');

fetch(API_URL)
  .then(response => response.json())
  .then(todos => {
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;

      allList.appendChild(li);

      if (todo.completed) {
        completedList.appendChild(li.cloneNode(true));
      } else {
        uncompletedList.appendChild(li.cloneNode(true));
      }
    });
  });
