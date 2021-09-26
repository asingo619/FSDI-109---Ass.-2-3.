import React, { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    id: 1001,
    name: "Andrew Singo",
    email: "test@email.com",
  });

  const addToCart = (product) => {
        var copy = [...cart];

        let found = false;
        for(let i=0; i<copy.length; i++) {
            let prod = copy[i];
            if(prod._id === product._id) {
                found = true;
                prod.quantity += product.quantity
            }
        }

        if (!found) {
          copy.push(product);
        }
        
        setCart(copy);
  };

  const removeFromCart = (productId) => {
        console.log("removing", productId);
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,

        addProductToCart: addToCart,
        removeProductFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
