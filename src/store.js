class Store {
  constructor(key) {
    this.key = key;
  }

  getItems() {
    const item = localStorage.getItem(this.key);
    if (item === null || item === '') {
      return [];
    }
    try {
      return JSON.parse(item);
    } catch (e) {
      return [];
    }
  }

  setItems(items) {
    const item = JSON.stringify(items);
    localStorage.setItem(this.key, item);
  }
}

export default Store;
