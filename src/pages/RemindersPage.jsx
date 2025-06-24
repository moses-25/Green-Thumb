import ReminderList from "../components/reminders/ReminderList";

const RemindersPage = () => {
  const plantId = 1; // Replace with dynamic ID if needed

  return (
    <div>
      <h2>Reminders for Plant #{plantId}</h2>
      <ReminderList plantId={plantId} />
    </div>
  );
};

export default RemindersPage;
