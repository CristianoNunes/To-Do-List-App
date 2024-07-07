import React from "react";

type TypeButton = "primary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: React.ReactNode;
  typeButton?: TypeButton;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  typeButton = "primary",
  ...props
}) => (
  <button
    className={`${
      typeButton === "danger" ? "bg-red-500" : "bg-blue-500"
    } text-white px-4 py-2 rounded`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
