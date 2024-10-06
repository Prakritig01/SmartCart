import './Item.css';
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
  // console.log(item.id);
  const url = `/product/${item.id}`;
  return (
    //convert this into jsx template
    <div className="item">
      <Link to = {url}><img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>

      <div className="item-cost">
        <div className="item-cost-new">₹{item.new_cost}</div>
        <div className="item-cost-old">₹{item.old_cost}</div>
      </div>
      </Link>
    </div>
  );
};

export default Item;
