import { createContext, useContext } from "react";

export const WishlistContext = createContext({
    likeItems: [
        {
            id: 1,
            title: "lipstick",
            price: 9.99,
            rating: 4,
            img: "dkncdnk",
        },
    ],

    addWishlist: (product) => { } ,
    removeWishlist: (id) => { }
})

export const useWishlist = () => {
    return useContext(WishlistContext)
}

export const WishlistProvider = WishlistContext.Provider