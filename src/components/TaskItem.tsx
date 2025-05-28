const TaskItem = () => {
  return (
    <>
      <div className="w-full flex items-center text-2xl justify-between gap-4 p-4 bg-white rounded-xl">
        <span>This is a task item</span>
        <input
          className="w-5 h-5 accent-yellow-500 rounded-3xl "
          type="checkbox"
          name="task"
          id=""
        />
      </div>
    </>
  );
};

export default TaskItem;
