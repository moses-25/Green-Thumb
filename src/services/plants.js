import API from "./api";

export const getPlants = async () => {
  try {
    const res = await API.get("/plants");
    return res.data;
  } catch (err) {
    console.error("Failed to fetch plants:", err);
    throw err;
  }
};

export const addPlant = async (data) => {
  try {
    const res = await API.post("/plants", data);
    return res.data;
  } catch (err) {
    console.error("Failed to add plant:", err);
    throw err;
  }
};

export const updatePlant = async (id, data) => {
  try {
    const res = await API.put(`/plants/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(`Failed to update plant ${id}:`, err);
    throw err;
  }
};

export const deletePlant = async (id) => {
  try {
    await API.delete(`/plants/${id}`);
  } catch (err) {
    console.error(`Failed to delete plant ${id}:`, err);
    throw err;
  }
};

