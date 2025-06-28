import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#228B22",
        color: "#fff",
        padding: "15px 30px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
          }}
        >
          Green Thumb 
        </Link>
        <div>
          <Link
            to="/plants"
            style={{
              margin: "0 15px",
              color: "#fff",
              fontSize: "18px",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#FFD700")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Plants
          </Link>
          <Link
            to="/reminders"
            style={{
              margin: "0 15px",
              color: "#fff",
              fontSize: "18px",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#FFD700")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Reminders
          </Link>
          {user ? (
            <>
              <Link
                to="/plants"
                style={{
                  margin: "0 15px",
                  color: "#fff",
                  fontSize: "18px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                My Plants
              </Link>
              <Link
                to="/reminders"
                style={{
                  margin: "0 15px",
                  color: "#fff",
                  fontSize: "18px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Reminders
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  margin: "0 15px",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{
                  margin: "0 15px",
                  color: "#fff",
                  fontSize: "18px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{
                  margin: "0 15px",
                  color: "#fff",
                  fontSize: "18px",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

