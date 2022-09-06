import TodoStore from "./TodoStore";

// RootStore may contain multiple stores https://mobx.js.org/defining-data-stores.html#combining-multiple-stores
class RootStore {
  constructor() {
    this.todoStore = new TodoStore();
  }
}

export default RootStore