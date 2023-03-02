import { useTodo } from "../context/TodoProvider";

const TodoCard = ({ todo }) => {
  const { achieveTodo, deleteTodo } = useTodo();

  return (
    <div className="flex justify-between w-full items-center gap-3 border-b border-orange-200 py-2">
      <div className="flex w-[80%] items-center gap-5">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => achieveTodo(todo)}
        />
        <p className={`w-full break-words ${todo.done ? "line-through" : ""}`}>
          {todo.task}
        </p>
      </div>
      <button
        onClick={() => deleteTodo(todo)}
        className="bg-red-500 px-5 py-2 rounded-md text-white text-bold hover:bg-red-600 transition-all"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
