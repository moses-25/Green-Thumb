import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#388e3c",
        padding: "15px 30px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      aria-label="Main navigation"
      role="navigation"
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
            textDecoration: "none",
          }}
        >
          Green Thumb🌱
        </NavLink>
        <div>
          {!user ? (
            <>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  margin: "0 15px",
                  color: isActive ? "#FFD700" : "#fff",
                  fontSize: "18px",
                  textDecoration: "none",
                })}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                style={({ isActive }) => ({
                  margin: "0 15px",
                  color: isActive ? "#FFD700" : "#fff",
                  fontSize: "18px",
                  textDecoration: "none",
                })}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/plants"
                style={({ isActive }) => ({
                  margin: "0 15px",
                  color: isActive ? "#FFD700" : "#fff",
                  fontSize: "18px",
                  textDecoration: "none",
                })}
              >
                My Plants
              </NavLink>
              <NavLink
                to="/reminders"
                style={({ isActive }) => ({
                  margin: "0 15px",
                  color: isActive ? "#FFD700" : "#fff",
                  fontSize: "18px",
                  textDecoration: "none",
                })}
              >
                Reminders
              </NavLink>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  margin: "0 15px",
                  color: "#fff",
                  fontSize: "18px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

