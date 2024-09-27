import trending_women_array from './../Assests/trending_products';
import Item from '../Item/Item';
import './Trending.css';
const Trending = () => {
  return (
    
    <div className="trending">
    <div className="trending_heading">
        <h1>TRENDING IN WOMEN</h1>
        <hr />
      </div>
      <div className="trending_items">
        {/* {trending_women_array.map((item,i) =>{
          return <Item item = {item} key = {i} />
        })} */}

        {trending_women_array.map((item,i) =>{
          return <Item item={item} id = {i}/>
        })}
       
      </div>
    </div>
      
    
  );
};

export default Trending;
