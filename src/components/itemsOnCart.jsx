import "./itemsOnCart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const ItemsOnCart = (props) => {
    const removeFromCart = useContext(storeContext).removeProductFromCart;

    const getTotal = () => {
        let total = props.data.quantity * props.data.price;
        return total.toFixed(2);
    };

    const handleRemove = () => {
        // console.log(props.data._id);
        removeFromCart(props.data._id);
    };

    return (  
        <div className="item-on-cart">
            <img src={"/item-images/" + props.data.image}></img>
            
            <div className="item-info">
                <h6>{props.data.title}</h6>
                <label>{props.data.category}</label>
            </div>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Quantity: {props.data.quantity}</label>
            <label>Total: ${getTotal()}</label>
            
            <button onClick={handleRemove} className="btn btn-sm btn-outline-danger">Remove</button>
        </div>
    );
};
//  GIT TEST
export default ItemsOnCart;