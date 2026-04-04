function CartProduct({ item, onRemove }) {
    const handleRemove = () => {
        onRemove(item.id)
    }

    return (
        <>
                <div key={item.id} className="w-full  flex justify-between items-center">
                {/* product details */}
                <div className="flex justify-between items-center gap-3">
                    <div className="bg-(--bg2) w-20 h-20 overflow-hidden">
                        <img
                            className="w-full h-full object-contain"
                            src={item.img}
                            alt="Product image"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-lg font-medium text-(--text2)">{item.title}</h1>
                        <h1 className="text-md font-normal text-(--text2)">Price: $ {item.price}</h1>
                        <button onClick={handleRemove} className="text-red-500 cursor-pointer font-medium">Remove</button>
                    </div>
                </div>

                {/* quantity */}
                <div className="cursor-pointer border p-3 w-5 h-5 flex items-center justify-center rounded-sm text-(--text2) border-(--text2)">
                    {item.count}
                </div>

                {/* price */}
                <h1 className="text-xl font-normal text-(--text)">$ {item.price * item.count}</h1>
            </div>
        </>
    )
}

export default CartProduct;
