class Store {
  static getList() {
    const list = localStorage.getItem('list');
    if (list === null) {
      return [];
    }
    return JSON.parse(list);
  }

  static addList(list) {
    const lists = Store.getList();
    if (lists.length === 0) {
      list.id = 1;
    } else {
      const lastList = lists[lists.length - 1];
      list.id = lastList.id + 1;
    }
    lists.push(list);
    localStorage.setItem('list', JSON.stringify(lists));
  }

  static updateList(list) {
    const lists = Store.getList();
    const index = lists.findIndex((item) => item.id === list.id);
    if (index === -1) {
      if (lists.length === 0) {
        list.id = 1;
      } else {
        const lastList = lists[lists.length - 1];
        list.id = lastList.id + 1;
      }
      lists.push(list);
    } else {
      lists[index] = list;
    }
    localStorage.setItem('list', JSON.stringify(lists));
  }

  static updateCompleted(list) {
    const lists = Store.getList();
    const index = lists.findIndex((item) => item.id === list.id);

    if (index !== -1) {
      lists[index].completed = !lists[index].completed;
      localStorage.setItem('list', JSON.stringify(lists));
    }
  }

  static uncheckCompleted(list) {
    const lists = Store.getList();
    const index = lists.findIndex((item) => item.id === list.id);

    if (index !== -1) {
      lists[index].completed = false;
      localStorage.setItem('list', JSON.stringify(lists));
    }
  }

  static removeList(id) {
    const lists = Store.getList();
    const index = lists.findIndex((list) => list.id === id);
    if (index !== -1) {
      lists.splice(index, 1);
      localStorage.setItem('list', JSON.stringify(lists));
    }
  }

  static removeChecked() {
    const lists = Store.getList();
    const filteredLists = lists.filter((list) => !list.completed);
    for (let i = 0; i < filteredLists.length; i + 1) {
      filteredLists[i].id = i + 1;
    }
    localStorage.setItem('list', JSON.stringify(filteredLists));
  }
}
export default Store;
