// src/components/reminders/ReminderItem.jsx

const ReminderItem = ({ reminder, onEdit, onDelete }) => {
    return (
      <div style={{ borderBottom: "1px solid #ddd", padding: "0.5rem 0" }}>
        <p><strong>Task:</strong> {reminder.task}</p>
        <p><strong>Frequency:</strong> {reminder.frequency}</p>
        {reminder.note && <p><strong>Note:</strong> {reminder.note}</p>}
        <button onClick={() => onEdit(reminder)}>Edit</button>
        <button onClick={() => onDelete(reminder.id)} style={{ marginLeft: "0.5rem" }}>
          Delete
        </button>
      </div>
    );
  };
  
  export default ReminderItem;
  