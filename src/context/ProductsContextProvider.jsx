import React, { createContext, useEffect, useState } from "react";

import { getProducts, getCategories } from "../services/api";

export const ProductsContext = createContext();
export const CategoriesContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
      setCategories(await getCategories());
    };
    fetchApi();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <CategoriesContext.Provider value={categories}>
        {children}
      </CategoriesContext.Provider>
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
