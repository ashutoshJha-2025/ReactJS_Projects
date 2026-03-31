import { createContext, useContext } from "react";

export const WishlistContext = createContext([]);

export const WishlistProvider = WishlistContext.Provider;

export default function useWishlist() {
    return useContext(WishlistContext);
}