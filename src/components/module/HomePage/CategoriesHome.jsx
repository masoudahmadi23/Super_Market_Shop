import React from "react";

import styles from "./CategoriesHome.module.css";
import { Link } from "react-router-dom";

function CategoriesHome({ allCategories }) {
  return (
    <div>
      <div className={styles.space}></div>
      <div className={styles.content}>
        <h2>
          دسته بندی <span> محصولات ما</span>
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.categoris}>
          {allCategories.map((categori) => {
            return (
              <div key={categori.categori} className={styles.categori}>
                <Link to={`/categori/${categori.categori}`}>
                  <div className={styles.box_categori}>
                    <div className={styles.img_ctg}>
                      <img src={categori.image_categori} alt="" />
                    </div>
                    <div className={styles.cntct_ctg}>
                      <h3>{categori.categori}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoriesHome;
