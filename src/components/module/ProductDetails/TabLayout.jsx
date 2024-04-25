import React, { useState } from "react";
import styles from "./TabLayout.module.css";
import CustomerReviews from "./CustomerReviews";

function TabLayout({ details, productId }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <button
          className={activeTab === "tab1" ? styles.active : ""}
          onClick={() => handleTabClick("tab1")}
        >
          توضیحات
        </button>
        <button
          className={activeTab === "tab2" ? styles.active : ""}
          onClick={() => handleTabClick("tab2")}
        >
          نظرات
        </button>
        <button
          className={activeTab === "tab3" ? styles.active : ""}
          onClick={() => handleTabClick("tab3")}
        >
          ارسال و بازگردانی
        </button>
      </div>
      <div className={styles.tab_content}>
        {activeTab === "tab1" && <div className={styles.tabss}>{details}</div>}
        {activeTab === "tab2" && (
          <div>
            <CustomerReviews productId={productId} />
          </div>
        )}
        {activeTab === "tab3" && (
          <div className={styles.tabss}>
            <h3>حمل و نقل</h3>
            <p>
              همه زمان های تخمینی ارسال علاوه بر زمان های تکمیل است، برای سفارش
              هایی که قبل از ساعت ۶:۳۰ بعدازظهر انجام می شوند، یک روز کاری بعدی
              تحویل می دهیم. از دوشنبه تا جمعه. سفارش هایی که بعد از این ارسال
              می شوند، ظرف دو روز کاری تحویل داده می شوند. این شامل شنبه، یکشنبه
              و تعطیلات نمی شود. انتصاب مسئولیتی در قبال هیچ گونه گمرک/عبور
              مربوط به سفارشات بین المللی ندارد. ما نمی توانیم هزینه ها را قبل
              از تحویل سفارش شما محاسبه کنیم، و توصیه می کنیم برای اطلاعات بیشتر
              با اداره گمرک محلی خود تماس بگیرید. در صورت امتناع از این هزینه
              ها، هزینه های حمل و نقل مسترد نخواهد شد.
            </p>
            <ul>
              <li>ارسال رایگان بالای ۵۰۰ تومان</li>
              <li>اروپا ۱ – ۳ روز رایگان</li>
              <li>ایالات متحده ۴ تا ۶ روز رایگان</li>
              <li>آسیا ۳ – ۶ روز رایگان</li>
              <li>آفریقا ۵ تا ۷ روز رایگان</li>
              <li>استرالیا ۳ تا ۵ روز رایگان</li>
            </ul>
            <h3>بازگشت و بازپرداخت</h3>
            <p>
              ما یک خط مشی بازگشت ۱۴ روزه داریم، به این معنی که شما ۱۴ روز پس از
              دریافت کالای خود فرصت دارید تا درخواست بازگشت بدهید، برای واجد
              شرایط بودن برای بازگرداندن، کالای شما باید در همان شرایطی باشد که
              آن را دریافت کرده اید، استفاده نشده و در اصل آن باشد. بسته بندی.
              همچنین به تأیید سفارش، شماره سفارش یا مدرک خرید نیاز دارید. پس از
              دریافت و بازرسی بازگشت شما، به شما اطلاع می دهیم و به شما اطلاع می
              دهیم که آیا بازپرداخت تأیید شده است یا خیر. در صورت تایید، به صورت
              خودکار از طریق روش پرداخت اصلی به شما بازپرداخت می شود. لطفاً به
              یاد داشته باشید که پردازش و ارسال بازپرداخت بانک یا شرکت کارت
              اعتباری شما نیز ممکن است کمی طول بکشد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabLayout;
