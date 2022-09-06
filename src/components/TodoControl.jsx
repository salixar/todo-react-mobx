import { useCallback, useState } from "react";
import { useStore } from "../store/useStore";
import './TodoControl.scss';

export const TodoControl = () => {
  const [message, setMessage] = useState('')
  const { todoStore: { addTodo } } = useStore();

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const onTodoAdd = useCallback(() => {
    addTodo(message)
    setMessage('');
  }, [message]);

  return (
    <label htmlFor="add-todo">
      Добавить к списку
      <input type="text" onChange={handleChange} id="add-todo" value={message} />
      <button className="btn" onClick={onTodoAdd}>Добавить</button>
    </label>
  );
};

