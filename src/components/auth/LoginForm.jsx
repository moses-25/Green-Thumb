import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import React from "react";


const VIDEO_URL = "/Login.mp4"; // Ensure this path is correct based on your project structure

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/plants");
  };

  return (
    <div
      className="login-page"
      style={{
        position: "relative",
        minHeight: "90vh",
        overflow: "hidden",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "1850px",
          height: "730px",
          borderRadius: "10px",
          zIndex: 0,
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Form Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "400px",
          margin: "0 auto",
          top: "10vh",
          backgroundColor: "rgba(255,255,255,0.92)",
          borderRadius: "12px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
          padding: "2rem",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "#007BFF" }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

