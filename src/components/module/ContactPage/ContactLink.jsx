import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { IoMailOpen } from "react-icons/io5";
import styles from "./ContactLink.module.css";
import { Link } from "react-router-dom";
function ContactLink() {
  return (
    <div className={styles.container}>
      <div className={styles.ways}>
        <Link to="tel:+989356859666">
          <MdPhoneInTalk id={styles.phone} />
          <h4>تلفن تماس</h4>
          <p>09356859666</p>
        </Link>
      </div>
      <div className={styles.ways}>
        <Link to="https://github.com/masoudahmadi23">
          <FaGithub id={styles.git} />
          <h4>گیت هاب</h4>
          <p>کلیک کنید</p>
        </Link>
      </div>
      <div className={styles.ways}>
        <Link to="https://t.me/masoudahmaddi">
          <BsTelegram id={styles.telegram} />
          <h4>تلگرام</h4>
          <p>masoudahmaddi@</p>
        </Link>
      </div>
      <div className={styles.ways}>
        <Link to="mailto:masoud23ahmadi@gmail.com">
          <IoMailOpen id={styles.email} />
          <h4>ایمیل</h4>
          <p>masoud23ahmadi@gmail.com</p>
        </Link>
      </div>
    </div>
  );
}

export default ContactLink;
