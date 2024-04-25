import React from "react";

import icon_1 from "../../../assets/images/icon-1.png";
import icon_2 from "../../../assets/images/icon-2.png";
import icon_3 from "../../../assets/images/icon-3.png";

import styles from "./ServicesBox.module.css";

function ServicesBox() {
  return (
    <div>
      <div>
        <div className={styles.servicesbox}>
          <div className={styles.box_widget}>
            <div className={styles.services_widget}>
              <img src={icon_1} alt="" />
              <div className={styles.widget_content}>
                <p>حمل و نقل رایگان</p>
                <span>تا ۵۰۰.۰۰۰ تومان</span>
              </div>
            </div>
            <div className={styles.services_widget}>
              <img src={icon_2} alt="" />
              <div className={styles.widget_content}>
                <p>استرداد رایگان</p>
                <span>تا ۳ روز پس از خرید</span>
              </div>
            </div>
            <div className={styles.services_widget}>
              <img src={icon_3} alt="" />
              <div className={styles.widget_content}>
                <p>پرداخت امن</p>
                <span>پرداختی امن ١٠٠٪</span>
              </div>
            </div>
            <div className={styles.services_widget}>
              <img src={icon_2} alt="" />
              <div className={styles.widget_content}>
                <p> ٢٤/٧ پشتیبانی</p>
                <span>با ما تماس بگیرید</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBox;
