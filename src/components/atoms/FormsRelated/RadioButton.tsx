import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value }) => {
  return (
    <label className="flex items-center pt-2 radio-label">
      <input type="radio" name={name} value={value} className="mr-2" />
      {label}
    </label>
  );
};

export default RadioButton;
