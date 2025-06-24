// src/components/plants/PlantForm.jsx

import { useState, useEffect } from "react";
import { addPlant, updatePlant } from "../../services/plants";

const PlantForm = ({ existingPlant, onDone }) => {
  const [form, setForm] = useState({ name: "", species: "", location: "" });

  useEffect(() => {
    if (existingPlant) {
      setForm({
        name: existingPlant.name,
        species: existingPlant.species,
        location: existingPlant.location,
      });
    } else {
      setForm({ name: "", species: "", location: "" });
    }
  }, [existingPlant]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingPlant) {
        await updatePlant(existingPlant.id, form);
      } else {
        await addPlant(form);
      }
      onDone();
    } catch (err) {
      alert("Something went wrong while saving the plant.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h3>{existingPlant ? "Edit Plant" : "Add Plant"}</h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Plant name"
        required
      />
      <input
        name="species"
        value={form.species}
        onChange={handleChange}
        placeholder="Species"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <button type="submit" style={{ marginTop: "1rem" }}>
        {existingPlant ? "Update" : "Add"} Plant
      </button>
    </form>
  );
};

export default PlantForm;
