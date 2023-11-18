import { ITodo } from "../data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleToDo: (id: number) => void;
  removeToDo: (id: number) => void;
}
const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleToDo, removeToDo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleToDo={toggleToDo}
          removeToDo={removeToDo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
