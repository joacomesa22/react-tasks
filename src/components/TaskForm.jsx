import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 p-10 mb-10 rounded-2xl flex flex-col gap-3 items-center border-solid border-2 border-black"
      >
        <h1 className="text-4xl text-center font-bold text-black">
          Tasks List
        </h1>
        <input
          type="text"
          placeholder="Task Name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-100 p-3 w-full text-slate-900 rounded-md border-solid border-2 border-black focus:outline-none"
          autoFocus
        />
        <textarea
          placeholder="Task Details"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-100 p-3 w-full text-slate-900 resize-none rounded-md border-solid border-2 border-black focus:outline-none"
          value={description}
        ></textarea>
        <button className="bg-red-500 px-3 py-1 text-slate-100 rounded-md w-2/4 border-solid border-2 border-black hover:bg-red-600">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
