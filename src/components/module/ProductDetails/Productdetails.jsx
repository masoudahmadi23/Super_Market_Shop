import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContextProvider";
import { MdHome } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useCart } from "../../../context/CartContextProvider";
import { productQuantity } from "../../../helper/function";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Productdetails.module.css";
import ProductStarRating from "../Rating/ProductStarRating";
import TabLayout from "./TabLayout";

function Productdetails() {
  const [favorit, setFavorit] = useState(false);
  const { id } = useParams();
  const allProducts = useContext(ProductsContext);
  const product = allProducts.find((product) => product.id === id);
  const [state, dispatch] = useCart();
  console.log(state);
  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: product });
    setFavorit(!favorit);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div>
      <div className={styles.Breadcrumb}>
        <div className={styles.content}>
          <div className={styles.righter}>
            <h1>{product.product}</h1>
          </div>
          <div className={styles.lefter}>
            <Link to="/">
              <MdHome id={styles.homeicon} />
            </Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <Link to="/shop">محصولات</Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <Link>{product.categori}</Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <Link>{product.product}</Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.details_right}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.details_left}>
          <div className={styles.postin}>
            <div className={styles.cntc_rat}>
              <h1>{product.product}</h1>
              <ProductStarRating rating={product.rating} />
              (امتیاز کاربران)
            </div>
            <div>
              <p className={styles.price}>
                {product.price.toLocaleString()} تومان
              </p>
              <p className={styles.details}>{product.details}</p>
            </div>
            <div className={styles.shop}>
              <div className={styles.number_purchases}>
                {quantity === 0 ? (
                  <button
                    id={styles.add_bttn}
                    onClick={() => clickHandler("ADD_ITEM")}
                  >
                    <TbShoppingBagCheck
                      style={{ fontSize: "23px", verticalAlign: "middle" }}
                    />
                    افزودن به سبد خرید
                  </button>
                ) : (
                  <button
                    onClick={() => clickHandler("INCREASE")}
                    style={{ fontSize: "19px" }}
                  >
                    +
                  </button>
                )}
                {!!quantity && <span>{quantity}</span>}
                {quantity === 1 && (
                  <button
                    style={{ padding: "5px" }}
                    onClick={() => clickHandler("REMOVE_ITEM")}
                  >
                    <MdDeleteOutline
                      style={{ fontSize: "19px", verticalAlign: "middle" }}
                    />
                  </button>
                )}
                {quantity > 1 && (
                  <button
                    onClick={() => clickHandler("DECREASE")}
                    style={{ fontSize: "19px" }}
                  >
                    -
                  </button>
                )}
              </div>
              <div className={styles.bttn}>
                <button
                  style={{ border: "none", cursor: "pointer" }}
                  id={styles.bttn_heart}
                  onClick={() =>
                    clickHandler(
                      favorit ? "ADD_TO_FAVORITES" : "REMOVE_FROM_FAVORITES"
                    )
                  }
                >
                  <FaRegHeart />
                </button>
              </div>
            </div>
            <div className={styles.list_service}>
              <ul>
                <li>
                  <FaCheck id={styles.icn_check} />
                  ارسال رایگان برای سفارش های بالای ۱۰۰ تومان
                </li>
                <li>
                  <FaCheck id={styles.icn_check} />
                  ۲۱ روز بازپرداخت و بازگشت آسان
                </li>
                <li>
                  <FaCheck id={styles.icn_check} />
                  محصول دارای مالیات و عوارض گمرکی نیست
                </li>
              </ul>
            </div>
            <div className={styles.social}>
              <p>اشتراک گذاری:</p>
              <Link to="https://www.facebook.com/">
                <FaFacebookF />
              </Link>
              <Link to="https://twitter.com/">
                <FaXTwitter />
              </Link>
              <Link to="https://www.pinterest.com/">
                <FaPinterest />
              </Link>
              <Link to="https://www.whatsapp.com/">
                <FaWhatsapp />
              </Link>
              <Link to="mailto:masoud23ahmadi@gmail.com">
                <MdEmail />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TabLayout details={product.details} productId={product.id} />
    </div>
  );
}

export default Productdetails;
