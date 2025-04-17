import React, { useState } from "react";
import styles from "./LoginModal.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if both fields are filled
    if (!email || !password) {
      alert("Please fill in both fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (res.data?.message === "Login successful") {
        alert("Login successful!");
        navigate("/"); // Navigate to the home page or a protected route
      } else {
        alert(res.data?.message || "Invalid email or password");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Please try again.";
      alert(message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.signUp} ${styles.active}`}>
        <form onSubmit={handleLogin}>
          <h1 className={styles.hi}>SIGN IN</h1>
          <div className={styles.icons}>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fa-brands fa-github"></i>
            </a>
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
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{
                cursor: "pointer",
                color: "#007bff",
                textDecoration: "underline",
              }}
            >
              <br />
              Create Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
