import { useTodoStore } from "../stores/useTodoStore";
import TaskItem from "./TaskItem";
import { AnimatePresence, motion } from "framer-motion";

const Tasks = () => {
  const { todos } = useTodoStore();
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl text-green-700 text-start mb-4">Tasks</h2>
      {/* Render tasks here */}
      {todos?.length === 0 && (
        <motion.div
          initial={{ opacity: 0, x: 100 }} // enter from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }} // exit to left
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h1 className="text-2xl text-gray-400">No tasks yet to show </h1>
        </motion.div>
      )}
      <AnimatePresence>
        <div className=" w-full max-w-2xl flex flex-col  items-center gap-4">
          {todos?.length > 0 &&
            todos.map((todo) => <TaskItem todoItem={todo} key={todo.id} />)}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Tasks;
