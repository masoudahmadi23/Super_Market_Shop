import React from "react";
import ContactLink from "../module/ContactPage/ContactLink";
import styles from "./Checkout.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import FormContact from "../module/ContactPage/FormContact";
function ContactPage() {
  return (
    <div>
      <div className={styles.Breadcrumb}>
        <div className={styles.content}>
          <div className={styles.righter}>
            <h1>تماس با ما</h1>
          </div>
          <div className={styles.lefter}>
            <Link to="/">
              <MdHome id={styles.homeicon} />
            </Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <p>تماس با ما</p>
          </div>
        </div>
      </div>
      <ContactLink />
      <div className={styles.container}>
        <FormContact />
      </div>
    </div>
  );
}

export default ContactPage;
