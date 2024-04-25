import React from "react";

import styles from "./BannerDown.module.css";

import mobile_image from "../../../assets/images/mobile.png";
import btn_1 from "../../../assets/images/btn-1.png";
import btn_2 from "../../../assets/images/btn2.png";
import { Link } from "react-router-dom";

function BannerDown() {
  return (
    <div>
      <div className={styles.space}></div>
      <div className={styles.container}>
        <div className={styles.bg_image}>
          <div className={styles.right_content}>
            <h2 id={styles.first_h2}>سوپر ماركت اكسترا</h2>
            <h2 id={styles.second_h2}>سفارش با موبایل</h2>
            <p>
              سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش
              محصولات را از قفسه برمی‌دارد.
            </p>
            <div className={styles.btn_content}>
              <Link>
                <img src={btn_1} alt="" />
              </Link>
              <Link>
                <img src={btn_2} alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.left_content}>
            <img src={mobile_image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.space}></div>
    </div>
  );
}

export default BannerDown;
