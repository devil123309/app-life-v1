import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Signup successful!");
        navigate("/login");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed!");
      });
  };

  return (
    <div className={styles.container}>
      <div className="bg"></div>

      <div className={`${styles.signUp} ${styles.active}`}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.hi}>SIGN UP</h1>
          <div className={styles.icons}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
          </div>
          <span>or use email for registration</span>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
