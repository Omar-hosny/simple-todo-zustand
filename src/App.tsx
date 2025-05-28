import "./App.css";
import TaskInput from "./components/TaskInput";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <main className="w-full h-screen gap-4 flex flex-col items-center justify-start  bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-500 ">
          Simple Todo App
        </h1>
        <TaskInput />
        <Tasks />
      </main>
    </>
  );
}

export default App;
