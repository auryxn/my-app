// src/components/ShopLine.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ShopPage.css";

const ShopLine = ({ brand = "Бренд не выбран", path = "/" }) => {
  return (
    <div className="shop-line">
      <div className="menu-sections">
        <span>
          <Link to={path}>Домой {">"} </Link>
        </span>

        <span className="brand">
          {brand}
        </span>

        
      </div>
    </div>
  );
};

export default ShopLine;
