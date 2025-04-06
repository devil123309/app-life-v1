import React, { useState, useEffect } from "react";
import bloodDonation from "./images/12333333-removebg.png";
import styles from "./patient.module.css";
import statesAndCities from "../data/statesAndCities.js"; // Your structured data file

const Patient = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      const stateData = statesAndCities.find(
        (state) => state.name === selectedState
      );
      setCities(stateData ? stateData.cities : []);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <div className={styles.classContainer}>
      <form className={styles.classContainerLeft}>
        <div className={styles.classContainerTitle}>
          <h1>Blood Details</h1>
          <hr />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.classContainerInputs}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.classContainerInputs}
        />

        {/* Blood Group Dropdown */}
        <select
          name="blood"
          className={styles.classContainerInputs}
          required
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <input
          type="number"
          name="phonenumber"
          placeholder="Your Phone Number"
          className={styles.classContainerInputs}
        />

        <input
          type="text"
          name="country"
          placeholder="Your Country"
          className={styles.classContainerInputs}
        />

    
        <select
          name="state"
          className={styles.classContainerInputs}
          onChange={(e) => setSelectedState(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {statesAndCities.map((state) => (
            <option key={state.name} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

     
        <select
          name="city"
          className={styles.classContainerInputs}
          required
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>

      <div className={styles.classContainerRight}>
        <img src={bloodDonation} alt="Blood Donation" />
      </div>
    </div>
  );
};

export default Patient;
