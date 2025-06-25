// src/components/ui/MotionNavLink.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionNavLink = ({ to, children, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: "inline-block" }}
    >
      <Link to={to} onClick={onClick} className="motion-nav-link">
        {children}
        <motion.span
          className="underline"
          layoutId="underline"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};

export default MotionNavLink;
