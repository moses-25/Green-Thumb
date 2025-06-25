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
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> 🌿GreenThumb</Link>
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
        
      </button>
      {menuOpen && (
        <div className="menu">
          {user ? (
            <>
              <Link to="/plants" onClick={() => setMenuOpen(false)}>My Plants</Link>
              <Link to="/reminders" onClick={() => setMenuOpen(false)}>Reminders</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

