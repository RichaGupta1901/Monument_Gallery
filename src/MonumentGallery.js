import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for API calls
import "./MonumentGallery.css";

const API_URL = "http://localhost:3000/monuments"; 

const MonumentGallery = () => {
  const [monuments, setMonuments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMonument, setNewMonument] = useState({ name: "", description: "", city: "", image: "" });

  // Fetch monuments from json-server
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setMonuments(response.data))
      .catch(error => console.error("Error fetching monuments:", error));
  }, []);

  // Add new monument
  const handleAddMonument = () => {
    if (!newMonument.name || !newMonument.description || !newMonument.city || !newMonument.image) return;

    axios.post(API_URL, { id: Date.now(), ...newMonument }) // Add to JSON Server
      .then(response => {
        setMonuments([...monuments, response.data]); // Update state with new monument
        setNewMonument({ name: "", description: "", city: "", image: "" }); // Reset form
      })
      .catch(error => console.error("Error adding monument:", error));
  };

  // Delete monument
  const handleDeleteMonument = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => setMonuments(monuments.filter(m => m.id !== id)))
      .catch(error => console.error("Error deleting monument:", error));
  };

  return (
    <div className="container">
      <h1 className="gallery-heading">Monument 🏛️ Gallery</h1>

      {/* Search and Add Buttons */}
      <div className="header">
        <input
          type="text"
          placeholder="Search Monument"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleAddMonument}>Add Monument</button>
      </div>

      {/* Input Fields for Adding a New Monument */}
      <div className="add-form">
        <input 
          type="text" 
          value={newMonument.name} 
          onChange={(e) => setNewMonument({...newMonument, name: e.target.value})}
          placeholder="Name"
        />
        <input 
          type="text" 
          value={newMonument.description} 
          onChange={(e) => setNewMonument({...newMonument, description: e.target.value})}
          placeholder="Description"
        />
        <input 
          type="text" 
          value={newMonument.city} 
          onChange={(e) => setNewMonument({...newMonument, city: e.target.value})}
          placeholder="City"
        />
        <input 
          type="text" 
          value={newMonument.image} 
          onChange={(e) => setNewMonument({...newMonument, image: e.target.value})}
          placeholder="Image URL"
        />
      </div>

      {/* Monument Grid */}
      <div className="grid">
        {monuments.filter(monument => 
          monument.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(monument => (
          <div key={monument.id} className="card">
            <img src={monument.image} alt={monument.name} />
            <h2>{monument.name}</h2>
            <p>{monument.description}</p>
            <p><strong>{monument.city}</strong></p>
            <button onClick={() => handleDeleteMonument(monument.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonumentGallery;
