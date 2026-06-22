import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../components/FoodCard.jsx";
import { loadMenuItems } from "../global/features/menuSlice.js";

const FoodsList = () => {
    const dispatch = useDispatch();
    const { items, query, activeTab, loading, error } = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(loadMenuItems());
    }, [dispatch]);

    const filteredItems = useMemo(() => {
        const searchText = query.trim().toLowerCase();

        return items.filter((food) => {
            const categoryName = food.category_id?.category_name || "";
            const foodName = food.food_name || "";
            const matchesTab = activeTab === "All" || categoryName === activeTab;
            const matchesQuery =
                searchText.length === 0 ||
                foodName.toLowerCase().includes(searchText) ||
                categoryName.toLowerCase().includes(searchText);

            return matchesTab && matchesQuery;
        });
    }, [items, query, activeTab]);

    if (loading) {
        return (
            <div className="flex min-h-80 items-center justify-center text-(--text-secondary)">
                Loading menu...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-80 items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-wrap items-start justify-center gap-13 py-5">
            {filteredItems.length > 0 ? (
                filteredItems.map((food) => (
                    <FoodCard
                        key={food._id || `${food.food_name}-${food.category_id?.category_name || "item"}`}
                        food={food}
                    />
                ))
            ) : (
                <p className="text-(--text-secondary) text-lg">No items found.</p>
            )}
        </div>
    );
};

export default FoodsList;