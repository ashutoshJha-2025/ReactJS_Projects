import darkMode from '../assets/dark_mode.svg'
import lightMode from '../assets/light_mode.svg'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../global/features/menuSlice.js';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const navigate = useNavigate()
    const TABS = ["All", "Breakfast", "Main Course", "Dessert"];
    const activeTab = useSelector((state) => state.menu.activeTab);
    const dispatch = useDispatch();

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    const buttonClass = 'py-1.5 px-3.5 rounded-2xl text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out font-sans text-(--text-primary) '
    const activeClass = 'bg-(--color-secondary)  text-white'

    return (
        <nav className='sticky top-0 z-100 bg-(--bg-secondary) border-(--border-color) border-b-2 px-8 flex items-center justify-between h-16 w-full'>
            <div className='font-bold text-3xl text-(--color-secondary)'>
                Dining
                <span className='text-(--text-primary)'>Table</span>
            </div>

            <div className='flex gap-2'>
                {TABS.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => dispatch(setActiveTab(tab))}
                        className={`${buttonClass} ${activeTab === tab ? activeClass : ""}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className='flex gap-8 items-center justify-around'>
                <button
                    onClick={toggleTheme}
                    className={`${theme === 'light' ? 'bg-[#2A2D3E]' : 'bg-white'} p-2  rounded-full flex justify-center items-center transition-(--transition-base) cursor-pointer overflow-hidden`}>
                    <img src={theme === 'light' ? darkMode : lightMode} alt="Dark Mode" />
                </button>

                <button
                    onClick={() => navigate('/cart')}
                    className='bg-(--color-primary) text-(--text-on-primary) py-2 px-4.5 rounded-3xl font-semibold text-sm flex justify-center items-center gap-4 font-sans transition-(--transition-base) cursor-pointer hover:scale-105 '>
                    Cart <span className='bg-(--color-secondary) text-white h-5 w-5 rounded-full text-center text-xs flex items-center justify-center'>{cartItems.length}</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar