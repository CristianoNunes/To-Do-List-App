import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className="form-checkbox h-5 w-5 text-blue-600"
  />
);

export default Checkbox;
