import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import { useTodoStore, type TodoType } from "../stores/useTodoStore";
import { useState } from "react";

const TaskItem = ({ todoItem }: { todoItem: TodoType }) => {
  const { removeTodo, toggleTodo, editTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);

  const handleEdit = () => {
    if (!newText) {
      setIsEditing(false);
      return;
    }
    editTodo(todoItem.id, newText);
    setIsEditing(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }} // enter from right
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }} // exit to left
        transition={{ duration: 0.4, ease: "easeInOut" }}
        layout
        className="w-full flex items-center text-2xl justify-between gap-4 p-4
       bg-white rounded-xl"
      >
        {!isEditing ? (
          <label className="flex items-center  gap-2">
            <input
              className="w-5 h-5 accent-yellow-500 rounded-3xl mt-1 "
              type="checkbox"
              name="task"
              id="toggle-todo"
              checked={todoItem.completed}
              onChange={() => toggleTodo(todoItem.id)}
            />
            <span
              className={`${
                todoItem.completed
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {todoItem.text}
            </span>
          </label>
        ) : (
          <div className="w-full flex items-center">
            <input
              className="border border-gray-300 px-4 py-2.5  placeholder:text-gray-500 
             placeholder:text-lg text-gray-700 bg-white
            rounded-xl w-full focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Edit task name."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>
        )}

        {!isEditing ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-1.5 text-sm
            transition-all duration-300 flex items-center justify-between
          hover:bg-emerald-500 bg-emerald-100 rounded-3xl "
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todoItem.id)}
              title="remove"
              className="text-red-400 rounded-full text-sm p-1 hover:bg-gray-100 "
            >
              <CircleX />
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="px-4 py-1.5 text-sm
            transition-all duration-300 flex items-center justify-between
          hover:bg-rose-800 bg-emerald-600 rounded-3xl text-white "
          >
            Save
          </button>
        )}
      </motion.div>
    </>
  );
};

export default TaskItem;
