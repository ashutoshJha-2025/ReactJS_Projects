import { createSlice } from "@reduxjs/toolkit";

const getItemId = (item) =>
    item?._id || `${item?.food_name || "item"}-${item?.category_id?.category_name || "unknown"}`;

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const food = action.payload;
            const itemId = getItemId(food);
            const existingItem = state.cart.find((item) => getItemId(item) === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...food, quantity: 1, _id: itemId });
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => getItemId(item) !== itemId);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find((cartItem) => getItemId(cartItem) === id);

            if (item) {
                if (quantity <= 0) {
                    state.cart = state.cart.filter((cartItem) => getItemId(cartItem) !== id);
                } else {
                    item.quantity = quantity;
                }
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

