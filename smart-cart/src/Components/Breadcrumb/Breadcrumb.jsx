import breadcrum_arrow from './../Assests/breadcrumb/breadcrum_arrow.png';
import './Breadcrum.css';
const Breadcrumb = ({product}) => {
    return ( 
        <div className="breadcrum">
            <a href="/">HOME</a>
            <img src= {breadcrum_arrow} alt="bread_crum" />
            <a href= {`/${product.category.toLowerCase()}`}> {`${product.category.toUpperCase()}`}</a>
            <img src= {breadcrum_arrow} alt="bread_crum" />
            <span>{product.name}</span>
        </div>
     );
}
 
export default Breadcrumb;