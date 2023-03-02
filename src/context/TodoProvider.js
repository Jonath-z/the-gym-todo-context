import { createContext, useContext, useState } from "react";

const LOCAL_STORAGE_KEY = "todosContex";

const TodoContext = createContext({
  todos: [],
  addNewTodo: () => null,
  deleteTodo: () => null,
  achieveTodo: () => null,
  updateTask: () => null,
});

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const addNewTodo = (todo) => {
    const newTodos = [...todos, todo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = todos.filter((_todo) => todo.id !== _todo.id);
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const achieveTodo = (todo) => {
    const newTodos = todos.map((_todo) =>
      todo.id === _todo.id ? { ..._todo, done: !_todo.done } : _todo
    );
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
  };

  const updateTask = (todo) => {
    const updatedTodos = todos.map((_todo) => {
      return _todo.id === todo.id ? { ..._todo, task: todo.task } : _todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        deleteTodo,
        updateTask,
        achieveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
