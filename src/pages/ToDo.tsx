import { Input } from "@/components/ui/input";
import { AnimatedShinyButton } from "@/components/ui/animated-shiny-button";
import { useState, useEffect } from "react";
import { DeleteIcon } from "lucide-react";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([{ id: 1, text: "Sample Task 1" }]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const res = localStorage.getItem("tasks");
    if (res) {
      setTasks(JSON.parse(res));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} className="mt-3">
        <AnimatedShinyButton className="h-10 w-30">Submit</AnimatedShinyButton>
      </button>

      {/* display tasks */}
      <div className="mt-5 space-y-2">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center  p-2 rounded"
          >
            <span>{t.text}</span>
            <button
              onClick={() => deleteTask(t.id)}
              className="text-red-500 hover:underline"
            >
              <DeleteIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
