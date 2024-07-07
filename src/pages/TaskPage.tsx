import React, { useState } from "react";
import TaskTemplate from "../templates/TaskTemplate";
import { Task } from "../types/Task";
import { v4 as uuidv4 } from "uuid";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: uuidv4(), name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskTemplate
      tasks={tasks}
      newTask={newTask}
      onAddTask={addTask}
      onNewTaskChange={(e) => setNewTask(e.target.value)}
      onToggleTask={toggleTask}
    />
  );
};

export default TaskPage;
