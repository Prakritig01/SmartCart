import new_collection_array from "../Assests/new_collection";
import Item from "../Item/Item";
import './new_collection.css';
const New_collection = () => {
    return ( 
        <div className="new_collection">
            <div className="new_collection_heading">
                <h1>NEW COLLECTION</h1>
                <hr />
            </div>
            <div className="new_collection_items">
                {new_collection_array.map((collection,i)=>{
                    return <Item item = {collection} id = {i} />
                })}
            </div>
        </div>
    );
};
 
export default New_collection;