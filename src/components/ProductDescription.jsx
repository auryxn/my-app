import React from 'react';
import productDescriptionData from '../data/productDescriptionData'; // путь укажи свой

const ProductDescription = () => {
  const { titles, values } = productDescriptionData;

  return (
    <div>
      <div className="title-1">DESCRIPTION +</div>
      <div className="product-container">
        <ul className="product-titles">
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
        <ul className="product-values">
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
