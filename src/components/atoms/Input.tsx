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
    className="w-full rounded px-2 py-1 focus:outline-none focus:ring-0"
    {...props}
  />
);

export default Input;
