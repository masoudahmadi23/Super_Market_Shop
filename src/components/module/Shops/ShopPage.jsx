import React, { useContext } from "react";
import ProductPaginate from "./ProductPaginate.jsx";
import styles from "./ShopPage.module.css";
import FilterPrice from "./FilterPrice.jsx";
import CtegotiSidebar from "./CtegotiSidebar.jsx";

import {
  ProductsContext,
  CategoriesContext,
} from "../../../context/ProductsContextProvider.jsx";

function ShopPage() {
  const allProducts = useContext(ProductsContext);
  const allCategories = useContext(CategoriesContext);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.right_products}>
          <ProductPaginate />
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebar_container}>
            <FilterPrice products={allProducts} />

            <CtegotiSidebar categories={allCategories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
