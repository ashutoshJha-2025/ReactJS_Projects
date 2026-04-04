import { createContext, useContext } from "react";

export const WishlistContext = createContext({
    likeItems: [],

    addWishlist: (product) => { } ,
    removeWishlist: (id) => { }
})

export const useWishlist = () => {
    return useContext(WishlistContext)
}

export const WishlistProvider = WishlistContext.Provider