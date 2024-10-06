import breadcrum_arrow from "./../Assests/breadcrumb/breadcrum_arrow.png";
import "./Breadcrum.css";
import { Link } from "react-router-dom";
const Breadcrumb = ({ product }) => {
  return (
    <div className="breadcrum">
      
      <Link to="/">HOME</Link>
      <img src={breadcrum_arrow} alt="bread_crum" />

      <Link Link to={`/${product.category.toLowerCase()}`}>
        {" "}
        {`${product.category.toUpperCase()}`}
      </Link>
      <img src={breadcrum_arrow} alt="bread_crum" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrumb;
