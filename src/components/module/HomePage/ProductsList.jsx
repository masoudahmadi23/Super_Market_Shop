import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Cart from "../CartProduct/Cart";

import styles from "./ProductsList.module.css";

function ProductsList({ eightProducts }) {
  return (
    <div>
      <div className={styles.space}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            پرفروش ترین <span>محصولات</span>
          </h2>
          <Link to="/shop">همه محصولات</Link>
        </div>
        <Swiper
          slidesPerView={window.innerWidth > 768 ? 3 : 1}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          loop={true}
          pagination={{ clickable: true }}
          grabCursor={true}
        >
          {eightProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={styles.product_hm}>
                <Cart product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductsList;
