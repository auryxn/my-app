import React, { useState } from "react";
import "../styles/HomePage.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Partners = ({ onSelectLetter }) => {
  return (
    <div className="partners-section">
      <h2 className="partners-title">Наши партнеры</h2>
      <ul className="alphabet-list">
        {alphabet.map((letter) => (
          <li key={letter}>
            <button onClick={() => onSelectLetter(letter)}>{letter}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
