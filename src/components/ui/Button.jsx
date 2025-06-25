// src/components/ui/Button.jsx

const Button = ({ children, type = "button", onClick }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        style={{
          backgroundColor: "#34d399",
          color: "#fff",
          padding: "0.6rem 1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  