import React, { useState } from "react";
import Partners from "../components/Partners";
import PartnersGrid from "../components/PartnersGrid";

const HomePage = () => {
  const [selectedLetter, setSelectedLetter] = useState("");

  return (
    <>
    <Partners onSelectLetter={setSelectedLetter} />
    <PartnersGrid selectedLetter={selectedLetter} />
    </>
  );
};

export default HomePage;
