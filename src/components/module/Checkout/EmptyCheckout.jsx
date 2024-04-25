import React from "react";
import { Link } from "react-router-dom";
import styles from "./EmptyCheckout.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

function EmptyCheckout() {
  return (
    <div>
      <div className={styles.Breadcrumb}>
        <div className={styles.content}>
          <div className={styles.righter}>
            <h1>سبد خرید</h1>
          </div>
          <div className={styles.lefter}>
            <Link to="/">
              <MdHome id={styles.homeicon} />
            </Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <p>سبد خرید</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.details}>
          <TiShoppingCart />
          <h2>سبد خرید شما خالی است!</h2>
          <p>زمان اون رسیده که خریدتون رو شروع کنید</p>
          <Link to="/shop">فروشگاه</Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCheckout;
