import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

const TaskInput = () => {
  const { addTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };
  return (
    <form
      onSubmit={(e) => handleAddTask(e)}
      className="flex items-center mb-4 w-full max-w-md justify-between gap-2"
    >
      <input
        className="border border-gray-300 px-4 py-2.5  placeholder:text-gray-500 
        placeholder:text-lg text-gray-700 bg-white
        rounded-xl w-full focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-emerald-700 text-white rounded-2xl
         px-8 py-2.5  hover:bg-gray-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
