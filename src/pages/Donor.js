import React, { useState } from "react";
import styles from './Donor.module.css';
import statesAndCities from "../data/statesAndCities.js";

export default function Donor() {
  const [bloodType, setBloodType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    const found = statesAndCities.find((s) => s.name === stateName);
    setCities(found ? found.cities : []);
    setSelectedCity("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3001/search-donor?bloodType=${bloodType}&state=${selectedState}&city=${selectedCity}`,
        { method: "GET" }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Search failed");
      }

      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching donors:", error);
      setSearchResult([]); // Clear results if an error occurs
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <label>Blood Group:</label>
          <select value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
            <option value="">Select</option>
            <option value="O-">O-</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label>State:</label>
          <select value={selectedState} onChange={handleStateChange} required>
            <option value="">Select</option>
            {statesAndCities.map((state) => (
              <option key={state.name} value={state.name}>{state.name}</option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label>City:</label>
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required>
            <option value="">Select</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <button type="submit">Search</button>
      </form>

      {searchResult && (
        <div className={styles.results}>
          {searchResult.length === 0 ? (
            <p>No donors found.</p>
          ) : (
            searchResult.map((donor, index) => (
              <div key={index} className={styles.resultCard}>
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Blood Type:</strong> {donor.bloodType}</p>
                <p><strong>Location:</strong> {donor.city}, {donor.state}</p>
                <p><strong>Contact:</strong> {donor.phone}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
