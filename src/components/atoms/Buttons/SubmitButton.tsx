import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className="submit-btn flex w-full p-4 justify-center mt-8">{text}</button>;
};

export default Button;
