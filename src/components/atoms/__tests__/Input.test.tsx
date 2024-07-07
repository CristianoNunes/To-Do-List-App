import { render, fireEvent } from "@testing-library/react";
import Input from "../Input";

test("renders input with value", () => {
  const { getByDisplayValue } = render(
    <Input value="test" onChange={() => {}} />
  );
  expect(getByDisplayValue("test")).toBeInTheDocument();
});

test("calls onChange when input value changes", () => {
  const handleChange = jest.fn();
  const { getByDisplayValue } = render(
    <Input value="test" onChange={handleChange} />
  );
  fireEvent.change(getByDisplayValue("test"), {
    target: { value: "new value" },
  });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
