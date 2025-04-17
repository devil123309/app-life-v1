import React, { useState, useEffect } from "react";
import bloodDonation from "./images/registration.png";
import styles from "./patient.module.css";
import statesAndCities from "../data/statesAndCities.js";

const Patient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodType: "",
    phone: "",
    country: "",
    state: "",
    city: "",
  });

  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Update cities when state changes
  useEffect(() => {
    const selectedState = formData.state;
    if (selectedState) {
      const stateData = statesAndCities.find(
        (state) => state.name === selectedState
      );
      setCities(stateData ? stateData.cities : []);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  // WebSocket connection (optional)
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("📢 WebSocket message received:", data);
      // You can set this to state or display a toast here
    };

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected");
    };

    return () => socket.close();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, bloodType, phone, state, city } = formData;
    if (!name || !email || !bloodType || !phone || !state || !city) {
      setError("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:3001/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("🎉 Donor registered successfully!");
        setFormData({
          name: "",
          email: "",
          bloodType: "",
          phone: "",
          country: "",
          state: "",
          city: "",
        });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className={styles.classContainer}>
      <form className={styles.classContainerLeft} onSubmit={handleSubmit}>
        <div className={styles.classContainerTitle}>
          <h1>Blood Donor Registration</h1>
          <hr />
        </div>

        {message && <p className={styles.success}>{message}</p>}
        {error && <p className={styles.error}>{error}</p>}

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          className={styles.classContainerInputs}
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          className={styles.classContainerInputs}
        />

        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
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
          name="phone"
          value={formData.phone}
          placeholder="Your Phone Number"
          onChange={handleChange}
          className={styles.classContainerInputs}
          required
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          placeholder="Your Country"
          onChange={handleChange}
          className={styles.classContainerInputs}
        />

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={styles.classContainerInputs}
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
          value={formData.city}
          onChange={handleChange}
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
