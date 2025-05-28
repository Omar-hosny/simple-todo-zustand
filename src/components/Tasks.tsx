import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl text-green-700 text-start mb-4">Tasks</h2>
      {/* Render tasks here */}
      <div className=" w-full max-w-2xl flex flex-col  items-center gap-4">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      {/* Add more tasks as needed */}
    </div>
  );
};

export default Tasks;
