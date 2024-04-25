import React from "react";

import { Link } from "react-router-dom";

import styles from "./DiscountCategory.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function DiscountCategory() {
  return (
    <div>
      <div className={styles.space_up}></div>
      <div className={styles.container}>
        <div className={styles.right_categories}>
          <div className={styles.up_categori_right}>
            <div className={styles.bg_categori_1}>
              <div className={styles.cz_title_content}>
                <h4>تخفیف ٥٠٪</h4>
                <h3>سس ها</h3>
              </div>
            </div>
            <div className={styles.bg_categori_2}>
              <div className={styles.cz_wpe_content}>
                <h4>
                  <span>تخفیف ٥٠٪</span>
                </h4>
                <h3>تنقلات</h3>
              </div>
            </div>
          </div>
          <div className={styles.down_categori_right}>
            <div className={styles.bg_categori_3}>
              <div className={styles.element_populated}>
                <div className={styles.widget_container}>
                  <h4>تخفیف ٥۸٪</h4>
                  <h3>
                    تخفیف ویژه ٥٨٪
                    <br />
                    روی تمامی میوه ها
                  </h3>
                </div>
                <div>
                  <Link to="#" className={styles.cz_btn}>
                    الان بخرید
                    <FaArrowLeftLong id={styles.icon_left} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.left_categori}>
          <div className={styles.left_categori_contents}>
            <div className={styles.left_categori_bg}>
              <div>
                <div className={styles.cz_title_content}>
                  <h4>تخفیف ٥٠٪</h4>
                  <h3>سبزیجات تازه و با کیفیت</h3>
                </div>
                <div>
                  <Link className={styles.btn_left}>
                    الان بخرید
                    <FaArrowLeftLong id={styles.icon_left} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountCategory;
