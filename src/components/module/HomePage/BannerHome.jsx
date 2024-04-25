import React from "react";

import model from "../../../assets/images/model-1.png";
import styles from "./BannerHome.module.css";
import { Link } from "react-router-dom";
function BannerHome() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.banner_widget_right}>
            <div className={styles.widget_right}>
              <h2 id={styles.text_right_grn}>سوپر مارکت اکسترا</h2>
              <h2 id={styles.text_right_blc}>تازه تر از همه جا</h2>
              <p>
                سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری
                خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.
              </p>
              <div className={styles.cz_2_btn_right}>
                <div className={styles.bttn_1}>
                  <Link to="#">۲۵٪ تخفیف ویژه</Link>
                </div>
                <div className={styles.bttn_2}>
                  <Link to="/shop">مشاهده محصولات</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.widget_left}>
            <img src={model} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
