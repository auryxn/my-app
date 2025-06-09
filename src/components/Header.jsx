import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="header-1">
        <li className="logo"></li>

        <li className="search-bar">
          <span className="search-bar-1">SEARCHBAR</span>
          <div className="search-1">
            <input type="text" className="search" />
          </div>
        </li>

        <ul className="header-1-1">
          <li className="other">
            <button>Русский-USD</button>
          </li>
          <li className="other">
            <button>
              <Link to="/myShopProfile">Мой профиль</Link>
            </button>
          </li>
          <li className="other">
            <button>
              <Link to="/liked">Понравилось</Link>
            </button>
          </li>
          <li className="other">
            <button>
              <Link to="/shoppingCartPage">Корзина</Link>
            </button>
          </li>
        </ul>
      </ul>
    </header>
  );
};

export default Header;
