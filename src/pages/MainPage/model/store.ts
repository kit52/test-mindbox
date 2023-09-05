import { TaskType } from 'entities/Task/model/types/task';
import { makeAutoObservable } from 'mobx';

const defaultTask = [
  { checked: false, text: '1 задача', id: '1' },
  { checked: true, text: '2 задача', id: '2' },
  { checked: false, text: '3 задача', id: '3' },
];
class State {
  input: string = '';
  todos: TaskType[] = defaultTask;
  constructor() {
    makeAutoObservable(this);
  }

  changeInput(text: string) {
    this.input = text;
  }
  get incompleteTodos() {
    return this.todos.filter((todo) => !todo.checked);
  }
  get completeTodos() {
    return this.todos.filter((todo) => todo.checked);
  }
  toggleTodo = (id: string) => {
    const index = this.todos.findIndex((item) => item.id === id);
    this.todos[index] = {
      ...this.todos[index],
      checked: !this.todos[index].checked,
    };
  };
  createTask() {
    const task: TaskType = {
      checked: false,
      text: '',
      id: crypto.randomUUID(),
    };
    this.todos.push(task);
  }
}

export default new State();
