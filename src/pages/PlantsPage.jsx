import { useEffect, useState } from "react";
import { getPlants } from "../services/plants";

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants().then(res => setPlants(res.data));
  }, []);

  return (
    <div>
      <h2>Your Plants</h2>
      <ul>
        {plants.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
};
