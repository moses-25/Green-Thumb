import { useState } from "react";
import { register as registerAPI } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Example video URL (replace with your own or a royalty-free video)
const VIDEO_URL = "https://v1.pinimg.com/videos/mc/720p/46/20/69/4620695ebaa40cf835e9c646fc18296f.mp4";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerAPI(form);
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-page" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Video Background */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "1700px",
            height: "700px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            objectFit: "cover",
          }}
        >
          <source src={VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for readability */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20vw",
          height: "20vh",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Form Container */}
      <div
        className="register-form-container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "400px",
          margin: "0 auto",
          top: "10vh",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "12px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
          padding: "2rem",
        }}
      >
        <h2 className="register-title" style={{ textAlign: "center" }}>Join our community</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="form-input register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="form-input register-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="form-input register-input"
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="register-btn"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            Join
          </button>
        </form>
        <p className="register-login-link" style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;

