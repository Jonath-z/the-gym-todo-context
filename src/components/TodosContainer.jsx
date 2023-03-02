import React from "react";
import { useTodo } from "../context/TodoProvider";
import TodoCard from "./TodoCard";

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
