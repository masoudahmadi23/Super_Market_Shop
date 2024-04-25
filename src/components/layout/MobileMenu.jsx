import React from "react";

import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={styles.all_menu}>
      <div
        className={`${styles.menu} ${isOpen ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className={styles.menuItems} onClick={() => setIsOpen(!isOpen)}>
          <Link to="/">
            <li>صفحه اصلی</li>
          </Link>
          <Link to="/shop">
            <li>فروشگاه</li>
          </Link>
          <Link to="/contactus">
            <li>تماس با ما</li>
          </Link>
          <Link to="/about">
            <li>درباره ما</li>
          </Link>
          <Link to="/login">
            <li>ثبت نام / ورود</li>
          </Link>
          <Link to="/favorit">
            <li>علاقه مندی ها</li>
          </Link>
        </ul>
      </div>
      <div className={styles.close}>X</div>
    </div>
  );
}

export default MobileMenu;
