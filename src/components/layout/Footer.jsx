import React from "react";
import { Link } from "react-router-dom";

import logofooter from "../../assets/images/logo-sm (1).png";
import shopCart from "../../assets/images/22.png";

import { IoMdMailOpen } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <footer>
        <div className={styles.membership}>
          <div className={styles.membership_right}>
            <h2>
              در <span>خبر نامه ویژه ما</span> عضو شوید
            </h2>
          </div>
          <div className={styles.membership_left}>
            <div className={styles.inp_bttn}>
              <input type="email" placeholder="ایمیل خود را وارد کنید" />
              <button>
                <IoMdMailOpen className={styles.icone_email} />
                عضویت
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cz_middle_footer}>
          <div className={styles.row}>
            <div className={styles.sidebar_footer}>
              <div className={styles.footer_widget}>
                <div className={styles.tar}>
                  <img src={logofooter} alt="logofooter" />
                  <div>
                    "سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که
                    مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف
                    سرویس است."
                  </div>
                  <div className={styles.icon_footer}>
                    <Link to="">
                      <FaInstagram />
                    </Link>
                    <Link to="">
                      <FaTwitter />
                    </Link>
                    <Link to="">
                      <FaFacebook />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sidebar_footer} id={styles.cz_footer}>
              <div className={styles.footer_widget}>
                <h4 id={styles.h4_footer}>لینک های مفید</h4>
                <div>
                  <div>
                    <Link
                      className={styles.footer_widget_2}
                      to="tel:+989356859666"
                    >
                      <IoIosLink />
                      09356859666
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.footer_widget_2}
                      to="https://github.com/masoudahmadi23"
                    >
                      <IoIosLink />
                      گیت هاب
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.footer_widget_2}
                      to="https://t.me/masoudahmaddi"
                    >
                      <IoIosLink />
                      تلگرام
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.footer_widget_2}
                      to="mailto:masoud23ahmadi@gmail.com"
                    >
                      <IoIosLink />
                      masoud23ahmadi@gmail.com
                    </Link>
                  </div>
                  <div>
                    <Link
                      className={styles.footer_widget_2}
                      to="https://wa.me/989356859666"
                    >
                      <IoIosLink />
                      واتساپ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sidebar_footer}>
              <div className={styles.footer_widget}>
                <div className={styles.tac}>
                  <div className={styles.footer_widget_3}>
                    <h4>
                      آیا علاقمند به داشتن <br />
                      <span>سوپر مارکت هستید؟</span>
                    </h4>
                    <br />
                    <p>
                      اندازه سوپرمارکت‌ها معمولاً از خواربارفروشیهای سنتی
                      بزرگترند و محصولات بیشتری می‌فروشند.
                    </p>
                  </div>
                  <div className={styles.footer_bttn}>
                    <Link>
                      <p>فروشنده شوید</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_2}>
          <div className={styles.footer_2_row}>
            <div className={styles.footer_2_widget}>
              <div>
                <p>
                  ساخته شده با ❤️ |{" "}
                  <Link to="https://github.com/masoudahmadi23">مسعود </Link>
                </p>
              </div>
              <div>
                <img id={styles.footrimg} src={shopCart} alt="shopcart" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <IoIosArrowUp className={styles.scrollToTopIcon} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
