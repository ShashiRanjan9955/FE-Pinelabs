import React from "react";

interface ButtonProps {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, active, children }) => {
  return (
    <button className={`tab-button ${active ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
