import { useEffect, useState } from "react";
import { getReminders } from "../../services/reminders";
import { format, isToday, isTomorrow, isWithinInterval, addDays, parseISO } from "date-fns";

const NotificationBox = ({ plantId = null, daysAhead = 3 }) => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const loadReminders = async () => {
      try {
        const res = await getReminders();
        const now = new Date();
        const future = addDays(now, daysAhead);

        const filtered = res.data
          .filter((r) => {
            if (plantId && r.plant_id !== plantId) return false;
            if (!r.date) return false;

            const reminderDate = parseISO(r.date);
            return isWithinInterval(reminderDate, { start: now, end: future });
          })
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setUpcoming(filtered);
      } catch (err) {
        console.error("Failed to fetch reminders:", err);
      }
    };

    loadReminders();
  }, [plantId, daysAhead]);

  if (upcoming.length === 0) return null;

  return (
    <div style={{ padding: "1rem", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", marginBottom: "1rem" }}>
      <h4>🌱 Upcoming Reminders</h4>
      <ul>
        {upcoming.map((r) => {
          const dueDate = parseISO(r.date);
          const label = isToday(dueDate)
            ? "Today"
            : isTomorrow(dueDate)
            ? "Tomorrow"
            : format(dueDate, "EEE, MMM d");

          return (
            <li key={r.id}>
              <strong>{r.task}</strong> for plant #{r.plant_id} → <em>{label}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotificationBox;
