import Task from './task';

describe('Task', () => {
  let task;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="lists"></div>
      <template id="template">
        <div class="list-item">
          <input type="text" class="task-description" />
          <input type="checkbox" class="task-completed" />
          <i class="fa-trash-can"></i>
          <i class="fa-ellipsis-vertical"></i>
        </div>
      </template>
      <form id="form">
        <input id="input" type="text" />
      </form>
    `;
    task = new Task();
  });

  afterEach(() => {
    task = null;
    document.body.innerHTML = '';
  });

  describe('updateItem', () => {
    it('should update the specified property of an item and update the list', () => {
      const item = { id: 1, description: 'Task 1', completed: false };

      task.items.push(item);

      task.updateItem(item, 'description', 'Updated Task 1');

      expect(task.items[0].description).toBe('Updated Task 1');

      const taskInput = document.querySelector('.task-description');
      expect(taskInput.value).toBe('Updated Task 1');
    });
  });

  describe('showAlert', () => {
    it('should display an alert message for 2 seconds', () => {
      jest.useFakeTimers();

      task.showAlert();

      const alertDiv = document.querySelector('.alert');
      expect(alertDiv.textContent).toBe(
        'Please enter a description for the list.',
      );
      expect(alertDiv.style.display).toBe('flex');

      jest.advanceTimersByTime(2000);

      expect(alertDiv.style.display).toBe('none');
    });
  });

  describe('updateList', () => {
    it('should enable task input and show delete button when ellipsis is clicked', () => {
      const item = { id: 1, description: 'Task 1', completed: false };

      task.items.push(item);

      task.updateList();

      const ellipsis = document.querySelector('.fa-ellipsis-vertical');

      ellipsis.click();

      const taskInput = document.querySelector('.task-description');
      expect(taskInput.disabled).toBe(false);

      const deleteBtn = document.querySelector('.fa-trash-can');
      expect(deleteBtn.style.display).toBe('block');

      expect(ellipsis.style.display).toBe('none');
    });
  });

  describe('removeList', () => {
    it('should remove the specified list item and update the list', () => {
      const item1 = { id: 1, description: 'Task 1', completed: false };
      const item2 = { id: 2, description: 'Task 2', completed: false };

      task.items.push(item1, item2);

      task.removeList(1);

      expect(task.items.length).toBe(1);
      expect(task.items[0].id).toBe(2);

      const listItems = document.querySelectorAll('.list-item');
      expect(listItems.length).toBe(1);
    });
  });

  describe('removeCheckedTasks', () => {
    it('should remove all completed tasks from the list', () => {
      const item1 = { id: 1, description: 'Task 1', completed: true };
      const item2 = { id: 2, description: 'Task 2', completed: false };
      const item3 = { id: 3, description: 'Task 3', completed: true };
      const item4 = { id: 4, description: 'Task 4', completed: false };

      task.items.push(item1, item2, item3, item4);

      task.removeCheckedTasks();

      expect(task.items.length).toBe(2);
      expect(task.items[0]).toBe(item2);
      expect(task.items[0].id).toBe(2);
      expect(task.items[1]).toBe(item4);
      expect(task.items[1].id).toBe(4);

      const listItems = document.querySelectorAll('.list-item');
      expect(listItems.length).toBe(2);
      expect(listItems[0].querySelector('.task-description').value).toBe(
        'Task 2',
      );
      expect(listItems[1].querySelector('.task-description').value).toBe(
        'Task 4',
      );
    });
  });

  describe('addList', () => {
    it('should add a new list item to the task', () => {
      const list = { id: 1, description: 'New Task', completed: false };

      task.addList(list);

      expect(task.items.length).toBe(1);
      expect(task.items[0]).toBe(list);

      const listItems = document.querySelectorAll('.list-item');
      expect(listItems.length).toBe(1);
    });
  });

  describe('clearInput', () => {
    it('should clear the value of the input field', () => {
      const taskInput = document.getElementById('input');
      taskInput.value = 'Test';

      task.clearInput();

      expect(taskInput.value).toBe('');
    });
  });
});
