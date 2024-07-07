import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskTemplate from "../templates/TaskTemplate";
import { Task } from "../types/Task";
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../utils/localStorage";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [
        ...tasks,
        { id: uuidv4(), name: newTask, completed: false },
      ];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setNewTask("");
    }
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id: string, newName: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  return (
    <TaskTemplate
      tasks={tasks}
      newTask={newTask}
      onAddTask={addTask}
      onNewTaskChange={(e) => setNewTask(e.target.value)}
      onToggleTask={toggleTask}
      onDeleteTask={deleteTask}
      onEditTask={editTask}
    />
  );
};

export default TaskPage;
