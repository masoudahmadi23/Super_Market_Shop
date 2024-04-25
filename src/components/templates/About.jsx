import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../module/About/AboutUs";
import styles from "./Checkout.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
function About() {
  return (
    <div>
      <div className={styles.Breadcrumb}>
        <div className={styles.content}>
          <div className={styles.righter}>
            <h1>درباره ما</h1>
          </div>
          <div className={styles.lefter}>
            <Link to="/">
              <MdHome id={styles.homeicon} />
            </Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <p>درباره ما</p>
          </div>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default About;
