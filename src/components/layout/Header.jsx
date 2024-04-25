import React, { useEffect, useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import styles from "./Header.module.css";
import logo from "../../assets/images/logo-sm.png";
import { Link } from "react-router-dom";
import axios from "axios";
import MobileMenu from "./MobileMenu";
import { useCart } from "../../context/CartContextProvider";

function Header() {
  const [state] = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [serch, setSearch] = useState("");
  const searchHandlre = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://shop-server-red.vercel.app/products"
        );
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const closeMenu = () => {
      setIsOpen(false);
    };

    // اضافه کردن یک event listener برای کلیک بر روی بخش‌های دیگری از صفحه
    document.addEventListener("click", closeMenu);

    // حذف event listener در هنگام از بین رفتن کامپوننت
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const filterData = allProducts.filter((product) => {
    return product.product.includes(serch);
  });

  const toggleMenu = (e) => {
    e.stopPropagation(); // جلوگیری از انتقال رویداد به اجزای پدری
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <div className={styles.mobile_header}>
          <Link to="/">
            <img className={styles.logo_mobile} src={logo} alt="لوگو" />
          </Link>
          <div className={styles.left_mobile}>
            <Link to="/checkout">
              <div className={styles.shop_icon}>
                <FaShoppingBasket />
                {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
              </div>
            </Link>
            <div className={styles.menu_mobile} onClick={toggleMenu}>
              <IoMenu />
            </div>
          </div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.container}>
            <div className={styles.right_header}>
              <Link to="/">
                <img src={logo} alt="لوگو" />
              </Link>
              <div className={styles.border}></div>
              <div className={styles.searchbox}>
                <input
                  type="text"
                  placeholder="دنبال چه محصولی هستید؟"
                  onChange={searchHandlre}
                  value={serch}
                />
                <div className={styles.serchitem}>
                  {!!serch
                    ? filterData.map((item, index) => {
                        return (
                          <Link to={`/product/${item.id}`}>
                            <p key={index}>{item.product}</p>
                          </Link>
                        );
                      })
                    : null}
                </div>
              </div>
              <button>
                <IoSearchOutline className={styles.icon} />
              </button>
            </div>
            <div className={styles.left_header}>
              <Link to="tel:+9822334455">
                <div className={styles.phone_icon}>
                  <FaPhoneVolume />
                </div>
                <div className={styles.contact_head}>
                  <p>شماره تماس</p>
                  <span>٥٥ ٤٤ ٣٣ ٢٢ ٩۸+</span>
                </div>
              </Link>
              <Link to="/checkout">
                <div className={styles.shop_icon}>
                  <FaShoppingBasket />
                  {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                </div>
              </Link>
              <div className={styles.border}></div>
              <Link to="/favorit">
                <div className={styles.forvrite_icon}>
                  <FaRegHeart />
                </div>
              </Link>
              <Link to="/login">
                <div className={styles.forvrite_icon}>
                  <FaRegUser />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menu_item}>
            <nav>
              <ul className={styles.menu_row}>
                <Link to="/">
                  <li>صفحه اصلی</li>
                </Link>
                <Link to="/shop">
                  <li>فروشگاه</li>
                </Link>
                <Link to="/contactus">
                  <li>تماس با ما</li>
                </Link>
                <Link to="/about">
                  <li>درباره ما</li>
                </Link>
                <div className={styles.dropdown}>
                  <button className={styles.dropbtn}>دسته بندی محصولات</button>
                  <div className={styles.dropdown_content}>
                    <Link to="/categori/ماهی و آبزیان">ماهی و آبزیان</Link>
                    <Link to="/categori/میوه و سبزیجات">میوه و سبزیجات</Link>
                    <Link to="/categori/شوینده و نظافتی">شوینده و نظافتی</Link>
                  </div>
                </div>
                <Link>
                  <li>وبلاگ</li>
                </Link>
              </ul>
            </nav>
            <button id={styles.bttn}>تخفیفات روزانه</button>
          </div>
        </div>
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </header>
    </div>
  );
}

export default Header;
