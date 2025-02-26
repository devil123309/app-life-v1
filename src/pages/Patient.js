import React, { PureComponent } from "react";
import bloodDonation from "./images/12333333-removebg.png";
import styles from "./patient.module.css";  

export default class Patient extends PureComponent {
  render() {
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
          <input
            type="text"
            name="blood"
            placeholder="Your Blood Group"
            className={styles.classContainerInputs}
          />
          <input
            type="number"
            name="phonenumber"
            placeholder="Your phonenumber"
            className={styles.classContainerInputs}
          />
          <input
            type="text"
            name="country"
            placeholder="Your country"
            className={styles.classContainerInputs}
          />
          <input
            type="text"
            name="state"
            placeholder="Your state"
            className={styles.classContainerInputs}
          />
          <input
            type="text"
            name="district"
            placeholder="Your district"
            className={styles.classContainerInputs}
          />
          <input
            type="text"
            name="city"
            placeholder="Your city"
            className={styles.classContainerInputs}
          />
          
          <button type='button'>submit</button>
        </form>
        
        <div className={styles.classContainerRight}>
          <img src={bloodDonation} alt="Blood Donation" />
        </div>
      </div>
    );
  }
}
