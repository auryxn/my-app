import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import ShopLine from "../components/ShopLine";
import "../styles/ShopPage.css";

const ShopPage = () => {
  const [filter, setFilter] = useState("");
  const [sortType, setSortType] = useState("sort");
  const location = useLocation();
  const brand = location.state?.brand || "Бренд не выбран";

  return (
    <>
      <ShopLine brand={brand} path="/"/>
      <Filters sortType={sortType} onSortChange={setSortType} />
      <ProductGrid filter={filter} sortType={sortType} />
    </>
  );
};

export default ShopPage;
