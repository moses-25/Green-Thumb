// src/components/layout/Navbar.jsx

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import MotionNavLink from "../ui/MotionNavLink";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🌿 GreenThumb</Link>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {user ? (
              <>
                <MotionNavLink to="/plants" onClick={toggleMenu}>My Plants</MotionNavLink>
                <MotionNavLink to="/reminders" onClick={toggleMenu}>Reminders</MotionNavLink>
                <button onClick={handleLogout} className="motion-nav-link">Logout</button>
              </>
            ) : (
              <>
                <MotionNavLink to="/login" onClick={toggleMenu}>Login</MotionNavLink>
                <MotionNavLink to="/register" onClick={toggleMenu}>Register</MotionNavLink>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
