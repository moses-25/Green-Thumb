import ReminderList from "../components/reminders/ReminderList";
import ReminderCalendar from "../components/reminders/ReminderCalendar";
import { motion } from "framer-motion";


const RemindersPage = () => {
  const plantId = 1; // Replace with dynamic ID if needed

  return (
    <div>
      <h2>Reminders for Plant #{plantId}</h2>
      <ReminderList plantId={plantId} />
      <ReminderCalendar plantId={plantId} />

      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>My Plants</h1>
      {/* content here */}
    </motion.div>
    </div>
  );
};

export default RemindersPage;
