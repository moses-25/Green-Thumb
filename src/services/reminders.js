import API from "./api";

export const getReminders = async () => {
  try {
    const res = await API.get("/reminders");
    return res.data;
  } catch (err) {
    console.error("Failed to fetch reminders:", err);
    throw err;
  }
};

export const addReminder = async (data) => {
  try {
    const res = await API.post("/reminders", data);
    return res.data;
  } catch (err) {
    console.error("Failed to add reminder:", err);
    throw err;
  }
};

export const updateReminder = async (id, data) => {
  try {
    const res = await API.put(`/reminders/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(`Failed to update reminder ${id}:`, err);
    throw err;
  }
};

export const deleteReminder = async (id) => {
  try {
    await API.delete(`/reminders/${id}`);
  } catch (err) {
    console.error(`Failed to delete reminder ${id}:`, err);
    throw err;
  }
};

