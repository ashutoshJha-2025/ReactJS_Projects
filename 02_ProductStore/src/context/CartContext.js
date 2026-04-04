import { createContext, useContext } from "react";

export const CartContext = createContext({
    cartItems: [],

    addToCart: (product) => { },
    removeFromCart: (id) => { }
})

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = CartContext.Provider