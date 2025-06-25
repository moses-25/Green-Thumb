import NotificationBox from "../components/ui/NotificationBox";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to GreenThumb 🌿</h1>
      <NotificationBox />
      <NotificationBox plantId={1} />

      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* content here */}
    </motion.div>
    </div>
  );
};

export default HomePage;
