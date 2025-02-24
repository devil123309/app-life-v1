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
           <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button><br></br><br></br>
          <a style={{ color: '#888', fontSize: '14px', textDecoration: 'none' }}>Don't have an account?</a> <br />
          <a onClick={() => navigate("/SIGNUP")} style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'underline', cursor: 'pointer' }}onMouseEnter={(e) => e.target.style.color = '#0056b3'} onMouseLeave={(e) => e.target.style.color = '#007bff'}
>           Create Account</a> <br />
          
        </form>
      </div>
  </div>
  );
};

export default Login;
