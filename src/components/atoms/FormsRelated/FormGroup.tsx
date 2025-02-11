import React from "react";
import Label from "./Label";
import InputField from "./InputField";

interface FormGroupProps {
  label: string;
  type: string;
  placeholder: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, type, placeholder }) => {
  return (
    <div className="form-group">
      <Label text={label} />
      <InputField type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormGroup;
