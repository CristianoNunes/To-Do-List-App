import { render, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

test("renders checkbox", () => {
  const { getByRole } = render(
    <Checkbox checked={false} onChange={() => {}} />
  );
  expect(getByRole("checkbox")).toBeInTheDocument();
});

test("calls onChange when checkbox is clicked", () => {
  const handleChange = jest.fn();
  const { getByRole } = render(
    <Checkbox checked={false} onChange={handleChange} />
  );
  fireEvent.click(getByRole("checkbox"));
  expect(handleChange).toHaveBeenCalledTimes(1);
});
