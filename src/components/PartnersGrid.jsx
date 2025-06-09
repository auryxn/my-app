// src/components/PartnersGrid.jsx
import React from "react";
import ProductCard from "./PartnersCard";
import { partnersData as defaultPartners } from "../data/partnersData";
import "../styles/HomePage.css";

const PartnersGrid = ({ selectedLetter = "", partnersData = defaultPartners }) => {
  // фильтруем по первой букве, если она указана
  const filteredPartners = selectedLetter
    ? partnersData.filter((partner) =>
        partner.name.toLowerCase().startsWith(selectedLetter.toLowerCase())
      )
    : partnersData;

  return (
    <div className="grid-container">
      {filteredPartners.length > 0 ? (
        filteredPartners.map((partner, index) => (
          <ProductCard key={index} {...partner} className="item" />
        ))
      ) : (
        <p>Нет партнёров на букву "{selectedLetter}"</p>
      )}
    </div>
  );
};

export default PartnersGrid;
