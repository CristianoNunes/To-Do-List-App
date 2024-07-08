import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, ...props }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className="form-checkbox h-5 w-5 text-blue-600"
    {...props}
  />
);

export default Checkbox;
