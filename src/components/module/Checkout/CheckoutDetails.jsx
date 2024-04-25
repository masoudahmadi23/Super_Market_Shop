import React from "react";
import styles from "./CheckoutDetails.module.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function CheckoutDetails({ data, clickHandler }) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع جزء</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>
                <button
                  style={{
                    color: "red",
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                  }}
                  onClick={() => clickHandler("REMOVE_ITEM", product)}
                >
                  X
                </button>
              </td>
              <td>
                <Link>
                  <img
                    style={{ width: "40px" }}
                    src={product.image}
                    alt="عکس-محصول"
                  />
                </Link>
              </td>
              <td>
                <Link>{product.product}</Link>
              </td>
              <td>
                <span>{product.price.toLocaleString()} تومان</span>
              </td>
              <td>
                <button
                  className={styles.button}
                  style={{ fontSize: "19px" }}
                  onClick={() => clickHandler("INCREASE", product)}
                >
                  +
                </button>
                <span>{product.quantity}</span>
                {product.quantity === 1 && (
                  <button
                    className={styles.button}
                    style={{ padding: "5px" }}
                    onClick={() => clickHandler("REMOVE_ITEM", product)}
                  >
                    <MdDeleteOutline
                      style={{
                        fontSize: "19px",
                        verticalAlign: "middle",
                      }}
                    />
                  </button>
                )}
                {product.quantity > 1 && (
                  <button
                    className={styles.button}
                    style={{ fontSize: "19px" }}
                    onClick={() => clickHandler("DECREASE", product)}
                  >
                    -
                  </button>
                )}
              </td>
              <td>{product.quantity * product.price} تومان</td>
            </tr>
          ))}
          <tr>
            <td className={styles.td_down} colSpan={6}>
              <div className={styles.bttn_shop}>
                <Link to="/shop">ادامه خرید</Link>
              </div>
              <div className={styles.discount}>
                <input type="text" placeholder="کد تخفیف" />
                <button>اعمال کد تخفیف</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutDetails;
