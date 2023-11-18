import { ITodo } from "../data";

interface ITodoItem extends ITodo {
  removeToDo: (id: number) => void;
  toggleToDo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, isCompleted, removeToDo, toggleToDo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleToDo(id)}
      />
      <span>{title}</span>
      <button onClick={() => removeToDo(id)}>x</button>
    </div>
  );
};

export default TodoItem;
