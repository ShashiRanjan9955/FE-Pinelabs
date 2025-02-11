interface SelectFieldProps {
  id?: string; // Optional ID
  options: { value: string; label: string; disabled?: boolean }[]; // Optional disabled property
}

const SelectField: React.FC<SelectFieldProps> = ({ id, options }) => {
  return (
    <select className="form-select" id={id}>
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
