import React, {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  fetchProducts,
  fetchCategories
} from "../redux/productSlice";

import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import BrandFilter from "../components/BrandFilter";
import PriceFilter from "../components/PriceFilter";
import Pagination from "../components/Pagination";
import Header from "../components/header";

const ITEMS_PER_PAGE = 8;

const ProductListingPage = () => {

  const dispatch = useDispatch();

  const [showFilters, setShowFilters] =
    useState(true);

    const [searchText, setSearchText] =
  useState("");

  useEffect(() => {
  // optional reset to page 1
}, [searchText]);
  
  const {
    products,
    categories,
    loading
  } = useSelector(
    (state) => state.products
  );

  const filters = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const brands = useMemo(() => {

    return [
      ...new Set(
        products
          .map(
            (product) =>
              product.brand
          )
          .filter(Boolean)
      )
    ];

  }, [products]);

  const filteredProducts =
  products.filter((product) => {

    const searchMatch =
      product.title
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        );

    const categoryMatch =
      !filters.category ||
      product.category ===
        filters.category;

    const brandMatch =
      !filters.brand ||
      product.brand ===
        filters.brand;

    const minPriceMatch =
      !filters.minPrice ||
      product.price >=
        Number(filters.minPrice);

    const maxPriceMatch =
      !filters.maxPrice ||
      product.price <=
        Number(filters.maxPrice);

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch &&
      minPriceMatch &&
      maxPriceMatch
    );
  });

  const indexOfLastItem =
    filters.currentPage *
    ITEMS_PER_PAGE;

  const indexOfFirstItem =
    indexOfLastItem -
    ITEMS_PER_PAGE;

  const currentProducts =
    filteredProducts.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  const totalPages = Math.ceil(
    filteredProducts.length /
      ITEMS_PER_PAGE
  );

if (loading) {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h2>Loading Product...</h2>
    </div>
  );
}

  return (
    <div className="app-container">

      <Header
  showFilters={showFilters}
  setShowFilters={setShowFilters}
  searchText={searchText}
  setSearchText={setSearchText}
/>

      <div className="page-container">

        {showFilters && (
          <aside className="sidebar">

            <h3>Filters</h3>

            <CategoryFilter
              categories={
                categories
              }
            />

            <PriceFilter />

            <BrandFilter
              brands={brands}
            />

          </aside>
        )}

        <main className="content">

          <h2>Products</h2>

          <div className="product-grid">

            {currentProducts.map(
              (product) => (
                <ProductCard
                  key={
                    product.id
                  }
                  product={
                    product
                  }
                />
              )
            )}

          </div>

          {totalPages > 1 && (
            <Pagination
              totalPages={
                totalPages
              }
            />
          )}

        </main>

      </div>

    </div>
  );
};

export default ProductListingPage;