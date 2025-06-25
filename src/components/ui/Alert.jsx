// src/components/ui/Alert.jsx

const Alert = ({ message, type = "info" }) => {
    const colors = {
      success: "#dcfce7",
      error: "#fee2e2",
      info: "#e0f2fe",
      warning: "#fef9c3",
    };
  
    return (
      <div
        style={{
          backgroundColor: colors[type],
          padding: "0.75rem 1rem",
          borderRadius: "5px",
          marginBottom: "1rem",
          fontSize: "0.9rem",
        }}
      >
        {message}
      </div>
    );
  };
  
  export default Alert;
  