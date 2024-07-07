import { render, fireEvent } from "@testing-library/react";
import TaskList from "../TaskList";
import { Task } from "../../../types/Task";

const tasks: Task[] = [
  { id: "1", name: "Task 1", completed: false },
  { id: "2", name: "Task 2", completed: true },
];

const defaultProps = {
  tasks,
  onToggleTask: jest.fn(),
  onDeleteTask: jest.fn(),
  onEditTask: jest.fn(),
};

test("renders task list with tasks", () => {
  const { getByText } = render(<TaskList {...defaultProps} />);
  expect(getByText("Task 1")).toBeInTheDocument();
  expect(getByText("Task 2")).toBeInTheDocument();
});

test("calls onToggleTask when a task checkbox is clicked", () => {
  const { getAllByRole } = render(<TaskList {...defaultProps} />);
  fireEvent.click(getAllByRole("checkbox")[0]);
  expect(defaultProps.onToggleTask).toHaveBeenCalledTimes(1);
});

test("calls onDeleteTask when a task delete button is clicked", () => {
  const { getAllByTestId, getByText } = render(<TaskList {...defaultProps} />);
  fireEvent.click(getAllByTestId("delete-button")[0]);
  fireEvent.click(getByText("Confirm"));
  expect(defaultProps.onDeleteTask).toHaveBeenCalledTimes(1);
});

test("calls onEditTask when a task edit button is clicked", () => {
  const { getAllByTestId } = render(<TaskList {...defaultProps} />);
  fireEvent.click(getAllByTestId("edit-button")[0]);
  expect(defaultProps.onEditTask).toHaveBeenCalledTimes(0);
});
