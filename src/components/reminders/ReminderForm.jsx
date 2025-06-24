// src/components/reminders/ReminderForm.jsx

import { useState, useEffect } from "react";
import { addReminder, updateReminder } from "../../services/reminders";

const ReminderForm = ({ plantId, existingReminder, onDone }) => {
  const [form, setForm] = useState({ task: "", frequency: "", note: "" });

  useEffect(() => {
    if (existingReminder) {
      setForm({
        task: existingReminder.task,
        frequency: existingReminder.frequency,
        note: existingReminder.note || "",
      });
    } else {
      setForm({ task: "", frequency: "", note: "" });
    }
  }, [existingReminder]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingReminder) {
        await updateReminder(existingReminder.id, form);
      } else {
        await addReminder({ ...form, plant_id: plantId });
      }
      onDone();
    } catch (err) {
      alert("Error saving reminder.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <h3>{existingReminder ? "Edit Reminder" : "Add Reminder"}</h3>
      <input
        name="task"
        value={form.task}
        onChange={handleChange}
        placeholder="e.g., Water"
        required
      />
      <input
        name="frequency"
        value={form.frequency}
        onChange={handleChange}
        placeholder="e.g., Every 3 days"
        required
      />
      <textarea
        name="note"
        value={form.note}
        onChange={handleChange}
        placeholder="Optional note"
      />
      <button type="submit" style={{ marginTop: "0.5rem" }}>
        {existingReminder ? "Update" : "Add"} Reminder
      </button>
    </form>
  );
};

export default ReminderForm;
