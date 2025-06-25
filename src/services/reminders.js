import API from "./api";

export const getReminders = () => API.get("/reminders");
export const addReminder = (data) => API.post("/reminders", data);
export const updateReminder = (id, data) => API.put(`/reminders/${id}`, data);
export const deleteReminder = (id) => API.delete(`/reminders/${id}`);

