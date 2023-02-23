import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg border-solid border-2 border-black w-80 flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
        <p className="text-sm">{task.description}</p>
      </div>

      <button
        onClick={() => {
          deleteTask(task.id);
        }}
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-600 text-slate-100 border-solid border-2 border-black w-20 mt-4"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
