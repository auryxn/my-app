import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const PartnersCard = ({ name, image, link }) => {
  return (
    <Link to={link} state={{ brand: name }} className="item">
      <img src={image} alt={name} />
      <p>{name}</p>
    </Link>
  );
};

export default PartnersCard;
