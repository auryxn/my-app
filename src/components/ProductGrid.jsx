import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../data/productsData";
import "../styles/ShopPage.css";

const ProductGrid = ({ sortType, filter }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    let result = [...productsData];

    // 🔍 Пример фильтра по бренду (если нужен)
    if (filter) {
      result = result.filter((product) =>
        product.brand.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // 🔃 Сортировка
    switch (sortType) {
      case "asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low":
        result.sort((a, b) => a.cost - b.cost);
        break;
      case "price-high":
        result.sort((a, b) => b.cost - a.cost);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [sortType, filter]);

  return (
    <div className="grid-container">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
