import Task from './task.js';
import List from './List.js';

const task = new Task();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const description = document.getElementById('input').value;
  if (description === '') {
    task.showAlert();
  } else {
    const list = new List(description);
    task.addList(list);
    task.clearInput();
  }
});

const clearBtn = document.getElementById('clearBtn');
const reloadBtn = document.querySelector('.fa-arrows-rotate');

clearBtn.addEventListener('click', () => {
  task.removeCheckedTasks();
});

reloadBtn.addEventListener('click', () => {
  task.removeCheckedTasks();
});

document.getElementById('lists').addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash-can')) {
    const listItem = event.target.closest('.list-item');
    const itemId = parseInt(listItem.dataset.id, 10);
    task.removeList(itemId);
  }
});

task.updateList();
