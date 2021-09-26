import React from "react";

export default React.createContext({
    cart: [],
    user: {},

    assProductToCart: (product) => {},
    removeProductFromCart: (productId) => {},
});
