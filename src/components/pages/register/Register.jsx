import React, { useState } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";

const Register = () => {
  const [isHidePassword, setIsHidePassword] = useState(false);

  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.mainContainer}>
          <h2>Register</h2>
          <div className={styles.auth}>
            <div className={styles.inputsContainer}>
              <h4>USERNAME</h4>
              <input type="email" placeholder="email" />
            </div>
            <div className={styles.inputsContainer}>
              <h4>PASSWORD</h4>
              <input
                type={isHidePassword ? "password" : "email"}
                placeholder="email"
              />
              <span
                onClick={() => setIsHidePassword(!isHidePassword)}
                className={styles.eye}
              >
                {isHidePassword ? <LuEyeClosed /> : <LuEye />}
              </span>
            </div>
            <button>Create account</button>
          </div>
          <div className={styles.helper}>
            <p>Not a seller?</p>
            <Link to="/login">
              <p>Log In as a User and start shopping!</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
