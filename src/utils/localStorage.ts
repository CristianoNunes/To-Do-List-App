import { Task } from "../types/Task";

const TASKS_KEY = "tasks";

export const getTasksFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem(TASKS_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
