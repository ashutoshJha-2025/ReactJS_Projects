import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-8 p-10 w-100 rounded-2xl bg-gray-200 text-black dark:bg-black dark:text-white">
                <h1 className="text-3xl font-semibold">Value of counter is {counter}</h1>

                <div className=" flex gap-3">
                    <button
                        onClick={() => setCounter(counter + 1)}
                        className="rounded-xl px-2 py-1 cursor-pointer bg-blue-500 text-white hover:bg-blue-700 dark:text-black transition-all duration-150 ease-in">
                        Increment++
                    </button>

                    <button
                        onClick={() => {
                            if (counter > 0) setCounter(prev => prev - 1)
                        }}
                        className="rounded-xl px-2 py-1 cursor-pointer bg-green-500 text-white hover:bg-green-700  dark:text-black transition-all duration-150 ease-in">
                        Decrement--
                    </button>

                    <button
                        onClick={() => setCounter(0)}
                        className="rounded-xl px-2 py-1 cursor-pointer bg-red-500 text-white hover:bg-red-700 dark:text-black transition-all duration-150 ease-in">
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter;
