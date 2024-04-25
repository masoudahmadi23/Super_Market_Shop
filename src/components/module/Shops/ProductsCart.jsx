import React, { useState, useEffect } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./ProductsCart.module.css";
import { Link } from "react-router-dom";
import ProductStarRating from "../Rating/ProductStarRating";
import { useCart } from "../../../context/CartContextProvider";
import { productQuantity } from "../../../helper/function";

function ProductsCart(props) {
  const [showMessage, setShowMessage] = useState(false);

  const { product, image, price, id, rating } = props.product;
  const [userRating, setUserRating] = useState(rating);
  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: props.product });
    setShowMessage(true);
  };

  // استفاده از useEffect برای مخفی کردن پیام پس از 3 ثانیه
  useEffect(() => {
    let timer;
    if (showMessage) {
      // تنظیم تایمر برای مخفی کردن پیام پس از 3 ثانیه
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 4500);
    }

    // تابع cleanup برای پاک کردن تایمر اگر کامپوننت از DOM حذف شود
    return () => clearTimeout(timer);
  }, [showMessage]); // این Effect فقط زمانی اجرا می‌شود که showMessage تغییر کند.

  return (
    <div className={styles.product}>
      <div className={styles.image_product}>
        <Link to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <Link to={`/product/${id}`}>
        <h2>{product}</h2>
      </Link>
      <div className={styles.price_rate}>
        <span>{price.toLocaleString()} تومان</span>
        <div>
          <ProductStarRating
            rating={userRating}
            onRatingChange={handleRatingChange}
          />
        </div>
      </div>
      {showMessage && (
        <Link
          style={{
            color: "#01e281",
            display: "block",
            textAlign: "center",
            marginBottom: "15px",
          }}
          to="/checkout"
        >
          مشاهده سبد خرید
        </Link>
      )}
      <div className={styles.number_purchases}>
        {quantity === 0 ? (
          <button id={styles.add_bttn} onClick={() => clickHandler("ADD_ITEM")}>
            <TbShoppingBagCheck
              style={{ fontSize: "23px", verticalAlign: "middle" }}
            />
          </button>
        ) : (
          <button
            onClick={() => clickHandler("INCREASE")}
            style={{ fontSize: "20px" }}
          >
            +
          </button>
        )}
        {!!quantity && <span>{quantity}</span>}
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline
              style={{ fontSize: "23px", verticalAlign: "middle" }}
            />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("DECREASE")}
            style={{ fontSize: "20px" }}
          >
            -
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductsCart;
