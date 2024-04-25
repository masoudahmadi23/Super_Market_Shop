import React, { useEffect } from "react";
import styles from "./CategoriPage.module.css";
import ProductsCart from "../Shops/ProductsCart";

function CategoriPage({ filterCategori }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      {filterCategori.map((product) => (
        <ProductsCart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CategoriPage;
