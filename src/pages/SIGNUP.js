import React, { useState } from "react";
import styles from "./LoginModal.module.css"; // ✅ Correct Import
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); 

  return (
    <div className={styles.container}>
      <div className="bg"></div>
      
      <div className={`${styles.signUp} ${isSignUp ? styles.active : ""}`}>
        <form>
          <h1 className={styles.hi}>SIGN IN</h1> {/* Ensure class is used */}
          <div className={styles.icons}>
            <a To="#" className={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
          </div>
          <span>or use email for registration</span>
          <input type="Name" placeholder="Name" />
           <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="confirm password" placeholder="confirm password" />
          <button>Sign in</button>
          
        </form>
      </div>
  </div>
  );
};

export default Login;
