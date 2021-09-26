import { prettyDOM } from "@testing-library/react";
import React, { useContext } from "react";
import storeContext from "../context/storeContext";

import "./cart.css";
import ItemsOnCart from "./itemsOnCart"

const Cart = () => {
    const cart = useContext(storeContext).cart;

    const getTotal = () => {
        let total = 0;
        for (let i=0; i< cart.length; i++) {
            let prod = cart[i];
            total += (prod.price * prod.quantity);

            return total.toFixed(2);
        };
    };

    if(!cart.length) {
        return <div className="cart-page">
            <h3>Ooops! Looks like you haven't made a selection.</h3>
            <h6>Please add items before ordering.</h6>
        </div>
    }
    return(
    <div className="cart-page">
            <h1>Checkout</h1>
            <h5>There are {cart.length} item in your cart.</h5>
            <hr />

            <div className="cart-container">
                <ul>
                    {cart.map(items => 
                    <ItemsOnCart key={items._id} data={items}></ItemsOnCart>)}
                </ul>
            </div>

            <div className="col-2 total-container py-3">
                <h4>Order Total:</h4>
                <h5>$ {getTotal()}</h5>
                <hr />
                <button className="btn btn-block btn=primary">Place Order</button>
            </div>
    </div>
    );
};

export default Cart;