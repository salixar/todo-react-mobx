import { makeAutoObservable } from 'mobx';
 
class TodoStore {
  constructor() {
    this.todos = [
      { message: 'Написать приложение', done: true, id: 1 },
      { message: 'Провести трансляцию', done: false, id: 2 },
      { message: 'Сделать такое же приложение с Hookstate', done: false, id: 3 },
    ];
    makeAutoObservable(this);
  }

  addTodo = (title) => {
    if (!title) return;

    this.todos.push({
      message: title,
      done: false,
      id: this.todos[this.todos.length - 1].id + 1,
    });
  }

  handleTodoCheck = (id, checked) => {
    this.todos.find(todo => todo.id === id).done = checked;
  }

}

export default TodoStore;
