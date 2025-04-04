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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult({
      bloodType,
      selectedState,
      selectedCity,
    });
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
          <p><strong>Blood Group:</strong> {searchResult.bloodType}</p>
          <p><strong>State:</strong> {searchResult.selectedState}</p>
          <p><strong>City:</strong> {searchResult.selectedCity}</p>
        </div>
      )}
    </div>
  );
}
