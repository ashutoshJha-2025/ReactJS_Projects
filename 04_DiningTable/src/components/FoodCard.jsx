import { useDispatch } from 'react-redux';
import { addToCart } from '../global/features/cartSlice.js';

const FoodCard = ({ food }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-70 overflow-hidden rounded-2xl border border-gray-300 shadow-(--shadow-md) bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-52 overflow-hidden flex items-center justify-center p-2">
                <img
                    src={food.image_url}
                    alt={food.food_name}
                    className="h-full w-full shadow-(--shadow-sm) rounded-2xl object-cover"
                />
            </div>

            <div className="px-4 py-2">
                <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {food.food_name
                        .split(" ")
                        .map(
                            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                        )
                        .join(" ")}
                </h3>

                <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                        {food.category_id.category_name.toUpperCase()}
                    </span>

                    <span
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${food.food_type === "Veg"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        <span
                            className={`h-2 w-2 rounded-full ${food.food_type === "Veg"
                                ? "bg-green-600"
                                : "bg-red-600"
                                }`}
                        />
                        {food.food_type}
                    </span>

                    {food.is_available ? (
                        <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                            Available
                        </span>
                    ) : (
                        <span className="rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
                            Out of Stock
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                        ₹{food.price}<span className="text-slate-700 font-normal text-sm">/serving</span>
                    </p>

                    <button
                        onClick={() => dispatch(addToCart(food))}
                        disabled={!food.is_available}
                        className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${food.is_available
                            ? "bg-black text-white cursor-pointer hover:bg-gray-800"
                            : "cursor-not-allowed bg-gray-300 text-gray-500"
                            }`}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;