import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark";
    });

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <>
            <header className="flex justify-between items-center p-3 border-(--border) border-b-2 sticky">
                <div className="ml-2">
                    <h1 className="font-bold text-xl lg:text-3xl text-(--text)">Ash Mart</h1>
                </div>

                <div className="overflow-hidden  py-2 bg-(--bg2) rounded-xl max-lg:w-100 max-md:w-60 max-sm:hidden">
                    <div className="flex animate-marquee text-(--text) font-mono">
                        <span>📢❗🚨 Sale is Live • 50% OFF • Free Shipping • 🛒🛍️✨</span>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 lg:gap-4 font-medium text-lg lg:mr-10 text-(--text2)">
                    <NavLink to="/" className="link">
                        <span className="max-sm:hidden">Home</span>
                        <span className="hidden max-sm:inline">🏠</span>
                    </NavLink>
                    <NavLink to="/cart" className="link">
                        <span className="max-sm:hidden">Cart</span>
                        <span className="hidden max-sm:inline">🛒</span>
                    </NavLink>
                    <NavLink to="/wishlist" className="link">
                        <span className="max-sm:hidden">Wishlist</span>
                        <span className="hidden max-sm:inline">❤️</span>
                    </NavLink>

                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer h-10 w-10 rounded-full border-(--border) border bg-(--bg2) text-(--text) flex items-center justify-center transition-all duration-200 hover:scale-105">
                        {isDark ? "☀️" : "🌙"}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
