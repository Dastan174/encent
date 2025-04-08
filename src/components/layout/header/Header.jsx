import React from "react";
import styles from "./header.module.css";
import logo from "../../../assets/d150aa0f5d84b468ec611096b7781c10.png";
import { nav, navIcon } from "../../../constants/common";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className="container">
        <div className={styles.mainContainer}>
          <img src={logo} alt="logo" />
          <nav className={styles.nav}>
            {nav.map((el, idx) => (
              <Link to={el.path}>
                <p className={styles.link}>{el.name}</p>
              </Link>
            ))}
          </nav>
          <nav className={styles.nav}>
            {navIcon.map((el, idx) => (
              <Link to={el.path}>
                <span className={styles.link}>{el.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
