// src/components/reminders/ReminderList.jsx

import { useEffect, useState } from "react";
import { getReminders, deleteReminder } from "../../services/reminders";
import ReminderItem from "./ReminderItem";
import ReminderForm from "./ReminderForm";

const ReminderList = ({ plantId }) => {
  const [reminders, setReminders] = useState([]);
  const [editingReminder, setEditingReminder] = useState(null);

  const loadReminders = async () => {
    try {
      const res = await getReminders();
      const filtered = res.data.filter((r) => r.plant_id === plantId);
      setReminders(filtered);
    } catch (err) {
      alert("Failed to load reminders.");
    }
  };

  const handleDelete = async (id) => {
    await deleteReminder(id);
    loadReminders();
  };

  const handleEdit = (reminder) => {
    setEditingReminder(reminder);
  };

  const handleFormDone = () => {
    setEditingReminder(null);
    loadReminders();
  };

  useEffect(() => {
    loadReminders();
  }, [plantId]);

  return (
    <div>
      <ReminderForm
        plantId={plantId}
        existingReminder={editingReminder}
        onDone={handleFormDone}
      />
      <div className="reminder-list">
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <ReminderItem
              key={reminder.id}
              reminder={reminder}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No reminders yet for this plant.</p>
        )}
      </div>
    </div>
  );
};

export default ReminderList;
