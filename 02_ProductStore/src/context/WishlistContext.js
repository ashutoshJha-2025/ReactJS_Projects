import { createContext, useContext } from "react";

export const WishlistContext = createContext([])

export const useWishlist = () => {
    return useContext(WishlistContext)
}

export const WishlistProvider = WishlistContext.Provider