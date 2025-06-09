import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ShopPage.css";

const Filters = ({ sortType, onSortChange }) => {
  const location = useLocation();
  const brand = location.state?.brand || "Бренд не выбран";

  return (
    <div className="filters">
      <div className="left-side">
        <div className="name-brand">{brand}</div>

        <div className="all-filters">
          <button className="filters-button">Все фильтры</button>
        </div>
      </div>

      <div className="form-group">
        <div className="custom-select">
          <select
            id="sort-select"
            name="sort"
            value={sortType}
            onChange={(e) => onSortChange(e.target.value)}
            required
          >
            <option value="sort">Sort by</option>
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
            <option value="price-low">min → max</option>
            <option value="price-high">max → min</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
