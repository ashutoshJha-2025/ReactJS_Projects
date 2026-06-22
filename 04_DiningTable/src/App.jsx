import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CartPage from "./pages/CartPage.jsx"

const App = () => {
  return (
    <>
      <div className="bg-(--bg-primary) w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App