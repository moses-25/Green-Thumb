import API from "./api";

export const getPlants = () => API.get("/plants");
export const addPlant = (data) => API.post("/plants", data);
export const updatePlant = (id, data) => API.put(`/plants/${id}`, data);
export const deletePlant = (id) => API.delete(`/plants/${id}`);
