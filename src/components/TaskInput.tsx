const TaskInput = () => {
  return (
    <div className="flex items-center mb-4 w-full max-w-md justify-between gap-2">
      <input
        className="border border-gray-300 px-4 py-2.5  placeholder:text-gray-500 
        placeholder:text-lg text-gray-700 bg-white
        rounded-xl w-full focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Add a new task..."
      />
      <button
        className="bg-emerald-700 text-white rounded-2xl
         px-8 py-2.5  hover:bg-gray-600 focus:outline-none"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
