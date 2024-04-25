import React from "react";
import { Link } from "react-router-dom";
import styles from "./FavoritList.module.css";

function FavoritList({ data, clickHandler }) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>محصول</th>
            <th>قیمت</th>
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
                  onClick={() => clickHandler("REMOVE_FROM_FAVORITES", product)}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritList;
