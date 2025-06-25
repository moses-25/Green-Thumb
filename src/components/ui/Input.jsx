// src/components/ui/Input.jsx

const Input = ({ label, ...props }) => {
    return (
      <div style={{ marginBottom: "1rem" }}>
        {label && <label style={{ display: "block", marginBottom: "0.25rem" }}>{label}</label>}
        <input
          {...props}
          style={{
            padding: "0.6rem",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
    );
  };
  
  export default Input;
  