import React from "react";
import { Link } from "react-router-dom";
import CheckoutDetails from "../module/Checkout/CheckoutDetails";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import styles from "./Checkout.module.css";
import { useCart } from "../../context/CartContextProvider";
import EmptyCheckout from "../module/Checkout/EmptyCheckout";
import BasketPriceBox from "../module/Checkout/BasketPriceBox";
function Checkout() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return <EmptyCheckout />;
  }

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
      <CheckoutDetails data={state.selectedItem} clickHandler={clickHandler} />
      <BasketPriceBox state={state} clickHandler={clickHandler} />
    </div>
  );
}

export default Checkout;
