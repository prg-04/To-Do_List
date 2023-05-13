import './styles.css';
import Task from './task.js';
import List from './List.js';

const task = new Task();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('input').value;
  const list = new List(description);
  task.addList(list);
  task.clearInput();
});

const clearBtn = document.getElementById('clearBtn');
const reloadBtn = document.querySelector('.fa-arrows-rotate');

clearBtn.addEventListener('click', () => {
  task.removeCheckedTasks();
});

reloadBtn.addEventListener('click', () => {
  task.removeCheckedTasks();
});

task.updateList();
