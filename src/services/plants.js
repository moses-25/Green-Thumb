import API from "./api";

export const getPlants = () => API.get("/plants");
export const addPlant = (plant) => API.post("/plants", plant);
export const updatePlant = (id, data) => API.put(`/plants/${id}`, data);
export const deletePlant = (id) => API.delete(`/plants/${id}`);
