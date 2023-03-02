import { createContext, useContext, useState } from "react";

const TodoContext = createContext({
  todos: [],
  addNewTodo: () => null,
  deleteTodo: () => null,
  achieveTodo: () => null,
});

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoscontext")) || []
  );

  const addNewTodo = (todo) => {
    const newTodos = [...todos, todo];
    localStorage.setItem("todoscontext", JSON.stringify(todo));
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = todos.filter((_todo) => todo.id !== _todo.id);
    setTodos(newTodos);
    localStorage.setItem("todoscontext", JSON.stringify(newTodos));
  };

  const achieveTodo = (todo) => {
    const newTodos = todos.map((_todo) =>
      todo.id === _todo.id ? { ..._todo, done: !_todo.done } : _todo
    );
    setTodos(newTodos);
    localStorage.setItem("todoscontext", JSON.stringify(newTodos));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        deleteTodo,
        achieveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
