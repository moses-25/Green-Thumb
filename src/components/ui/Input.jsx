const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default Input;