import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";
import { useState,useEffect } from "react";

function App() {
  const [likeItems, setLikeItems] = useState([]);
  const addWishlist = (product) => {
    setLikeItems((prev) => [product, ...prev])
  }
  const removeWishlist = (id) => {
    setLikeItems((prev) => prev.filter((individualProduct) => individualProduct.id != id))
  }


  useEffect(() => {
    const localLikeItems = JSON.parse(localStorage.getItem('likeItemsList'))

    if (localLikeItems && localLikeItems.length > 0) {
      setLikeItems(localLikeItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('likeItemsList', JSON.stringify(likeItems))
  }, [likeItems])

  return (
    <>
      <WishlistProvider value={{ likeItems, addWishlist, removeWishlist }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist data={likeItems} />} />
        </Routes>
      </WishlistProvider>
    </>
  )
}

export default App;