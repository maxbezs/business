const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
}) => (
  <div className="flex relative w-full">
    <span className="bg-neutral-800 text-white p-3 text-left transition-all duration-300 w-[10%] rounded-s-lg">
      {label}:
    </span>
    <input
      className="rounded-r-lg bg-neutral-900 border-transparent text-white px-4 py-2 w-full"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength} // Add maxLength attribute
    />
  </div>
);

export default FormInput;
