import { useState } from "react"
import favoriteBlack from "../assets/favorite_bw.svg"
import favoriteRed from "../assets/favorite_fill.svg"

function Card({ title, price, rating, img,color }) {
    const [fill, setFill] = useState(false)
    const changeLogo = () => {
        setFill((prev) => {
            const next = !prev
            return next;
        })
    }

    const [count, setCount] = useState(1)

    return (
        <>
            <div style={{ backgroundColor: color }} className="w-75 h-115 rounded-2xl relative shadow-xl">
                <div className="bg-white w-full absolute bottom-2 h-[93%] rounded-b-2xl rounded-t-[56px] flex flex-col items-center">
                    <h1 style={{ Color: color }} className="max-sm:text-sm text-xl font-bold mt-4 px-2 text-center">{title}</h1>

                    <div className="w-[90%] h-50 rounded-2xl overflow-hidden absolute bottom-30">
                        <img
                            className="w-full h-full object-contain"
                            src={img}
                            alt="Product image"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex justify-between w-[90%] mt-2 absolute bottom-15">
                        <h1 className="text-3xl font-extrabold text-[#1a1a1a]">${price}</h1>

                        <div className="flex flex-col items-end mr-1">
                            <h1 className="text-lg font-medium">{rating}⭐</h1>
                            <div className="flex justify-around items-center gap-2">
                                <button
                                    onClick={() => {
                                        if (count <= 1) return
                                        setCount(count - 1)
                                    }}
                                    className="cursor-pointer border p-1 w-5 h-5 flex items-center justify-center rounded-sm text-(--text2) border-(--text2)">-</button>
                                <h1 className="text-sm">{count}</h1>
                                <button
                                    onClick={() => {
                                        if (count >= 5) return
                                        setCount(count + 1)
                                    }}
                                    className="cursor-pointer border p-1 w-5 h-5 flex items-center justify-center rounded-sm text-(--text2) border-(--text2)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-500 absolute bottom-0 w-full h-13 rounded-b-2xl flex items-center justify-around">
                    <h1 className="text-2xl font-bold font-mono cursor-pointer active:scale-98 transition-transform duration-500 ease-in">
                        ADD TO CART
                    </h1>
                    <img
                        src={fill ? favoriteRed : favoriteBlack}
                        alt="favorite"
                        className="cursor-pointer"
                        onClick={changeLogo}
                    />

                </div>
            </div>
        </>
    )
}

export default Card