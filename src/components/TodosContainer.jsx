import React from "react";
import TodoCard from "./TodoCard";
import { useTodo } from "../context/TodoProvider";

const TodosContainer = () => {
  const { todos } = useTodo();

  return (
    <div className="mt-10">
      {todos
        .map((todo, index) => <TodoCard key={index} todo={todo} />)
        .reverse()}
    </div>
  );
};

export default TodosContainer;
