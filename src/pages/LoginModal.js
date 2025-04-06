import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data.message === "Login successful") {
          alert("Login successful!");
          navigate("/dashboard"); // or wherever you want
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed");
      });
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.signUp} ${styles.active}`}>
        <form onSubmit={handleLogin}>
          <h1 className={styles.hi}>SIGN IN</h1>
          <div className={styles.icons}>
                      <a href="#" className={styles.icon}><i className="fa-brands fa-facebook"></i></a>
                      <a href="#" className={styles.icon}><i className="fa-brands fa-instagram"></i></a>
                      <a href="#" className={styles.icon}><i className="fa-brands fa-google"></i></a>
                      <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
                    </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign in</button>
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
            >
              <br></br>
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
