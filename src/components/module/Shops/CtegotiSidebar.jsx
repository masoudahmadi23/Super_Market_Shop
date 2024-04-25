import React from "react";

import styles from "./CtegotiSidebar.module.css";
import { Link } from "react-router-dom";
function CtegotiSidebar({ categories }) {
  return (
    <div className={styles.container}>
      <h2>دسته بندی محصولات</h2>
      {categories.map((categori) => (
        <ul key={categori.id}>
          <Link to={`/categori/${categori.categori}`}>
            <li>{categori.categori}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default CtegotiSidebar;
