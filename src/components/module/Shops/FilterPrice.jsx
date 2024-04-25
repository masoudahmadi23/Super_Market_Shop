import React, { useState } from "react";
import styles from "./FilterPrice.module.css";
import { Link } from "react-router-dom";

function FilterPrice({ products }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(
    Math.max(...products.map((product) => product.price))
  );

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
  return (
    <div className={styles.price_fliter_all}>
      <h2 id={styles.content}>فیلتر بر اساس قیمت</h2>
      <div className={styles["price-filter-container"]}>
        <div className={styles["price-filter"]}>
          <label>حداقل قیمت</label>
          <input
            type="range"
            min={0}
            max={Math.max(...products.map((product) => product.price))}
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <label>حداکثر قیمت</label>
          <input
            type="range"
            min={0}
            max={Math.max(...products.map((product) => product.price))}
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className={styles["price-range"]}>
          <span>{minPrice}</span>
          <span>-</span>
          <span>{maxPrice}</span>
        </div>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`}>
            <li key={product.id}>
              {product.product} - {product.price} تومان
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default FilterPrice;
