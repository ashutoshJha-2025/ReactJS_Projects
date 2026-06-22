import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './features/menuSlice.js'
import cartReducer from './features/cartSlice.js'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
    },
})