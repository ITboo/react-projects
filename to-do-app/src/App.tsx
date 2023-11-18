import { useState, useEffect, useRef } from "react";
import TodoList from "./components/Todolist";
import { ITodo } from "./data";

import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          isCompleted: false,
        },
      ]);
      setValue("");
    }
  };

  const removeToDo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleToDo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  };
  return (
    <>
      <div className="app__container">
        <input
          value={value}
          onChange={handleOnChange}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo} className="add">
          Add
        </button>
      </div>
      <TodoList items={todos} toggleToDo={toggleToDo} removeToDo={removeToDo} />
    </>
  );
}

export default App;
