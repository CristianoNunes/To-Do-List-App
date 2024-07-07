import React from "react";

type TypeButton = "primary" | "danger";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: TypeButton;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "primary",
}) => (
  <button
    className={`${
      type === "danger" ? "bg-red-500" : "bg-blue-500"
    } text-white px-4 py-2 rounded`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
