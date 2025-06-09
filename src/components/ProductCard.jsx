import React from "react";
import "../styles/ShopPage.css"

const ProductCard = ({ name, image, info, cost, link }) => {
  return (
    <a href={link} className="item">
      <img src={image} alt={name} />
      <div className="brand-name">{name}</div>
      <div className="info">{info}</div>
      <div className="cost">{cost} $</div>
    </a>
  );
};

export default ProductCard;
