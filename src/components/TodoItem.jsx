import { observer } from 'mobx-react-lite';
import { useStore } from '../store/useStore';
import './TodoItem.scss';

export const TodoItem = observer(({ todo }) => {
  const { todoStore: { handleTodoCheck } } = useStore();
 
  const handleCheck = ({ target: { checked } }) => {
    handleTodoCheck(todo.id, checked);
  }
  
  return (
    <div className="todo-item">
      <label className="todo-label">
        {todo.message}
        <input type="checkbox" className="todo-checkbox" onChange={handleCheck} checked={todo.done} />
      </label>
    </div>
  );
})
