import React from "react";
import styles from "./BasketPriceBox.module.css";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

function BasketPriceBox({ state, clickHandler }) {
  console.log(state.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <TbChecklist className={styles.icon} />
        <p className={styles.text}>جمع قیمت: </p>
        <span className={styles.value}> {state.total} تومان</span>
      </div>
      <div className={styles.item}>
        <FaHashtag className={styles.icon} />
        <p className={styles.text}>تعداد محصولات: </p>
        <span className={styles.value}> {state.itemsCounter}</span>
      </div>
      <div className={styles.item}>
        <BsPatchCheck className={styles.icon} />
        <p className={styles.text}>وضعیت: </p>
        <span className={styles.value}>
          {!state.checkout && "در حال خرید ..."}
        </span>
      </div>
      <button
        className={styles.button}
        onClick={() => clickHandler("CHECKOUT")}
      >
        تکمیل خرید
      </button>
    </div>
  );
}

export default BasketPriceBox;
