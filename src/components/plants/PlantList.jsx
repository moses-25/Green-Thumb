// src/components/plants/PlantList.jsx

import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";
import { getPlants, deletePlant } from "../../services/plants";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [editingPlant, setEditingPlant] = useState(null);

  const loadPlants = async () => {
    try {
      const res = await getPlants();
      setPlants(res.data);
    } catch (err) {
      alert("Failed to load plants.");
    }
  };

  const handleDelete = async (id) => {
    await deletePlant(id);
    loadPlants();
  };

  const handleEdit = (plant) => {
    setEditingPlant(plant);
  };

  const handleFormDone = () => {
    setEditingPlant(null);
    loadPlants();
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <div>
      <h2>Your Plants</h2>
      <PlantForm existingPlant={editingPlant} onDone={handleFormDone} />
      <div className="plant-list">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No plants found. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default PlantList;
