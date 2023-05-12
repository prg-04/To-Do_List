import dots from './assets/dots.png';
import bin from './assets/bin.png';
import './styles.scss';
import Store from './store.js';

class UIList {
  static displayList() {
    const lists = Store.getList();
    lists.forEach((list) => UIList.addList(list));
  }

  static addList(list) {
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.id = list.id;
    li.innerHTML = `
      <div>
        <input type="checkbox" class="form-check-input me-2" ${
  list.completed ? 'checked' : ''
} />
        <span class="task-description${
  list.completed ? ' completed' : ''
}" contentEditable>${list.description}</span>
      </div>
      <img src=${dots} alt="toggle-menu" class="dots" />
      <img src=${bin} alt="delete" class="bin" />

  `;
    ul.appendChild(li);

    const checkbox = li.querySelector('.form-check-input');
    const description = li.querySelector('.task-description');

    if (list.completed) {
      const binIcon = li.querySelector('.bin');
      const dotsIcon = li.querySelector('.dots');
      binIcon.style.display = 'block';
      dotsIcon.style.display = 'none';
      description.classList.add('completed');
    } else {
      const binIcon = li.querySelector('.bin');
      const dotsIcon = li.querySelector('.dots');
      binIcon.style.display = 'none';
      dotsIcon.style.display = 'block';
    }

    checkbox.addEventListener('change', () => {
      list.completed = checkbox.checked;
      list.element = li;
      const binIcon = li.querySelector('.bin');
      const dotsIcon = li.querySelector('.dots');
      if (list.completed) {
        binIcon.style.display = 'block';
        dotsIcon.style.display = 'none';
        description.classList.add('completed');
        description.contentEditable = false;
        Store.updateCompleted(list);
      } else {
        binIcon.style.display = 'none';
        dotsIcon.style.display = 'block';
        description.classList.remove('completed');
        description.contentEditable = true;
        Store.uncheckCompleted(list);
      }
      UIList.removeCompleted(li);
    });

    description.addEventListener('input', () => {
      list.description = description.textContent;
      list.element = li;
      Store.updateList(list);
    });
  }

  static showAlert() {
    const div = document.createElement('div');
    div.className = 'error';
    const text = document.createTextNode('Please enter a task');
    div.appendChild(text);
    const form = document.getElementById('form');
    const cont = document.getElementById('container');
    cont.insertBefore(div, form);

    setTimeout(() => {
      div.remove();
    }, 1000);
  }

  static clearFields() {
    document.getElementById('input').value = '';
  }

  static removeCompletedOnReload() {
    document.querySelectorAll('.list-group-item').forEach((item) => {
      item.querySelectorAll('div').forEach((childItem) => {
        const checkbox = childItem.querySelectorAll('input');
        if (checkbox[0].checked) {
          item.remove();
          Store.removeChecked();
        }
      });
    });
  }

  static removeCompletedOnClear() {
    const lists = document.querySelectorAll('.list-group-item');
    const completedLists = Array.from(lists).filter(
      (list) => list.querySelector('.form-check-input').checked,
    );
    completedLists.forEach((list) => list.remove());
    Store.removeChecked();
  }

  static removeCompleted(target) {
    const child = target.querySelectorAll('.checked');
    child.forEach((elem) => {
      if (elem.checked === true) {
        elem.parentElement.parentElement.remove();
      }
    });
  }
}

export default UIList;
