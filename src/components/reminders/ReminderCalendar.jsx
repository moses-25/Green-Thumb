// src/components/reminders/ReminderCalendar.jsx

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { getReminders } from "../../services/reminders";
import { format } from "date-fns";

const ReminderCalendar = ({ plantId }) => {
  const [reminders, setReminders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const loadReminders = async () => {
    const res = await getReminders();
    const filtered = res.data.filter((r) => r.plant_id === plantId);
    setReminders(filtered);
  };

  useEffect(() => {
    loadReminders();
  }, [plantId]);

  const formatDate = (date) => format(date, "yyyy-MM-dd");

  const getTileContent = ({ date, view }) => {
    if (view !== "month") return null;

    const dateStr = formatDate(date);
    const hasReminder = reminders.some((r) => r.date === dateStr);
    return hasReminder ? <div style={{ fontSize: "0.6rem", color: "green" }}>•</div> : null;
  };

  const handleDateClick = (date) => {
    setSelectedDate(formatDate(date));
  };

  const remindersForSelectedDate = reminders.filter((r) => r.date === selectedDate);

  return (
    <div>
      <h3>Reminder Calendar</h3>
      <Calendar
        onClickDay={handleDateClick}
        tileContent={getTileContent}
      />
      {selectedDate && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Reminders on {selectedDate}</h4>
          {remindersForSelectedDate.length > 0 ? (
            <ul>
              {remindersForSelectedDate.map((r) => (
                <li key={r.id}>
                  <strong>{r.task}</strong> — {r.note || "No note"}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reminders for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReminderCalendar;
