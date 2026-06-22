import Navbar from "../components/Navbar.jsx"
import HeroSection from "../components/HeroSection.jsx"
import FoodsList from "./FoodsList.jsx"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FoodsList />
        </>
    )
}

export default HomePage