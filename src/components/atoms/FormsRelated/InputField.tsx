import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="form-input" />;
};

export default InputField;
