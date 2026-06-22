import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "../global/features/menuSlice.js"

const HeroSection = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.menu.query);

    return (
        <>
            <div className='w-full h-auto flex flex-col items-center justify-center px-8 py-8'>
                <h1
                    style={{ fontFamily: 'serif' }}
                    className='text-center text-(--text-primary) font-bold max-sm:text-3xl text-5xl mb-2'
                >
                    Cravings delivered,
                    <br />
                    <em
                        style={{ fontFamily: 'serif' }}
                        className='text-(--color-secondary)'>fresh & fast.</em>
                </h1>
                <p className='text-(--text-secondary) max-sm:text-xs text-lg mb-6 font-sans'>Hundreds of dishes from top restaurants, at your door in minutes.</p>
                <div className='flex max-sm:w-75 w-130 bg-(--bg-secondary) border border-(--border-strong) rounded-4xl shadow-(--shadow-sm)'>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => dispatch(setQuery(e.target.value))}
                        placeholder="Search for pizza, burgers, tacos..."
                        className="flex-1 py-3.5  placeholder:text-gray-500 max-sm:px-2 px-5 max-sm:text-sm text-lg bg-transparent text-(--text-primary) outline-none"
                    />

                    {query && (
                        <button
                            onClick={() => dispatch(setQuery(""))}
                            className="text-(--text-muted) px-3 text-lg font-light"
                        >
                            ✕
                        </button>
                    )}
                    
                    <button className="bg-(--color-secondary) text-white py-2.5 px-5.5 m-1 rounded-4xl font-sans font-semibold cursor-pointer hover:bg-[#FF6B35]">
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default HeroSection