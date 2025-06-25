const Button = ({ children, ...props }) => (
  <button {...props} className="btn">
    {children}
  </button>
);

export default Button;