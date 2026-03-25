import { useState } from "react";

function Toggle({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <button
                onClick={toggleTheme}
                className="bg-yellow-500 text-white dark:text-black rounded-xl px-3 py-1 cursor-pointer font-semibold hover:bg-yellow-600 duration-150 ease-in">Toggle to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </>
    )
}

export default Toggle;
