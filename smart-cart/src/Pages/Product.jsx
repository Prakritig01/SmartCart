import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { useContext } from "react";
import { ShopContext } from "../Context/Shopcontext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/Description_box/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
const Product = () => {
  const { id } = useParams();
  const all_products = useContext(ShopContext);
  // console.log(all_products);
  // console.log(id);
  const single_product_array = all_products.filter((product) => product.id == id);
  const single_product = single_product_array[0];
  console.log(single_product);
  console.log(single_product.category);
  return (
    <>
      {/* <h1>Product page : {id}</h1> */}
      <Breadcrumb product={single_product} />
      <ProductDisplay product={single_product} />
      <DescriptionBox/>
      <RelatedProducts category = {single_product.category} />
    </>
  );
};

export default Product;
