import React from "react";
import about from "../../../assets/images/about.jpg";
import styles from "./AboutUs.module.css";
function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <img src={about} alt="" />
      </div>
      <div className={styles.left}>
        <h3>
          درباره <span>سوپرمارکت ما</span>
        </h3>
        <p>
          سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش
          محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است. در حدود ۷۵ تا
          ۹۰ درصد کالاهای این مغازه‌ها محصولات غذایی هستند. اندازه سوپرمارکت‌ها
          معمولاً از خواربارفروشیهای سنتی بزرگترند و محصولات بیشتری می‌فروشند
          ولی از هایپرمارکت‌ها و سوپرسنترها کوچکترند
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
