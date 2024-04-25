import BannerHome from "../module/HomePage/BannerHome";
import ServicesBox from "../module/HomePage/ServicesBox";
import DiscountCategory from "../module/HomePage/DiscountCategory";
import { useContext } from "react";
import {
  CategoriesContext,
  ProductsContext,
} from "../../context/ProductsContextProvider";
import CategoriesHome from "../module/HomePage/CategoriesHome";
import ProductsList from "../module/HomePage/ProductsList";
import BannerDown from "../module/HomePage/BannerDown";

function HomePage() {
  const allCategories = useContext(CategoriesContext);
  const allProducts = useContext(ProductsContext);

  const eightProducts = allProducts.slice(0, 6);
  return (
    <div>
      <BannerHome />
      <ServicesBox />
      <DiscountCategory />
      <CategoriesHome allCategories={allCategories} />
      <ProductsList eightProducts={eightProducts} />
      <BannerDown />
    </div>
  );
}

export default HomePage;
