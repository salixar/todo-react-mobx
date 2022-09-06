import { observer } from 'mobx-react-lite';
import { useStore } from '../store/useStore';
import { TodoItem } from './TodoItem';
import './TodoList.scss';

export const TodoList = observer(() => {
  const { todoStore: { todos } } = useStore();

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
});
