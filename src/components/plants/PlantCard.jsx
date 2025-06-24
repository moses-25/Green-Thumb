const PlantCard = ({ plant, onEdit, onDelete }) => {
    return (
      <div className="plant-card">
        <h3>{plant.name}</h3>
        <p><strong>Species:</strong> {plant.species}</p>
        <p><strong>Location:</strong> {plant.location}</p>
        <button onClick={() => onEdit(plant)}>Edit</button>
        <button onClick={() => onDelete(plant.id)}>Delete</button>
      </div>
    );
  };
  
  export default PlantCard;
  