import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, removeFromCart, updateQuantity } from '../global/features/cartSlice.js';

function CartRow({ item }) {
    const dispatch = useDispatch();
    const itemId = item._id || `${item.food_name}-${item.category_id?.category_name || "item"}`;

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 px-1 border-b border-(--border-color) last:border-b-0">
            <div className="flex gap-4 items-center flex-1 min-w-0">
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-(--text-primary) text-xl truncate">
                            {item.food_name
                                .split(" ")
                                .map(
                                    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                                )
                                .join(" ")}
                        </h3>
                    </div>
                    <p className="text-(--color-secondary) font-semibold text-sm mt-0.5">
                        ₹{item.price.toFixed(2)}/serving
                    </p>
                    <p className="text-(--text-secondary) text-xs mt-0.5">
                        {item.category_id?.category_name || "—"}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-3 border border-(--border-strong) rounded-md px-3 py-1.5 bg-(--bg-primary)">
                    <button
                        onClick={() => dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }))}
                        className="text-(--text-primary) text-lg font-bold w-5 h-5 flex items-center justify-center cursor-pointer hover:text-(--color-secondary) transition-(--transition-fast)"
                    >
                        −
                    </button>
                    <span className="w-5 text-center font-semibold text-(--text-primary) text-sm">
                        {item.quantity}
                    </span>
                    <button
                        onClick={() => dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }))}
                        className="text-(--text-primary) text-lg font-bold w-5 h-5 flex items-center justify-center cursor-pointer hover:text-(--color-secondary) transition-(--transition-fast)"
                    >
                        +
                    </button>
                </div>

                <span className="w-20 text-right font-bold text-(--text-primary) text-sm">
                    ₹{(item.price * item.quantity).toFixed(2)}
                </span>

                <button
                    onClick={() => dispatch(removeFromCart(itemId))}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-md transition-(--transition-fast) cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[35vh] gap-4 text-center px-4">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <circle cx="45" cy="45" r="44" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="2" />
                <path d="M22 50 Q45 68 68 50" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="35" cy="38" r="6" fill="var(--border-strong)" />
                <circle cx="55" cy="38" r="6" fill="var(--border-strong)" />
                <path d="M38 42 Q45 46 52 42" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            <h2 className="text-2xl font-bold text-(--text-primary)">Your cart is empty</h2>
            <p className="text-(--text-secondary) text-sm max-w-xs">
                Looks like you haven't added anything yet. Go explore the menu!
            </p>
        </div>
    );
}

const CartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const delivery = subtotal > 0 ? 50 : 0;
    const total = subtotal + delivery;

    return (
        <div className="w-full min-h-screen flex justify-center items-start">
            <div className="w-[60%] min-h-screen bg-purple-00 text-white p-5">
                <button
                    className="text-md font-medium bg-(--color-secondary) px-3 py-1 rounded-lg cursor-pointer mb-5 hover:bg-[#ff8442]"
                    onClick={() => navigate('/')}
                >
                    Back to Menu
                </button>

                <h1 className="text-4xl font-semibold text-(--text-primary) mb-6">Your Cart</h1>

                <div className="bg-(--bg-primary) rounded-md shadow-(--shadow-md) border border-(--border-color) overflow-hidden">
                    <div className="px-6 divide-y divide-(--border-color)">
                        {cartItems.length !== 0 ? (
                            cartItems.map((item) => (
                                <CartRow
                                    key={item._id || `${item.food_name}-${item.category_id?.category_name || "item"}`}
                                    item={item}
                                />
                            ))
                        ) : (
                            <EmptyCart />
                        )}
                    </div>

                    <div className="px-6 pt-4 pb-6 mt-2 border-t border-(--border-color) space-y-3">
                        <div className="flex justify-between text-(--text-primary) font-semibold text-base">
                            <span>Subtotal:</span>
                            <span className="text-(--color-secondary)">₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-(--text-primary) font-semibold text-base">
                            <span>Delivery:</span>
                            <span className="text-(--color-secondary)">₹{delivery.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-(--border-color) pt-3 flex justify-between text-(--text-primary) font-bold text-lg">
                            <span>Total:</span>
                            <span className="text-(--color-secondary)">₹{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="flex-1 bg-(--color-primary) text-(--text-on-primary) font-bold py-4 rounded-md hover:opacity-90 transition-(--transition-fast) cursor-pointer"
                    >
                        Clear Cart
                    </button>
                    <button
                        className="flex-1 bg-(--color-secondary) text-white font-bold py-4 rounded-md hover:bg-(--color-accent) transition-(--transition-fast) cursor-pointer"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;