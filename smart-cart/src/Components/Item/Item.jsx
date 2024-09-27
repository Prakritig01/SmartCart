import './Item.css'
const Item = ({ item }) => {
  return (
    //convert this into jsx template
    <div className="item">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>

      <div className="item-cost">
        <div className="item-cost-new">₹{item.new_cost}</div>
        <div className="item-cost-old">₹{item.old_cost}</div>
      </div>
    </div>
  );
};

export default Item;
