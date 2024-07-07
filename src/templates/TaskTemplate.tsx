import React from "react";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import TaskList from "../components/organisms/TaskList";
import { Task } from "../types/Task";

interface TaskTemplateProps {
  tasks: Task[];
  newTask: string;
  onAddTask: () => void;
  onNewTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, newName: string) => void;
}

const TaskTemplate: React.FC<TaskTemplateProps> = ({
  tasks,
  newTask,
  onAddTask,
  onNewTaskChange,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => (
  <div className="p-4">
    <div className="flex space-x-2 mb-4">
      <Input value={newTask} onChange={onNewTaskChange} />
      <Button onClick={onAddTask}>Add Task</Button>
    </div>
    <TaskList
      tasks={tasks}
      onToggleTask={onToggleTask}
      onDeleteTask={onDeleteTask}
      onEditTask={onEditTask}
    />
  </div>
);

export default TaskTemplate;
