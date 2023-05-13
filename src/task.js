import './styles.css';
import Store from './store.js';

class Task {
  constructor() {
    this.container = document.getElementById('lists');
    this.template = document.getElementById('template');
    this.store = new Store('todo-list');
    this.items = this.store.getItems();
    this.form = document.getElementById('form');

    this.currentId = 0;
    if (this.items.length > 0) {
      this.currentId = this.items[this.items.length - 1].id;
    }

    this.updateList();
  }

  updateItem(item, key, value) {
    const newItem = { ...item, [key]: value };
    const index = this.items.findIndex((i) => i.id === item.id);
    this.items[index] = newItem;

    this.store.setItems(this.items);
    this.updateList();
  }

  updateList() {
    this.container.innerHTML = '';
    this.items.forEach((item) => {
      const itemElement = this.template.content.cloneNode(true);
      const taskInput = itemElement.querySelector('.task-description');
      const completedTask = itemElement.querySelector('.task-completed');
      const deleteBtn = itemElement.querySelector('.fa-trash-can');
      const ellipsis = itemElement.querySelector('.fa-ellipsis-vertical');

      deleteBtn.addEventListener('click', () => {
        this.removeList(item.id);
      });

      if (taskInput) {
        taskInput.value = item.description;
        taskInput.disabled = item.completed;
      }
      if (completedTask) {
        completedTask.checked = item.completed;
        if (item.completed) {
          deleteBtn.style.display = 'block';
          ellipsis.style.display = 'none';
        } else {
          deleteBtn.style.display = 'none';
          ellipsis.style.display = 'block';
        }
      }

      taskInput.addEventListener('change', (e) => {
        if (!item.completed) {
          this.updateItem(item, 'description', e.target.value);
        }
      });
      completedTask.addEventListener('change', () => {
        this.updateItem(item, 'completed', completedTask.checked);
        taskInput.disabled = item.completed;
        completedTask.checked = item.completed;
        if (item.completed) {
          deleteBtn.style.display = 'block';
          ellipsis.style.display = 'none';
        } else {
          deleteBtn.style.display = 'none';
          ellipsis.style.display = 'block';
        }
      });

      this.container.appendChild(itemElement);
    });
  }

  addList(list) {
    if (this.items.length > 0) {
      list.id = this.items[this.items.length - 1].id + 1;
    } else {
      list.id = 1;
    }

    this.items.push(list);
    this.store.setItems(this.items);
    this.updateList();
  }

  removeList(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      for (let i = index; i < this.items.length; i + 1) {
        this.items[i].id = i + 1;
      }
      this.store.setItems(this.items);
      this.updateList();
    }
  }

  removeCheckedTasks() {
    const uncheckedItems = this.items.filter((item) => !item.completed);
    this.items = uncheckedItems.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    this.store.setItems(this.items);
    this.updateList();
  }

  clearInput = () => {
    document.getElementById('input').value = '';
  };
}

export default Task;
