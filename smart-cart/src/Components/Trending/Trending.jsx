import trending_products from "./../Assests/trending_products";
import Item from "../Item/Item";
import "./Trending.css";
const products_women = trending_products.trending_products_women;
const products_men = trending_products.trending_products_men;
const products_kids = trending_products.trending_products_kids;

const Trending = () => {
  return (
    <div className="trending">
      <div className="trending_women">
        <div className="trending_heading">
          <h1>TRENDING IN WOMEN</h1>
          <hr />
        </div>
        <div className="trending_items">
          {products_women.map((item, i) => {
            return <Item  key = {item.id} item={item} id={i} />;
          })}
        </div>
      </div>


      <div className="trending_men">
      <div className="trending_heading">
          <h1>TRENDING IN MEN</h1>
          <hr />
        </div>
        <div className="trending_items">
          {products_men.map((item, i) => {
            return <Item key = {item.id} item={item} id={i} />;
          })}
        </div>
      </div>

      <div className="trending_kids">
      <div className="trending_heading">
          <h1>TRENDING IN MEN</h1>
          <hr />
        </div>
        <div className="trending_items">
          {products_kids.map((item, i) => {
            return <Item key = {item.id} item={item} id={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
