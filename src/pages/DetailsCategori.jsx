import React, { useContext } from "react";
import CategoriPage from "../components/module/CategoriDetails/CategoriPage";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContextProvider";

function DetailsCategori() {
  const { id } = useParams();
  const allProducts = useContext(ProductsContext);
  const filterCategori = allProducts.filter(
    (product) => product.categori === id
  );

  return <CategoriPage filterCategori={filterCategori} />;
}

export default DetailsCategori;
