import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles.container}>
      <TbError404 />
      <h2>چطور اینجا اومدی؟! باحاله ما به شما کمک خواهیم کرد.</h2>
      <Link to="/">صفحه اصلی</Link>
    </div>
  );
}

export default PageNotFound;
