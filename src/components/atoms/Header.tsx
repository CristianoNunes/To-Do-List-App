import React from "react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => (
  <h1 className="text-2xl font-bold text-center my-4">{text}</h1>
);

export default Header;
