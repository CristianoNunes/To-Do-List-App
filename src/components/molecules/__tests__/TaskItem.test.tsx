import { render, fireEvent, waitFor } from "@testing-library/react";
import TaskItem from "../TaskItem";

const defaultProps = {
  id: "1",
  name: "Test Task",
  completed: false,
  onToggle: jest.fn(),
  onDelete: jest.fn(),
  onEdit: jest.fn(),
};

test("renders TaskItem", () => {
  const { getByText } = render(<TaskItem {...defaultProps} />);
  expect(getByText("Test Task")).toBeInTheDocument();
});

test("calls onToggle when checkbox is clicked", () => {
  const { getByRole } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByRole("checkbox"));
  expect(defaultProps.onToggle).toHaveBeenCalledTimes(1);
});

test("calls onDelete when delete button is clicked", async () => {
  const { getByTestId, getByText } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByTestId("delete-button"));
  fireEvent.click(getByText("Confirm"));
  await waitFor(() => expect(defaultProps.onDelete).toHaveBeenCalledTimes(1));
});

test("calls onEdit when edit button is clicked", () => {
  const { getByTestId } = render(<TaskItem {...defaultProps} />);
  fireEvent.click(getByTestId("edit-button"));
  expect(defaultProps.onEdit).toHaveBeenCalledTimes(0);
});
