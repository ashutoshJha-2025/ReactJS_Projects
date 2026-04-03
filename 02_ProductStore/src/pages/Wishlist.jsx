import Card from "../components/Card"

function Wishlist({ data }) {
    return (
        <>
            <div className="w-full h-auto p-10 flex flex-wrap gap-5">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} style={{ backgroundColor: item.color }} className="w-75 h-115 rounded-2xl relative shadow-xl">
                            <div className="bg-white w-full absolute bottom-2 h-[93%] rounded-b-2xl rounded-t-[56px] flex flex-col items-center">
                                <h1 className="max-sm:text-sm text-lg font-bold mt-4 px-4 text-center">{item.title}</h1>
                                <div className="w-[90%] h-50 rounded-2xl overflow-hidden absolute bottom-30">
                                    <img
                                        className="w-full h-full object-contain"
                                        src={item.img}
                                        alt="Product image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex justify-between w-[90%] mt-2 absolute bottom-15">
                                    <h1 className="text-3xl font-extrabold text-[#1a1a1a]">${item.price}</h1>
                                    <div className="flex flex-col items-end mr-1">
                                        <h1 className="text-lg font-medium">{item.rating}⭐</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-yellow-500 absolute bottom-0 w-full h-13 rounded-b-2xl flex items-center justify-center">
                                <h1 className="text-2xl font-bold font-mono">IN WISHLIST</h1>
                            </div>
                        </div>


                    ))
                ) : (
                    <h1 className="text-2xl font-bold text-(--accent)">No items in wishlist</h1>
                )}
            </div>
        </>
    )
}

export default Wishlist