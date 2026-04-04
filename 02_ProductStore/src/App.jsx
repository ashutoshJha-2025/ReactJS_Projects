import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";
import { useState, useEffect } from "react";
import { CartProvider } from "./context/CartContext";

function App() {
  // Wishlist context
  const [likeItems, setLikeItems] = useState([]);
  const addWishlist = (product) => {
    setLikeItems((prev) => [product, ...prev])
  }
  const removeWishlist = (id) => {
    setLikeItems((prev) => prev.filter((individualProduct) => individualProduct.id != id))
  }


  // Cart Context
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prev) => [product, ...prev])
  }
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((individualProduct) => individualProduct.id != id))
  }

  // localstorage
  useEffect(() => {
    const localLikeItems = JSON.parse(localStorage.getItem('likeItemsList'))
    const localCartItems = JSON.parse(localStorage.getItem('cartItemsList'))

    if ((localLikeItems && localLikeItems.length > 0) || (localCartItems && localCartItems > 0)) {
      setLikeItems(localLikeItems)
      setCartItems(localCartItems)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('likeItemsList', JSON.stringify(likeItems))
    localStorage.setItem('cartItemsList', JSON.stringify(cartItems))
  }, [likeItems, cartItems])

  return (
    <>
      <WishlistProvider value={{ likeItems, addWishlist, removeWishlist }}>
        <CartProvider value={{ cartItems, addToCart, removeFromCart }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart data={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/wishlist" element={<Wishlist data={likeItems} />} />
          </Routes>
        </CartProvider>
      </WishlistProvider>
    </>
  )
}

export default App;