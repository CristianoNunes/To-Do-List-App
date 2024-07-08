import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, ...props }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className="border rounded px-2 py-1"
    {...props}
  />
);

export default Input;
