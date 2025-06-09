import React from "react";
import cartData from "../data/cartData";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = () => {
  const { items } = cartData;

  return (
    <div>
      <header className="header">
        <ul className="header-1">
          <li className="logo">
            {/* SVG логотип */}
            <svg width="43" height="13" viewBox="0 0 43 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* ...path... */}
            </svg>
          </li>
          <li className="search-bar">
            <span className="search-bar-1">SEARCHBAR</span>
            <div className="search-1">
              <input type="text" className="search" placeholder="Поиск..." />
            </div>
          </li>
          <ul className="header-1-1">
            <li className="other"><button>Русский-USD</button></li>
            <li className="other"><Link to="/myShopProfile">Мой профиль</Link></li>
            <li className="other"><Link to="/liked">Понравилось</Link></li>
            <li className="other"><Link to="/shoppingCart">Корзина</Link></li>
          </ul>
        </ul>
      </header>

      <div className="shop-line">
        <div className="menu-sections">
          <span>
            <Link to="/">Домой &gt; </Link>
          </span>
          <span className="brand">Корзина</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <svg className="cart-icon" width="200" height="185" viewBox="0 0 200 185" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ...path... */}
          </svg>
          <h2 className="cart-text">Ваша корзина пуста...</h2>
          <Link to="/" className="shop-btn">За покупками!</Link>
        </div>
      ) : (
        <div className="cart-list">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <div>{item.name}</div>
                <div>{item.price} $</div>
                <div>Количество: {item.quantity}</div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            Итого: {items.reduce((sum, item) => sum + item.price * item.quantity, 0)} $
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-left">
          <div className="logo">LOGO</div>
          <div className="social-icons">
            {/* SVG иконки соцсетей */}
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <p>CUSTOMER SERVICE</p>
            <ul>
              <li><a href="#">Orders and delivery</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <p>COMPANY</p>
            <ul>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <p>sndjvnndv</p>
            <ul>
              <li><a href="#">BLABLABLA</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
