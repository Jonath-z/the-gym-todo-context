import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTodo } from "../context/TodoProvider";

const InputBar = () => {
  const [currentTask, setCurrentTask] = useState("");
  const { addNewTodo } = useTodo();

  return (
    <form className="flex gap-3">
      <input
        type="text"
        onChange={(e) => setCurrentTask(e.target.value)}
        defaultValue={currentTask}
        value={currentTask}
        placeholder="New task"
        className="w-full border-gray-300 shadow-xl shadow-orange-200 py-3 px-5 rounded-3xl outline-orange-300"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (currentTask !== "")
            addNewTodo({ task: currentTask, done: false, id: uuid() });
          setCurrentTask("");
        }}
        className="bg-orange-600 font-bold hover:bg-orange-700 transition-all text-white w-24 rounded-md"
      >
        Add
      </button>
    </form>
  );
};
export default InputBar;
