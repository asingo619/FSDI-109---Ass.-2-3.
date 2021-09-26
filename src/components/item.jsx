import React, { useContext, useState } from "react";
import QuanityPicker from "./quanityPicker";
import "./item.css";
import StoreContext from "../context/storeContext";

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addProductToCart = useContext(StoreContext).addProductToCart;

  const handleAdd = () => {
    console.log("Add item to cart");
    let prodForCart = {
      ...props.data,
      quantity: quantity,
    }
    
    addProductToCart(prodForCart);
  };

  const handleQuantityChange = (quantity) => {
    console.log("quantity-change", quantity);
    setQuantity(quantity);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  return (
    <div className="item">
      <img
        src={"/item-images/" + props.data.image}
        alt="The Sticky Rice Spot"
      ></img>

      <h5>{props.data.title}</h5>

      <div className="item-controls">
        <label>Price: $ {props.data.price.toFixed(2)}</label>
        <h6>
          Quantity:
          <QuanityPicker onChange={handleQuantityChange}></QuanityPicker>
        </h6>
        <label>Total: $ {getTotal()}</label>

        <button className="btn btn-sm btn-dark" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
