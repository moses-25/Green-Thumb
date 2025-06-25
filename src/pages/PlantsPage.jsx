import { useEffect, useState } from "react";
import { getPlants } from "../services/plants";
import PlantList from "../components/plants/PlantList";
import { motion } from "framer-motion";

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
      <h1>GreenThumb Dashboard</h1>
      <PlantList />
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>My Plants</h1>
      {/* content here */}
    </motion.div>
    </div>
  );
};

export default PlantsPage;