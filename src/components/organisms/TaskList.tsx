import React from "react";
import { Task } from "../../types/Task";
import TaskItem from "../molecules/TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        name={task.name}
        completed={task.completed}
        onToggle={() => onToggleTask(task.id)}
      />
    ))}
  </div>
);

export default TaskList;
