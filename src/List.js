class List {
  constructor(description, completed = false, index = +1) {
    this.description = description;
    this.completed = completed;
    this.id = index;
  }
}

export default List;