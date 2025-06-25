// src/components/ui/Loader.jsx

const Loader = ({ message = "Loading..." }) => {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <div className="loader" style={{ marginBottom: "1rem" }}></div>
        <p>{message}</p>
      </div>
    );
  };
  
  export default Loader;
  