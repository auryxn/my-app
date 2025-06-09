import React from 'react';
import brandData from '../data/brandData.js'; // путь укажи свой

const BrandInfo = () => {
  const { name, avatar, rating, items, description, allProductsLink } = brandData;

  return (
    <div>
      <div className="about-brand">
        <p>О МАГАЗИНЕ</p>
      </div>
      <div className="brand-card">
        <div className="brand-avatar">
          <img src={avatar} />
        </div>
        <div className="brand-info">
          <h1 className="brand-name">{name}</h1>
          <div className="brand-rating">
            <span className="rating-value">{rating}</span> rating | <span className="items">{items} items</span>
          </div>
          <p className="brand-description">{description}</p>
          <a href={allProductsLink} >
            <button className="all-products-btn">Все товары</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
