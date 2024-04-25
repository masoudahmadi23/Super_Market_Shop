import React from "react";
import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";
import FavoritList from "../module/Favorit/FavoritList";
import { useCart } from "../../context/CartContextProvider";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
function Favorit() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      <div className={styles.Breadcrumb}>
        <div className={styles.content}>
          <div className={styles.righter}>
            <h1>علاقه مندی ها</h1>
          </div>
          <div className={styles.lefter}>
            <Link to="/">
              <MdHome id={styles.homeicon} />
            </Link>
            <FaArrowLeftLong id={styles.arrowicon} />
            <p>علاقه مندی ها</p>
          </div>
        </div>
      </div>
      <FavoritList data={state.favorites} clickHandler={clickHandler} />;
    </div>
  );
}

export default Favorit;
