class List {
  constructor(description, completed = false, id = 1) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export default List;