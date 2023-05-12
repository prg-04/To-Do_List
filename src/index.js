import './styles.scss';
import reload from './assets/refresh.png';
import enter from './assets/enter.png';
import addList from './addList.js';
import List from './List.js';
import Store from './store.js';

const heading = document.getElementById('reloadImg');
heading.src = reload;

document.getElementById('addBtn').innerHTML = `
<img src=${enter} alt="enter" />
`;

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.reload();
  const input = document.getElementById('input').value;
  if (input === '') {
    addList.showAlert();
  } else {
    const list = new List(input);
    addList.addList(list);
    Store.addList(list);
    addList.clearFields();
  }
});

document
  .getElementById('reloadImg')
  .addEventListener('click', addList.removeCompletedOnReload);

document
  .getElementById('clearBtn')
  .addEventListener('click', addList.removeCompletedOnClear);

document.addEventListener('DOMContentLoaded', () => {
  addList.displayList();

  document.querySelectorAll('.bin').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.remove();
      addList.removeCompleted(item);
      Store.removeChecked();
    });
  });
});
