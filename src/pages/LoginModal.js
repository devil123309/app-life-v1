import React, { useState } from "react";
import styles from "./LoginModal.module.css"; // ✅ Correct Import

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.container}>
      <div className="bg"></div>
      
      <div className={`${styles.signUp} ${isSignUp ? styles.active : ""}`}>
        <form>
          <h1 className={styles.hi}>Create Account</h1> {/* Ensure class is used */}
          <div className={styles.icons}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
          </div>
          <span>or use email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className={`${styles.signIn} ${isSignUp ? "" : styles.active}`}>
        <form>
          <h1 className={styles.hi}>Sign In</h1> {/* Ensure class is used */}
          <div className={styles.icons}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
          </div>
          <span>or use email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot password?</a>
          <br />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
