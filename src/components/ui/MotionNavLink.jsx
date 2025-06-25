import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MotionNavLink = ({ to, children, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05, color: "#22c55e" }}
    whileTap={{ scale: 0.95 }}
  >
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  </motion.div>
);

export default MotionNavLink;