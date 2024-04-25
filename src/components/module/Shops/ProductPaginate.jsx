import React, { useContext, useState } from "react";

import ReactPaginate from "react-paginate";

import { ProductsContext } from "../../../context/ProductsContextProvider";
import ProductsCart from "./ProductsCart";

import styles from "./ProductPaginate.module.css";

function ProductPaginate() {
  const allProducts = useContext(ProductsContext);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = allProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <ProductsCart key={product.id} product={product} />);
  const pageCount = Math.ceil(allProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={styles.products}>
      {displayProducts}
      <div className={styles.panig}>
        <ReactPaginate
          previousLabel={<span>&#9664;</span>}
          nextLabel={<span>&#9654;</span>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.pagination}
          previousLinkClassName={styles.pagination__link}
          nextLinkClassName={styles.pagination__link}
          disabledClassName={styles.pagination__link__disabled}
          activeClassName={styles.pagination__link__active}
          pageLinkClassName={styles.pageNumber}
        />
      </div>
    </div>
  );
}

export default ProductPaginate;
