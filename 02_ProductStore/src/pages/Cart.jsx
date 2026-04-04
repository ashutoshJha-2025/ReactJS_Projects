import CartProduct from "../components/CartProduct"

function Cart({ data, removeFromCart }) {
    const DISCOUNT_PERCENTAGE = 5

    // Calculate subtotal
    const subtotal = data.reduce((total, item) => {
        return total + (item.price * item.count)
    }, 0)

    // Calculate discount amount
    const discountAmount = (subtotal * DISCOUNT_PERCENTAGE) / 100

    // Calculate total
    const total = subtotal - discountAmount

    return (
        <>
            {data && data.length > 0 ? (
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-225 h-150 flex flex-col justify-center items-end">
                        <div className="bg-(--accent) w-full h-10 flex justify-between items-center text-white px-5">
                            <h2>Product</h2>
                            <h2>Quantity</h2>
                            <h2>Subtotal</h2>
                        </div>

                        {/* all products lisiting */}
                        <div className="w-full  flex flex-col justify-between items-center mt-2 pr-5">
                            {/* Product 1 listing */}
                            {data.map((item) => (
                                <CartProduct key={item.id} item={item} onRemove={removeFromCart} />
                            ))}
                        </div>

                        <div className="bg-(--accent) w-[40%] h-0.5"></div>

                        <div className="flex flex-col w-[40%] mt-2 ">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-lg font-medium text-(--text)">Subtotal</h1>
                                <h1 className="text-lg font-medium text-(--text2)">$ {subtotal.toFixed(2)}</h1>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-lg font-medium text-(--text)">Discount</h1>
                                <h1 className="text-lg font-medium text-(--text2)">{DISCOUNT_PERCENTAGE} %</h1>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-lg font-medium text-(--text)">Total</h1>
                                <h1 className="text-lg font-medium text-(--text2)">$ {total.toFixed(2)}</h1>
                            </div>
                        </div>

                        <div className="bg-(--accent) px-5 py-2 rounded-4xl cursor-pointer mt-5 active:scale-101 transition-(--trans)">
                            <h1 className="text-white font-medium text-center">Procedd to Checkout →</h1>
                        </div>
                    </div >
                </div>
            ) : (<
                h1 className="text-2xl font-bold text-(--accent)">No items in Cart</h1 >
            )}
        </>
    )
}

export default Cart