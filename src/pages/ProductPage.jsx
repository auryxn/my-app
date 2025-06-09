import React, { useState } from "react";
import ProductDescription from '../components/ProductDescription';
import SizeChart from '../components/SizeChart';
import Rating from '../components/Rating';
import Reviews from '../components/Reviews';
import Pagination from '../components/Pagination';
import BrandInfo from '../components/BrandInfo';
import "../styles/ProductPage.css";
import brandProducts from '../data/brandProducts';

const ProductPage = () => {
  const product = brandProducts[0];

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(product.sizes[0]);
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const [activePhoto, setActivePhoto] = useState(product.image);

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <>
      <div className="product">
        <div className="left-side">
          <ul className="additional-photos">
            {product.additionalPhotos.map((photo, idx) => (
              <li key={idx}>
                <img
                  src={photo}
                  alt=""
                  onClick={() => setActivePhoto(photo)}
                />
              </li>
            ))}
          </ul>
          <div className="photo">
            <img src={activePhoto} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="headerr">
            <h1>{product.name}</h1>
              <button className="favorite" id="colorBtn" onClick={() => setIsFavorite((prev) => !prev)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.5334 3.33114L10.5056 2.43776C8.09323 0.340682 3.6698 1.06436 2.073 3.70085C1.32334 4.94092 1.1542 6.73131 2.52308 9.01627C3.8418 11.2164 6.58531 13.8517 11.5334 16.7221C16.4814 13.8517 19.2235 11.2164 20.5436 9.01627C21.9125 6.7301 21.7448 4.94092 20.9937 3.70085C19.3969 1.06436 14.9735 0.33947 12.5611 2.43655L11.5334 3.33114ZM11.5334 18.1828C-10.4448 5.90096 4.76634 -3.68498 11.2811 1.38558C11.3671 1.45266 11.4512 1.52175 11.5334 1.59287C11.6141 1.5213 11.6983 1.45256 11.7856 1.3868C18.299 -3.6874 33.5115 5.89975 11.5334 18.1828Z" fill={isFavorite ? "#F44336" : "black"}/></svg>
              </button>
          </div>

          <div className="pricing">
            {[{ count: "1-5 шт.", price: `$${product.price}` },
              { count: "5-10 шт.", price: `$${product.price - 5}` },
              { count: "10+ шт.", price: `$${product.price - 10}` }
            ].map((item, idx) => (
              <div key={idx}>
                <p className="count">{item.count}</p>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="options">
            <p>Выберите цвет</p>
            <div className="colors">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color ${color} ${
                    activeColor === color ? "active" : ""
                  }`}
                  onClick={() => handleColorClick(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="options">
            <p>Выберите размер</p>
            <div className="sizes">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size ${activeSize === size ? "active" : ""}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity">
            <div className="quantity-1">
              <button className="btn" onClick={() => handleQuantityChange(-1)}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn" onClick={() => handleQuantityChange(1)}>
                +
              </button>
            </div>
          </div>

          <div className="total">
            <p>Итого:</p>
            <p className="price-1">${quantity * product.price}</p>
          </div>

          <div className="buttons-of-product">
            <button className="cart-btn">Добавить в корзину</button>
            <button className="contact-btn">
              {/* сюда вставь иконку письма */}
            </button>
          </div>
        </div>
      </div>

      <ProductDescription />
      <SizeChart />
      <Rating />
      <Reviews />
      <BrandInfo />
    </>
  );
};

export default ProductPage;
